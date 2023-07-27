import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile, postSignIn } from "../../redux/action";
import { toast } from "react-toastify";
import { Skeleton } from "@mui/material";

const HeaderProfile = ({ auth, setAuth }) => {
  const [profile, setProfile] = useState(false);

  const [imageWidth, setImageWidth] = useState(0);
  const [texteWidth, setTextWidth] = useState(0);

  const widthDoc = document.documentElement.offsetWidth;

  useEffect(() => {
    // img res
    if (widthDoc > 1030) {
      setImageWidth(0);
    } else if (widthDoc > 770) {
      setImageWidth(1);
    } else if (widthDoc > 430) {
      setImageWidth(2);
    } else {
      setImageWidth(3);
    }

    // text res
    if (widthDoc > 800) {
      setTextWidth(0);
    } 
    else if (widthDoc > 430) {
      setTextWidth(1);
    } else if (widthDoc > 370) {
      setTextWidth(2);
    } else {
      setTextWidth(3);
    }
  }, []);

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.Profile);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("userToken");
    navigate("/");
    setAuth(!auth);
    toast.error("You are logged out of your account", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div>
      <div className="profile">
        {!data[0]?.user.image && !data[0]?.user.username ? (
          <div className="skeleton-profile">
            {imageWidth == 0 ? (
              <Skeleton variant="circular" width={45} height={45} />
            ) : imageWidth == 1 ? (
              <Skeleton variant="circular" width={40} height={40} />
            ) : imageWidth == 2 ? (
              <Skeleton variant="circular" width={35} height={35} />
            ) : imageWidth == 3 ? (
              <Skeleton variant="circular" width={30} height={30} />
            ) : null}
              {
                texteWidth == 0 ?   <Skeleton variant="rectangular" width={100} height={25} ml={2} />:
                texteWidth == 1 ?   <Skeleton variant="rectangular" width={95} height={22} ml={2} /> :
                texteWidth == 2 ?   <Skeleton variant="rectangular" width={90} height={20} ml={2} /> :
                texteWidth == 3 ?   <Skeleton variant="rectangular" width={70} height={18} ml={2} /> :
                null
              }
          
          </div>
        ) : (
          <>
            <div className="img-profile">
              <img
                src={data[0]?.user.image}
                alt={data[0]?.user.username}
                onClick={() => setProfile(!profile)}
              />
            </div>
            <div className="name-profile" onClick={() => setProfile(!profile)}>
              <span>{data[0]?.user.username}</span>
              {!profile ? (
                <i className="fa-solid fa-caret-down"></i>
              ) : (
                <i className="fa-solid fa-caret-up"></i>
              )}
            </div>
          </>
        )}

        {profile ? (
          <div className="profile-items">
            <div className="profile-item_link">
              <div className="pr-item">
                <p onClick={() => navigate("/profile")}>profile</p>
              </div>
              <div className="pr-item">
                <p  onClick={() => navigate("/orders")}>orders</p>
              </div>
              <div className="pr-item">
                <p  onClick={() => navigate("/setting/change-profile")}>setting</p>
              </div>
              <div className="pr-item">
                <p onClick={logOut}>log out</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default HeaderProfile;
