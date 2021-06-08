import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useQuery } from "react-query";

import useForm from "../components/hooks/useForm";

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
        <h2>Product Edit Page</h2>
      </div>

      <div className="dashboard-component">
        <div className="admin-form">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-field">
                <label className="form-label">Name:</label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  className="form-input"
                  value={values.name || ""}
                />
                {(errors.name || errors.message) && (
                  <pre>{errors.name || errors.message}</pre>
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
                  type="text"
                  name="quantity"
                  className="form-input"
                  value={values.quantity || ""}
                />
                {(errors.quantity || errors.message) && (
                  <pre>{errors.quantity || errors.message}</pre>
                )}
              </div>
              <div className="form-field">
              <button
                disabled={isSubmitting}
                className="primary createBtn"
                type="submit"
              >
                Update
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEditForm;
