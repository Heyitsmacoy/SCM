import bycrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "admin",
      password: bycrypt.hashSync("admin", 8),
    },
  ],
};

export default data;
