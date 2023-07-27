import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductSearch } from "../../redux/action";
import { CircularProgress, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Search = ({ search, setSearch }) => {
  const navigate = useNavigate();
  const [searchinput, setearchinput] = useState("");

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.search);

  const searchHandler = (e) => {
    setearchinput(e.target.value);
    if (setearchinput) {
      dispatch(getProductSearch());
    }
  };

  return (
    <>
      {search ? (
        <div className="search-det">
          <div className="close">
            <i
              className="fa-solid fa-xmark"
              onClick={() => setSearch(!search)}
              title="close"
            ></i>
          </div>
          <div className="search-box">
            <div className="search-input">
              <input
                type="search"
                title="search"
                placeholder="Search for something ..."
                onChange={(e) => searchHandler(e)}
              />
            </div>
            {loading && (
              <div className="loading-search">
                <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
                  <CircularProgress color="secondary" />
                </Stack>
              </div>
            )}
            <div className="search-res">
              {setearchinput.length
                ? data
                    .filter((item) =>
                      item.name.toLowerCase().includes(searchinput)
                    )
                    .map((item) => (
                      <div
                        className="searching"
                        onClick={() =>
                          navigate(`/product/${item._id.toString()}`)
                        }
                      >
                        <img src={item.image} alt="" />
                        <p>{item.name.substring(0, 14)}...</p>
                      </div>
                    ))
                : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Search;
