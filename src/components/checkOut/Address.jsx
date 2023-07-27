import React from "react";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Address = ({ setAddress }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      city: "",
      address: "",
      postalCode: "",
      phoneNumber: "",
    },
    onSubmit: async (values) => {
      setAddress(values);
      navigate("/shopping-cart/order/check-out");
    },
    validationSchema: Yup.object().shape({
      city: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/, "Please enter valid city")
        .min(2, "The city is short")
        .max(20, "The city is long"),
      address: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/, "Please enter valid address")
        .min(10, "The address is short")
        .max(200, "The address is long"),
      postalCode: Yup.string()
        .required("Required")
        .matches(/^[0-9]{10}/, "Please enter valid postal code")
        .length(10, "Postal code must be 10 digits"),
      phoneNumber: Yup.string()
        .required("Required")
        .matches(
          /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
          "Phone number is not valid"
        ),
    }),
  });
  return (
    <section>
      <div className="ChangeProfile">
        <div className="form">
          <div className="form-title">
            <h2>Enter your address</h2>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-input">
              <TextField
                id="city"
                type="text"
                label="City"
                value={formik.values.city}
                variant="standard"
                {...formik.getFieldProps("city")}
              />
              {formik.touched.city && <span>{formik.errors.city}</span>}
            </div>
            <div className="form-input">
              <TextField
                id="address"
                type="text"
                label="Address"
                value={formik.values.address}
                variant="standard"
                {...formik.getFieldProps("address")}
              />
              {formik.touched.address && <span>{formik.errors.address}</span>}
            </div>
            <div className="form-input">
              <TextField
                id="postalCode"
                type="text"
                label="Postal Code"
                value={formik.values.postalCode}
                variant="standard"
                {...formik.getFieldProps("postalCode")}
              />
              {formik.touched.postalCode && (
                <span>{formik.errors.postalCode}</span>
              )}
            </div>
            <div className="form-input">
              <TextField
                id="phoneNumber"
                type="tel"
                label="Mobile"
                value={formik.values.phoneNumber}
                variant="standard"
                {...formik.getFieldProps("phoneNumber")}
              />
              {formik.touched.phoneNumber && (
                <span>{formik.errors.phoneNumber}</span>
              )}
            </div>
            <div className="form-btn_submit">
              <button type="submit">change profile</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Address;
