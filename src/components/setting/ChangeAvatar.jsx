import { CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { useFormik } from "formik";

const ChangeAvatar = () => {
  const [pic, setPic] = useState(null);
  const [picError, setPicError] = useState("Required");
  const [picLoading, setPicLoading] = useState(false);


  const formik = useFormik({});

  const avatar = async () => {
    const formData = new FormData();
    formData.append("profile-image", pic);
    setPicLoading(true);
    try {
      const { data } = await axios.post(
        "https://kzico.runflare.run/user/profile-image",
        formData,
        {
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("userToken")
            )}`,
          },
        }
      );
      setPicLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "dark",
      });
      setPicLoading(false);
    }
  };

  return (
    <div className="ChangeProfile">
      <div className="form">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-input">
            <TextField
              id="file"
              type="file"
              label="upload avatar"
              variant="standard"
              inputProps={{ accept: "image/*" }}
              accept="image/x-png,image/gif,image/jpeg"
              onChange={(e) => setPic(e.target.files[0])}
            />
            {pic == null && <span>{picError}</span>}
          </div>
          <div className="form-btn_submit">
            {picLoading ? (
              <CircularProgress color="secondary" />
            ) : (
              <button type="submit" onClick={avatar}>
                change avatar
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangeAvatar;
