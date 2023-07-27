import React from "react";
import TextField from "@mui/material/TextField";

import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { postSignUp } from "../../redux/action";

const SignUp = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.Signup);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      conPass: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      dispatch(postSignUp(values));
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(2, "Too Short!")
        .max(20, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      conPass: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      phoneNumber: Yup.string()
      .required("Required")
      .matches(
        /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
        "Phone number is not valid"
      ),
    }),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-input">
          <TextField
            id="username"
            type="text"
            label="user name"
            variant="standard"
            {...formik.getFieldProps("username")}
          />
          {formik.touched.username && <span>{formik.errors.username}</span>}
        </div>
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
        <div className="form-input">
          <TextField
            id="conPass"
            type="password"
            label="confirm password"
            variant="standard"
            {...formik.getFieldProps("conPass")}
          />
          {formik.touched.conPass && <span>{formik.errors.conPass}</span>}
        </div>
        <div className="form-input">
          <TextField
            id="phoneNumber"
            type="text"
            label="mobile"
            variant="standard"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.touched.phoneNumber && (
            <span>{formik.errors.phoneNumber}</span>
          )}
        </div>
        <div className="form-btn_submit">
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <button type="submit">sign up</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
