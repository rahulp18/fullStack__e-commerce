import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useLocation} from 'react-router'
import {userRequest} from '../requestMethod'
import {Link} from 'react-router-dom'

const Success = () => {
  const location=useLocation();

  const data=location.state.stripeData;
const currentUser=useSelector((state)=>state.user.currentUser);
const [orderId,setOrderId]=useState(null);
  const cart=location.state.cart;


useEffect(()=>{
   const createOrder=async()=>{
     try {
       const res=await userRequest.post("/orders",{
         userId:currentUser._id,
         products:cart.products.map((item)=>({
           productId:item._id,
           quantity:item._quantity,
         })),
         amount:cart.total,
         address:data.bellings_details.address,
       });
       setOrderId(res.data_id);
     } catch (error) {
       console.log(error);
     }
   };
   data && createOrder();
},[cart,data,currentUser])


  return (
    <div
    style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {orderId
      ? `Order has been created successfully. Your order number is ${orderId}`
      : `Successfull. Your order is being prepared...`}
    <button style={{ padding: 10, marginTop: 20 }}><Link to='/'>Go to Homepage</Link></button>
  </div>
  )
}

export default Success