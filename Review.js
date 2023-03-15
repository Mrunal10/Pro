import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import Axios from 'axios';
import './Review.css';
const Review = () => {
   const navigate=useNavigate()
   const location = useLocation();
   const [datalist ,setDatalist]= useState([])
   const current = new Date();
   const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

   useEffect(() => {
    fetchFeedback();
  })
 
  const fetchFeedback=async()=>{
    const response=await Axios.get('http://localhost:3001/read', {
      params: {feedbackId: location.state.feedbackId }});
      setDatalist([response.data]);
  }

  const handlereviewclick=()=>{
    navigate("/confirmation");
  }

  const editPersonalInfo = async() =>{
    await Axios.delete('http://localhost:3001/delete', {
      params: {feedbackId: location.state.feedbackId }});
    navigate("/personalinformation", {state:{data: datalist}});
  } 

  
  const editCommonDetails = async() =>{
    await Axios.delete('http://localhost:3001/delete', {
      params: {feedbackId: location.state.feedbackId }});
    navigate("/comment", {state:{data: datalist}});
  } 

  return (
    <div>
      <h1 className="reviewtitle">Review Your Information </h1>
      <p className="reviewpara">Please confirm that below information is correct</p>
      <div className="reviewcontainer1">
            <h4 className="reviewexp">Your Experience</h4>
            <p className="reviewfeed">What is your feedback about?</p>
            <p className="reviewcomplaint">Given a Compliment <br/> - Airport Experience</p>
           
      </div>
      <div className="reviewcontainer2">
        <h4 className="reviewperson">Personal Information</h4>
        <button className="revieweditpersonal" onClick={editPersonalInfo}>Edit</button>
        <div>
         {datalist.map( (val,key)=>{
           return(
             <>
            <div className="reviewname" key={key}>
              <h6 className="reviewname">{val.firstname}</h6>
            
              </div>
               
               </>
          )
                  
         })}
         </div>
         <p className="reviewcontact">Contact Information</p>
         {datalist.map( (val,key)=>{
           return(
             <>
            <div key={key}>
              <h6 className="reviewfetchcontact">{val.phonenumber}</h6>
              <h6 className="reviewfetchemail">{val.email}</h6>
            
              </div>
               
               </>
          )
                  
         })}
         <p className="reviewaddress">Address</p>
         {datalist.map( (val,key)=>{
           return(
             <>
            <div key={key}>
              <h6 className="reviewaddressline">{val.addressline1}</h6>
              <h6 className="reviewfetchcaddress">{val.addressline2}</h6>
            
              </div>
               
               </>
          )
                  
         })}
             <p className="reviewairprogram">AirLine Program</p>
             <h6 className="reviewairlines">"Delta Air lines / Skylines"</h6>
      </div>
      <div className="reviewcontainer3">
      
      <h4 className="reviewexp">Comment Details</h4>
      <button className="revieweditcomment" onClick={editCommonDetails}>Edit</button>
      
      <p className="reviewflight">Flight Information</p>
      <p className="reviewdate">{date}</p>

      <p className="reviewconfirmnumber">Flight Number </p>
        {datalist.map ( (val,key) =>{
          return(
            <div key={key}>
              <h6 className="reviewfetchconfirm">{val.confirmationnumber}</h6>
              </div>
          )
        })}
        
        <p className="reviewticketnumber">Ticket Number </p>
        {datalist.map ( (val,key) =>{
          return(
            <div key={key}>
              <h6 className="reviewfetchticket">{val.ticket}</h6>
              </div>
          )
        })}
         <p className="reviewreply">Would You like a Reply </p>
        {datalist.map ( (val,key) =>{
          return(
            <div key={key}>
              <h6 className="reviewfetchreply">{val.topping}</h6>
              </div>
          )
        })}

            <p className="reviewcomment">Comment </p>
        {datalist.map ( (val,key) =>{
          return(
            <div key={key}>
              <h6 className="reviewfetchcomment">{val.adddetails}</h6>
              </div>
          )
        })}


         <p className="reviewattachments">Attachments</p>
         <h6 className="revattachments">None</h6>









      </div>
      <button className="reviewfinal" onClick={handlereviewclick}> Confirm </button>
    </div>
  )
}

export default Review

