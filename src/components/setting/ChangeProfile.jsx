import {
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { putChangeProfile } from "../../redux/action";

const ChangeProfile = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.changeProfile);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      city: "",
    },
    onSubmit: async (values) => {
      dispatch(putChangeProfile(values));
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required("Required")
        .matches(
          /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
          "Please enter valid first name"
        )
        .min(3, "The first name is short")
        .max(20, "The first name is long"),
      lastName: Yup.string()
        .required("Required")
        .matches(
          /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
          "Please enter valid last name"
        )
        .min(3, "The last name is short")
        .max(20, "The last name is long"),
      age: Yup.string()
        .required("Required")
        .matches(/^[1-9]?[0-9]{1}$|^100$/, "The entered age is not correct"),
      gender: Yup.string().required("Required"),
      city: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/, "Please enter valid city")
        .min(2, "The city is short")
        .max(20, "The city is long"),
    }),
  });
  return (
    <div className="ChangeProfile">
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-input">
            <TextField
              id="firstName"
              type="text"
              label="First Name"
              variant="standard"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.firstName && <span>{formik.errors.firstName}</span>}
          </div>
          <div className="form-input">
            <TextField
              id="lastName"
              type="text"
              label="Last Name"
              variant="standard"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && <span>{formik.errors.lastName}</span>}
          </div>
          <div className="form-input">
            <TextField
              id="age"
              type="text"
              label="Age"
              variant="standard"
              {...formik.getFieldProps("age")}
            />
            {formik.touched.age && <span>{formik.errors.age}</span>}
          </div>
          <div className="form-input">
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              label="gender"
              {...formik.getFieldProps("gender")}
            >
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
            </Select>
            {formik.touched.gender && <span>{formik.errors.gender}</span>}
          </div>
          <div className="form-input">
            <TextField
              id="city"
              type="text"
              label="City"
              variant="standard"
              {...formik.getFieldProps("city")}
            />
            {formik.touched.city && <span>{formik.errors.city}</span>}
          </div>
          <div className="form-btn_submit">
            {loading ? (
              <CircularProgress color="secondary" />
            ) : (
              <button type="submit">change profile</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeProfile;
