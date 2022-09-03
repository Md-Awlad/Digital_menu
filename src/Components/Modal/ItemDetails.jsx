import { Box, Rating, Typography } from "@mui/material";
import React from "react";
import { MdClose } from "react-icons/md";
import pizzaImg from "../../images/pizza2.png";
import starImg from "../../images/Star 6.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  border: "2px solid #fff",
  borderRadius: "5px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 2,
};

const ItemDetails = ({ handleModalClose }) => {
  return (
    <Box sx={{ ...style }}>
      {/* <ImCross
        onClick={handleModalClose}
        className="inline w-6 h-6 p-1 text-red-600 rounded-md absolute right-2 top-2 cursor-pointer"
      /> */}
      <MdClose
        onClick={handleModalClose}
        className="absolute right-2 top-2 cursor-pointer text-red-600 text-lg border border-gray-700 rounded-full"
      />
      <div className="space-y-20">
        {/* --title-- */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold capitalize">
            chicken chilzza pizza
          </h2>
          {/* --rating-- */}
          <div>
            <Typography
              sx={{ fontSize: 12, fontWeight: "bold" }}
              component="legend"
            >
              Review 3.5
            </Typography>
            <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {/* --leftImg-- */}
          <div className="col-span-4 bg-[#FFC446] rounded-tl-3xl rounded-br-3xl relative">
            <div className="w-full text-center relative">
              <img className="m-auto w-32 h-32 mt-32" src={starImg} alt="" />
              <div className="absolute top-7 left-[5.6rem] space-y-1 font-bold">
                <h2 className="text-2xl">Price</h2>
                <p className="text-sm">500/700/800</p>
              </div>
            </div>
            <div className="absolute -right-20 -top-20">
              <img className="w-60 h-60 object-cover" src={pizzaImg} alt="" />
            </div>
          </div>
          {/* --rightSize-- */}
          <div className="col-span-1 mt-40">
            <div className="flex flex-wrap gap-2">
              <h2 className="text-xs font-bold">Pizza Size:</h2>
              <button className="border border-[#FFC446] rounded-lg px-5 font-bold text-sm hover:bg-[#FFC446]">
                6''
              </button>
              <button className="border border-[#FFC446] rounded-lg px-5 font-bold text-sm hover:bg-[#FFC446]">
                7''
              </button>
              <button className="border border-[#FFC446] rounded-lg px-5 font-bold text-sm hover:bg-[#FFC446]">
                9''
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* --desc-- */}
      <div className="mt-3">
        <h2 className="text-xl font-semibold">Details</h2>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
          fugiat tempore sequi provident blanditiis. Cum voluptates magni modi
          et quaerat.
        </p>
      </div>
    </Box>
  );
};

export default ItemDetails;
/*
<div className="absolute -right-16 -top-20">
            <img className="w-48 h-48 object-fit" src={pizzaImg} alt="" />
          </div>
*/
