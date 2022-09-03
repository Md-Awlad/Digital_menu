import React from "react";
import banner from "../images/cover-photo.jpg";

const Banner = () => {
  return (
    <div>
      <img
        style={{
          width: "100%",
          height:"30vh",
          backgroundPosition: "center",
          objectFit: "cover",
          backgroundSize: "contain",
        }}
        src={banner}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
