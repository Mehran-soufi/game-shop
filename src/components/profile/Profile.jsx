import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../redux/action";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import errorimg from "../../assest/error/error.png";


const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data,error } = useSelector((state) => state.Profile);

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
    } else if (widthDoc > 350) {
      setImageWidth(3);
    } else {
      setImageWidth(4);
    }

    // text res
    if (widthDoc > 430) {
      setTextWidth(0);
    } else if (widthDoc > 370) {
      setTextWidth(1);
    } else {
      setTextWidth(2);
    }
  }, []);

  useEffect(() => {
    if(localStorage.getItem("userToken")){
      dispatch(getProfile());
    }

  }, []);

  return (
    <>
    {
      error ? (
        <div className="loading-home">
          <img src={errorimg} />
          <h2>Unfortunately, a problem has occurred</h2>
        </div>
      ) :(
        <section>
      <div className="user-profile">
        <div className="user-profile_det">
          <div className="user-image-profile">
            {data[0]?.user?.image ? (
              <div className="user-image-profile-item">
                <img src={data[0]?.user?.image} alt={data[0]?.user?.email} />
              </div>
            ) : imageWidth == 0 ? (
              <Skeleton variant="circular" width={230} height={230} />
            ) : imageWidth == 1 ? (
              <Skeleton variant="circular" width={200} height={200} />
            ) : imageWidth == 2 ? (
              <Skeleton variant="circular" width={180} height={180} />
            ) : imageWidth == 3 ? (
              <Skeleton variant="circular" width={150} height={150} />
            ) : imageWidth == 4 ? (
              <Skeleton variant="circular" width={120} height={120} />
            ) : null}
          </div>

          <div className="user-details-profile">
            <div className="user-details-items">
              <table>
                <tbody>
                  <tr>
                    <td>Email:</td>
                    <td>
                      {data[0]?.user?.email ? (
                        data[0]?.user?.email
                      ) : texteWidth == 0 ? (
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={35}
                        />
                      ) : texteWidth == 1 ? (
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={30}
                        />
                      ) : texteWidth == 2 ? (
                        <Skeleton
                          variant="rectangular"
                          width={20}
                          height={20}
                        />
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td>User Name:</td>
                    <td>
                      {data[0]?.user?.username ? (
                        data[0]?.user?.username
                      ) : texteWidth == 0 ? (
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={35}
                        />
                      ) : texteWidth == 1 ? (
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={30}
                        />
                      ) : texteWidth == 2 ? (
                        <Skeleton
                          variant="rectangular"
                          width={20}
                          height={20}
                        />
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td>Mobile:</td>
                    <td>
                      {data[0]?.user?.mobile ? (
                        data[0]?.user?.mobile
                      ) : texteWidth == 0 ? (
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={35}
                        />
                      ) : texteWidth == 1 ? (
                        <Skeleton
                          variant="rectangular"
                          width={"100%"}
                          height={30}
                        />
                      ) : texteWidth == 2 ? (
                        <Skeleton
                          variant="rectangular"
                          width={20}
                          height={20}
                        />
                      ) : null}
                    </td>
                  </tr>
                  <tr>
                    <td>First Name:</td>
                    <td>
                      {data[0]?.user?.firstname
                        ? data[0]?.user?.firstname
                        : "Not yet entered"}
                    </td>
                  </tr>
                  <tr>
                    <td>Last Name:</td>
                    <td>
                      {data[0]?.user?.lastname
                        ? data[0]?.user?.lastname
                        : "Not yet entered"}
                    </td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>
                      {data[0]?.user?.gender
                        ? data[0]?.user?.gender
                        : "Not yet entered"}
                    </td>
                  </tr>
                  <tr>
                    <td>Age:</td>
                    <td>
                      {data[0]?.user?.age
                        ? data[0]?.user?.age
                        : "Not yet entered"}
                    </td>
                  </tr>
                  <tr>
                    <td>City:</td>
                    <td>
                      {data[0]?.user?.city
                        ? data[0]?.user?.city
                        : "Not yet entered"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="user-btn-profile">
            <button onClick={() => navigate("/setting/change-profile")}>
              edit profile
            </button>
          </div>
        </div>
      </div>
    </section>
      )
    }
    </>
  );
};

export default Profile;
