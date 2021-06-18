import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import useForm from "../components/hooks/useForm";
//import SCM from "../pages/Scm";

import { validateEditProduct } from "../Utils/FormValidation";

// product edit form
const ProductEditForm = ({ match }) => {
  const { id } = match.params;
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useForm(register, validateEditProduct);

  const [] = useState({});
  //useHistory for pages
  const history = useHistory();

  const { data, isLoading, error } = useQuery(["products"], async () => {
    // using axios to access the backend
    return await axios.get(`/api/products/${id}`).then((res) => res.data);
  });

  useEffect(() => {
    if (data) {
      setValues(data);
    }
  }, [data]);

  async function register(values) {
    try {
      const response = await axios
        .put(`/api/products/${data._id}/update`, values)
        .then((res) => res.data);

      if (response) history.push("/scm");
    } catch (error) {
      setErrors(error.response.data);
    }
  }

  if (isLoading) return <div className="">Loading...</div>;

  if (error) return <div className="">Error Fetching data</div>;

  return (
    <div>
      <div className="dashboard-title">
        <h2> Toy Storey : Product Edit </h2>
      </div>
      <div className="dashboard-component">
        <div className="admin-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">ID:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="productId"
                  className="form-input"
                  value={values.description || ""}
                />
                {(errors.description || errors.message) && (
                  <pre>{errors.description || errors.message}</pre>
                )}
              </div>
              <div className="form-field">
                <label className="form-label">Name:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="productName"
                  className="form-input"
                  value={values.name || ""}
                />
                {(errors.name || errors.message) && (
                  <pre>{errors.name || errors.message}</pre>
                )}
              </div>
              <div className="form-field">
                <label className="form-label">Category:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="category"
                  className="form-input"
                  value={values.category || ""}
                />
                {(errors.category || errors.message) && (
                  <pre>{errors.category || errors.message}</pre>
                )}
              </div>
              <div className="form-field">
                <label className="form-label">Supplier:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="supplier"
                  className="form-input"
                  value={values.brand || ""}
                />
                {(errors.brand || errors.message) && (
                  <pre>{errors.brand || errors.message}</pre>
                )}
              </div>
              <div className="form-field">
                <label className="form-label">Price:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="price"
                  className="form-input"
                  value={values.price || ""}
                />
                {(errors.name || errors.message) && (
                  <pre>{errors.price || errors.message}</pre>
                )}
              </div>
              <div className="form-field">
                <label className="form-label">Quantity:</label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="countInStock"
                  className="form-input"
                  value={values.countInStock || ""}
                />
                {(errors.countInStock || errors.message) && (
                  <pre>{errors.countInStock || errors.message}</pre>
                )}
              </div>
              <div className="form-field">
                <button
                  disabled={isSubmitting}
                  className="primary updateBtn"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="footer">
          <h3>Supply Chain Management for Toy Storey Products.</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductEditForm;
