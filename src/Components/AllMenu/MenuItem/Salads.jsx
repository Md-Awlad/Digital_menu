import {
  FormControl,
  FormControlLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import { useState } from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useStateContext } from "../../../Contexts/ContextProvider";
import ItemDetails from "../../Modal/ItemDetails";

const Salad = () => {
  const { setCart, cart, products, setProducts } = useStateContext();
  const [openModal, setOpenModal] = useState(false);
  const [size, setSize] = useState(600);

  const handleModalOpen = (e) => {
    setOpenModal(true);
  };
  const handleModalClose = (e) => {
    setOpenModal(false);
  };

  const handleChange = (checkbox) => {
    if (checkbox === 0) {
      if (checkbox === 0) {
        setSize(600);
      }
    }
    if (checkbox === 1) {
      if (checkbox === 1) {
        setSize(700);
      }
    }
    if (checkbox === 2) {
      if (checkbox === 2) {
        setSize(800);
      }
    }
  };

  const handleAddToCart = (item) => {
    if (size === 600) {
      item["size"] = "6''";
      item["price"] = size;
      setCart([...cart, { ...item }]);
    } else if (size === 700) {
      item["size"] = "7''";

      item["price"] = size;
      setCart([...cart, { ...item }]);
    } else if (size === 800) {
      item["size"] = "9''";

      item["price"] = size;
      setCart([...cart, { ...item }]);
    } else {
      setCart([...cart, { ...size }]);
    }

    if (cart.find((i) => i.id === item.id && i.size === item.size)) {
      setCart(
        cart.map((e) => {
          if (e.id === item.id) {
            return { ...e, count: e.count };
          } else {
            return e;
          }
        })
      );
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  };
  console.log(cart);

  useEffect(() => {
    fetch("items.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Modal open={openModal} onClose={handleModalClose}>
        <ItemDetails handleModalClose={handleModalClose} />
      </Modal>
      <div className="h-[101vh] overflow-y-scroll">
        {products?.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                width: "100%",
              },
            }}
          >
            <Paper
              sx={{
                marginX: 1,
                marginY: 2,
                padding: 3,
                boxShadow: "0px 0px 5px 0px rgb(0 0 0 / 20%)",
              }}
            >
              <div className="flex md:justify-between md:gap-0 gap-3 md:items-center cursor-pointer">
                <div className="flex md:gap-8 md:flex-nowrap flex-wrap">
                  <img onClick={handleModalOpen} src={item.image} alt="" />
                  <div className="md:space-y-5">
                    <div onClick={handleModalOpen}>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                    <div className="flex md:gap-5 gap-1 md:flex-nowrap flex-wrap items-center">
                      <h3 className="text-md font-semibold">
                        {item.pizzaPrice}
                      </h3>
                      <label className="text-md font-semibold" htmlFor="">
                        Pizza Size:
                      </label>
                      <FormControl>
                        <RadioGroup
                          row
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            control={
                              <Radio
                                style={{
                                  color: "#FFC446",
                                }}
                              />
                            }
                            label="6''"
                            name="size"
                            value={0}
                            onChange={() => handleChange(0)}
                            defaultChecked
                          />
                          <FormControlLabel
                            control={
                              <Radio
                                style={{
                                  color: "#FFC446",
                                }}
                              />
                            }
                            label="7''"
                            name="size"
                            value={1}
                            onChange={() => handleChange(1)}
                          />
                          <FormControlLabel
                            control={
                              <Radio
                                style={{
                                  color: "#FFC446",
                                }}
                              />
                            }
                            label="9''"
                            name="size"
                            value={2}
                            onChange={() => handleChange(2)}
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                </div>
                {/* --icon-- */}
                <MdOutlineAddShoppingCart
                  onClick={() => handleAddToCart(item)}
                  className="inline md:w-10 md:h-10 w-28 h-10 p-1 rounded-md text-gray-600 border-2 border-gray-300 cursor-pointer"
                />
              </div>
            </Paper>
          </Box>
        ))}
      </div>
    </>
  );
};

export default Salad;
