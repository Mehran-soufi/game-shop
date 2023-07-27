import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ProductSkeleton = () => {
  const [width, setwidth] = useState(0);
  const widthDoc = document.documentElement.offsetWidth;

  useEffect(() => {
    if (widthDoc > 1024) {
      setwidth(0);
    } else if (widthDoc > 800) {
      setwidth(1);
    } else if (widthDoc > 450) {
      setwidth(2);
    } else if (widthDoc > 400) {
      setwidth(3);
    } else if (widthDoc > 330) {
      setwidth(4);
    }
    else{
        setwidth(5)
    }
  }, []);

  return (
    <section className="pr-skaleton">
      {width === 0 ? (
        <>
          {/* First row */}
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="rectangular" width={300} height={40} />
            <Skeleton variant="rectangular" width={300} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="rectangular" width={300} height={40} />
            <Skeleton variant="rectangular" width={300} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="rectangular" width={300} height={40} />
            <Skeleton variant="rectangular" width={300} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="rectangular" width={300} height={40} />
            <Skeleton variant="rectangular" width={300} height={30} />
          </Stack>

          {/* Second row */}
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="rectangular" width={300} height={40} />
            <Skeleton variant="rectangular" width={300} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="rectangular" width={300} height={40} />
            <Skeleton variant="rectangular" width={300} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="rectangular" width={300} height={40} />
            <Skeleton variant="rectangular" width={300} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300} />
            <Skeleton variant="rectangular" width={300} height={40} />
            <Skeleton variant="rectangular" width={300} height={30} />
          </Stack>
        </>
      ) : width === 1 ? (
        <>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={40} />
            <Skeleton variant="rectangular" width={250} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={40} />
            <Skeleton variant="rectangular" width={250} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={40} />
            <Skeleton variant="rectangular" width={250} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={40} />
            <Skeleton variant="rectangular" width={250} height={30} />
          </Stack>

          {/* Second row */}
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={40} />
            <Skeleton variant="rectangular" width={250} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={250} height={250} />
            <Skeleton variant="rectangular" width={250} height={40} />
            <Skeleton variant="rectangular" width={250} height={30} />
          </Stack>
        </>
      ) : width === 2 ? (
        <>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={280} height={280} />
            <Skeleton variant="rectangular" width={280} height={40} />
            <Skeleton variant="rectangular" width={280} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={280} height={280} />
            <Skeleton variant="rectangular" width={280} height={40} />
            <Skeleton variant="rectangular" width={280} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={280} height={280} />
            <Skeleton variant="rectangular" width={280} height={40} />
            <Skeleton variant="rectangular" width={280} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={280} height={280} />
            <Skeleton variant="rectangular" width={280} height={40} />
            <Skeleton variant="rectangular" width={280} height={30} />
          </Stack>

          {/* Second row */}
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={280} height={280} />
            <Skeleton variant="rectangular" width={280} height={40} />
            <Skeleton variant="rectangular" width={280} height={30} />
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={280} height={280} />
            <Skeleton variant="rectangular" width={280} height={40} />
            <Skeleton variant="rectangular" width={280} height={30} />
          </Stack>
        </>
      ) : width === 3 ?(
          <>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={130} height={120} />
              <div className="skaleton-res">
              <Skeleton variant="rectangular" width={190} height={45} />
              <Skeleton variant="rectangular" width={190} height={45} />
              </div>
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={130} height={120} />
              <div className="skaleton-res">
              <Skeleton variant="rectangular" width={190} height={45} />
              <Skeleton variant="rectangular" width={190} height={45} />
              </div>
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={130} height={120} />
              <div className="skaleton-res">
              <Skeleton variant="rectangular" width={190} height={45} />
              <Skeleton variant="rectangular" width={190} height={45} />
              </div>
            </Stack>
            <Stack spacing={1}>
              <Skeleton variant="rectangular" width={130} height={120} />
              <div className="skaleton-res">
              <Skeleton variant="rectangular" width={190} height={45} />
              <Skeleton variant="rectangular" width={190} height={45} />
              </div>
            </Stack>
          </>
        ) : width === 4 ? (
            <>
            <Stack spacing={1}>
            <Skeleton variant="rectangular" width={110} height={100} />
            <div className="skaleton-res">
            <Skeleton variant="rectangular" width={160} height={35} />
            <Skeleton variant="rectangular" width={160} height={35} />
            </div>
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={110} height={100} />
            <div className="skaleton-res">
            <Skeleton variant="rectangular" width={160} height={35} />
            <Skeleton variant="rectangular" width={160} height={35} />
            </div>
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={110} height={100} />
            <div className="skaleton-res">
            <Skeleton variant="rectangular" width={160} height={35} />
            <Skeleton variant="rectangular" width={160} height={35} />
            </div>
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={110} height={100} />
            <div className="skaleton-res">
            <Skeleton variant="rectangular" width={160} height={35} />
            <Skeleton variant="rectangular" width={160} height={35} />
            </div>
          </Stack>
            </>
        ) : (
            <>
            <Stack spacing={1}>
            <Skeleton variant="rectangular" width={100} height={80} />
            <div className="skaleton-res">
            <Skeleton variant="rectangular" width={140} height={23} />
            <Skeleton variant="rectangular" width={140} height={23} />
            </div>
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={100} height={80} />
            <div className="skaleton-res">
            <Skeleton variant="rectangular" width={140} height={23} />
            <Skeleton variant="rectangular" width={140} height={23} />
            </div>
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={100} height={80} />
            <div className="skaleton-res">
            <Skeleton variant="rectangular" width={140} height={23} />
            <Skeleton variant="rectangular" width={140} height={23} />
            </div>
          </Stack>
          <Stack spacing={1}>
            <Skeleton variant="rectangular" width={100} height={80} />
            <div className="skaleton-res">
            <Skeleton variant="rectangular" width={140} height={23} />
            <Skeleton variant="rectangular" width={140} height={23} />
            </div>
          </Stack>
            </>
        )
        
      }
    </section>
  );
};

export default ProductSkeleton;
