import React, { useState } from "react";
import icon from "../images/icon.png";
import axios from "axios";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const history = useHistory();

  const { mutateAsync: login, data: res } = useMutation(async () => {
    return await axios
      .post("/api/user/login", data)
      .then((res) => res.data)
      .catch((err) => console.error(err));
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(data);

    localStorage.setItem("token", res);

    history.push("/scm");

    e.target.reset();
  };

  return (
    <div className="center">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 id="nameDept">Supply Chain Management</h1>
        <img id="profileLogo" src={icon}></img>
        <div className="">
          <input
            type="text"
            name="name"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="center">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
