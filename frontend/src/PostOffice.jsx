import React,{useContext, useRef, useState} from 'react'
import { PostOfficeContext } from './context/postContext';
import { useLocation } from 'react-router-dom';
import './PostOffice.css'

const PostOffice = () => {
    const location = useLocation();
  const { postOffice } = useContext(PostOfficeContext);
  const [totalBranches, setTotalBranches] = useState(postOffice[0]?.PostOffice || []);
  const inputRef = useRef(null);
  const { pincode } = location.state || {};

  const handleChange = () => {
    const query = inputRef.current.value.toLowerCase();
    const newBranches = postOffice[0]?.PostOffice.filter((item) =>
      item.Name.toLowerCase().includes(query)
    );
    setTotalBranches(newBranches || []);
  };

  
  return (
    <div className='fullContainer'>
        <p><span style={{fontWeight:"bold"}}>Pincode:</span> {pincode}</p>
        <p><span style={{fontWeight:"bold"}}>Message: {postOffice[0]?.Message}</span> {pincode.Message}</p>
        <input type="text" placeholder='Filter' onChange={handleChange} ref={inputRef}/>
        <div className='pinCodeContainer'>
        {totalBranches.length > 0 ? (
          totalBranches.map((item, index) => (
            <div className="eachPostOffice" key={index}>
              <p>
                Name: <span>{item.Name}</span>
              </p>
              <p>
                Branch Type: <span>{item.BranchType}</span>
              </p>
              <p>
                Delivery Status: <span>{item.DeliveryStatus}</span>
              </p>
              <p>
                District: <span>{item.District}</span>
              </p>
              <p>
                Division: <span>{item.Division}</span>
              </p>
            </div>
          ))
        ) : (
          <p style={{color:"red"}}>No branches found.</p>)
        }
        </div>
    </div>
  )
}

export default PostOffice