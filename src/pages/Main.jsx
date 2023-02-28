import Button from "../components/Button";
import AddProduct from "../components/AddProduct";
import CardTotal from "../components/CardTotal";
import ProductCard from "../components/ProductCard/ProductCard";
import { useState,useEffect } from "react";
import axios from "axios";

const Main = () => {
    const [button, setButton] = useState(false)
    const [tutorials, setTutorials] = useState([])
    const BASE_URL ="https://63f316fefe3b595e2eda3d73.mockapi.io/api/Checkout"

    const getTutorials = async () => {
      try {
        const { data } = await axios(BASE_URL)
        setTutorials(data)
       console.log(data);
      } catch (error) {
        console.log(error)
      }
    }
    console.log(tutorials)


    useEffect(() => {
      getTutorials()
    }, [])

    return (
        <div className="container-fluid ">
        <span onClick={(e)=>setButton(!button)}>
          {button ? null : <Button/>}
        </span>
        <div className="d-flex justify-content-center ">
          {
            button ? (<AddProduct className="w-50 m-3" getTutorials={getTutorials} />) : null
          }
          <div className="w-50 m-3">
            <div>
                {tutorials.map((item)=>{
                  return (<ProductCard key={item.id} item = {item} getTutorials={getTutorials}  />)
                })}
            </div>
            <CardTotal tutorials={tutorials}  />
          </div>
        </div>
      </div>
    )
  }
  export default Main