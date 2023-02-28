import { useState } from "react"
import {FaCartPlus} from "react-icons/fa"
import Button2 from "./Button2"
import axios from "axios";


const AddProduct = ({getTutorials}) => {
    const [button2, setButton2] = useState(true)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [amount,setAmount] =useState("")
    const [image, setImage] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newTask={name:name,price:price,amount:amount,image:image}
        addNewTask(newTask)
        setName("")
        setPrice("")
        setImage("")
        setAmount("")
        console.log(newTask)
    }

    const addNewTask=async(newTask)=>{
        const BASE_URL ="https://63f316fefe3b595e2eda3d73.mockapi.io/api/Checkout"
        
        
        try {
            await axios.post(BASE_URL,newTask)
        } catch (error) {
            console.log(error)
        }
        getTutorials()
    }

  return (
    <div >
        <div onClick={(e)=> setButton2(!button2)}>
            {button2 ? <Button2/> : null}
        </div>
        {button2 ? (
            <form onSubmit={handleSubmit} >
            <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label className="form-label">Product Price</label>
                <input type="number" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} id="exampleFormControlInput1" />
            </div>
            <div className="mb-3">
                <label className="form-label">Product Quantity</label>
                <input type="number" className="form-control" value={amount} onChange={(e)=>setAmount(e.target.value)} id="exampleFormControlInput1" />
            </div>
            <div>
                <label>Product Image</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                    </div>
                    <input type="text" className="form-control" value={image} onChange={(e)=>setImage(e.target.value)} id="basic-url" aria-describedby="basic-addon3"/>
                </div>
            </div>
            <div className="text-center">
                <button type="submit" className="btn btn-success "> <FaCartPlus size='22px' className="m-2"/> Add To Cart</button>
            </div>
        </form>
        ) : null}
        
    </div>
  )
}

export default AddProduct