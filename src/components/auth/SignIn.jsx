import React from "react";
import TextField from "@mui/material/TextField";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { postSignIn } from "../../redux/action";
import { CircularProgress } from "@mui/material";

const SignIn = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.Signin);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(postSignIn(values));
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password must have at least 8 characters.")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "password must contain at least one uppercase letter, one lowercase letter and one special character"
        ),
    }),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-input">
          <TextField
            id="email"
            type="email"
            label="email"
            variant="standard"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && <span>{formik.errors.email}</span>}
        </div>
        <div className="form-input">
          <TextField
            id="password"
            type="password"
            label="password"
            variant="standard"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && <span>{formik.errors.password}</span>}
        </div>
        <div className="form-btn_submit">
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <button type="submit">sign in</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
