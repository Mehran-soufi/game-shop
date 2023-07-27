import {
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { putChangePassword } from "../../redux/action";

const ChangePssword = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.changePassword);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      conPassword: "",
    },
    onSubmit: (values) => {
      dispatch(putChangePassword(values));
    },
    validationSchema: Yup.object().shape({
      oldPassword: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      newPassword: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      conPassword: Yup.string().oneOf(
        [Yup.ref("newPassword"), null],
        "Passwords must match"
      ),
    }),
  });
  return (
    <div className="ChangeProfile">
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-input">
            <TextField
              id="oldPassword"
              type="password"
              label="Old Password"
              variant="standard"
              {...formik.getFieldProps("oldPassword")}
            />
            {formik.touched.oldPassword && (
              <span>{formik.errors.oldPassword}</span>
            )}
          </div>
          <div className="form-input">
            <TextField
              id="newPassword"
              type="password"
              label="New Password"
              variant="standard"
              {...formik.getFieldProps("newPassword")}
            />
            {formik.touched.newPassword && (
              <span>{formik.errors.newPassword}</span>
            )}
          </div>
          <div className="form-input">
            <TextField
              id="conPassword"
              type="password"
              label="Confirm Password"
              variant="standard"
              {...formik.getFieldProps("conPassword")}
            />
            {formik.touched.conPassword && (
              <span>{formik.errors.conPassword}</span>
            )}
          </div>
          <div className="form-btn_submit">
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              <button type="submit">change password</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePssword;
