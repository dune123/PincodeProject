import React,{useContext, useState} from 'react'
import { PostOfficeContext } from './context/postContext';
import { useNavigate } from 'react-router-dom';

const Pincode = () => {
  const [pincode,setPincode]=useState("");
  const[error,setError]=useState(null);
  const {postOffice,setPostOffice}=useContext(PostOfficeContext)
  const navigate=useNavigate()

     const searchPincode=async()=>{
       if(pincode.length!=6){
         setError("Enter a valid Pincode")
       }
       try {
         const response=await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
 
         const data=await response.json();

         setPostOffice(data);
         navigate("/postOffice",{state:{pincode}})
       } catch (error) {
         console.log(error);
       }
     }
   return (
     <div className='container'>
       <h1>Enter Pincode</h1>
       <input type='text' placeholder='Pincode' value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
       <button className='lookupButton' onClick={searchPincode}>Lookup</button>
       {error&&<p style={{color:"red"}}>{error}</p>}
     </div>
   )
}

export default Pincode