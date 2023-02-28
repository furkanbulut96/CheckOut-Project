import { useState } from "react";
import axios from "axios";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import CardTotal from "../CardTotal";

const ProductCard = ({ item, getTutorials }) => {
  const { id, name, image, price, dampingRate, amount } = item;
  console.log(name);

  // const [count, setCount] = useState(amount);

  const BASE_URL = "https://63f316fefe3b595e2eda3d73.mockapi.io/api/Checkout";

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const putTask = async (op) => {
    let upData = {};
    try {
      if (op == "+") {
        upData = { ...item, amount: +amount + 1 };
      } else {
        upData = { ...item, amount: +amount - 1 };
      }

      await axios.put(`${BASE_URL}/${id}`, upData);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <div className="container d-flex w-50 border mt-3 shadow">
      <div className="img m-3 w-50 text-center ">
        <img src={image} alt="" style={{ width: "90%" }} />
      </div>
      <div className="w-50">
        <div>
          <h5 className="mt-2">{name}</h5>
          <p>
            <span className="text-warning fs-3">
              ${(price * dampingRate).toFixed(2)}
            </span>

            <span className="text-decoration-line-through fs-5">{price}</span>
          </p>
        </div>

        <div className="button border p-2 d-flex justify-content-center w-100">
          <button
            className="m-2"
            onClick={() => {
              putTask("+");
            }}
          >
            <AiOutlinePlus />
          </button>
          <span className="m-2">{amount}</span>
          <button
            className="m-2"
            onClick={() => (amount > 1 ? putTask("-") : deleteTask(id))}
          >
            <AiOutlineMinus />
          </button>
        </div>
        <div className="remove mt-4">
          <button
            onClick={() => deleteTask(id)}
            type="button"
            className="btn btn-danger w-100"
          >
            <AiFillDelete />
            Remove
          </button>
        </div>
        <div className="productTotal">
          <p>
            Product Total:$
            <span>{(amount * price * dampingRate).toFixed(2)}</span>
          </p>
        </div>
      </div>
     {/* <CardTotal item={item}/> */}
    </div>
  );
};

export default ProductCard;
