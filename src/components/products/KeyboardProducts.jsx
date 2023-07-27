import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/action";

import loadingimg from "../../assest/loading/loading.gif";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import ProductSkeleton from "./ProductSkeleton";
import { useNavigate } from "react-router-dom";
const KeyboardProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const [value, setValue] = useState("Proposed");
  const [width, setwidth] = useState(true);

  useEffect(() => {
    dispatch(getProducts());

    window.scrollTo({ top: 0 });

    if (document.documentElement.offsetWidth > 500) {
      setwidth(true);
    } else {
      setwidth(false);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      {loading ? (
        <div className="loading-home">
          <img src={loadingimg} />
          <h2>loading...</h2>
        </div>
      ) : (
        <section>
          <div className="products">
            <div className="product-filter">
              {width ? (
                <Tabs
                  value={value}
                  onChange={handleChange}
                  textColor="secondary"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example"
                >
                  <Tab value="most rating" label="most rating" />
                  <Tab value="lowest rating" label="lowest rating" />
                  <Tab value="Proposed" label="Proposed" />
                  <Tab value="most price" label="most price" />
                  <Tab value="lowest price" label="lowest price" />
                </Tabs>
              ) : (
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="filter"
                    onChange={handleChange2}
                  >
                    <MenuItem value="Proposed">Proposed</MenuItem>
                    <MenuItem value="most rating">most rating</MenuItem>
                    <MenuItem value="lowest rating">lowest rating</MenuItem>
                    <MenuItem value="most price">most price</MenuItem>
                    <MenuItem value="lowest price">lowest price</MenuItem>
                  </Select>
                </FormControl>
              )}
            </div>
            <div className="products-lists">
              <div className="products-list">
                {loading || error ? (
                  <ProductSkeleton />
                ) : (
                  <>
                    {data
                      .sort((x, y) => {
                        switch (value) {
                          case "Proposed":
                            return y.numReviews - x.numReviews;
                          case "most rating":
                            return y.rating - x.rating;
                          case "lowest rating":
                            return x.rating - y.rating;
                          case "most price":
                            return y.price - x.price;
                          case "lowest price":
                            return x.price - y.price;
                          default:
                            break;
                        }
                      })
                      .filter((item) => item.category === "Keyboard")
                      .map((item) => (
                        <div
                          className="pr-item"
                          key={item._id}
                          onClick={() =>
                            navigate(`/product/${item._id.toString()}`)
                          }
                        >
                          <div className="pr-item_img">
                            <img src={item.image} alt={item.name} />
                            {item.countInStock === 0 ? (
                              <span>Finished</span>
                            ) : null}
                          </div>
                          <div className="pr-item_detail">
                            <div className="pr-det_name">
                              <h2>{item.name.substring(0, 20)}...</h2>
                            </div>
                            <div className="pr-det_detail">
                              <p>{item.price} $</p>
                              <p>
                                <i className="fa-solid fa-star"></i>
                                <span>({item.rating})</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default KeyboardProducts;
