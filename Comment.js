
import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import Axios  from 'axios';
import './Comment.css';

const Comment = () => {
   const [datalist, setDatalist] = useState([])
   const [confirm , setConfirm] = useState("");
   const [ticket , setTicket] = useState("");
   const [adddetails,setAdddetails] = useState("");
   const[ error , setError] = useState(false);
   const [topping, setTopping] = useState("No");

 const location = useLocation();
 console.log(location.state.flynumber);
  


   useEffect( ()=>{
  //    Axios.get("http://localhost:3001/read").then((response)=>{
      
  //      setDatalist(response.data)
  //  })
  setDatalist(location.state)
   },[])
  
   
  const navigate =useNavigate();
 
  const handleReviewClick=()=>{
    console.log(confirm + ticket)
    if (
      confirm.length === 0 ||
      ticket.length === 0 ||
     adddetails.length === 0 
      

    ) {
      setError(true);
    }
    else{
    Axios.post("http://localhost:3001/insert",{
      
      flynumber: location.state.flynumber,
          firstname: location.state.firstname,
          middlename: location.state.middlename,
          lastname: location.state.lastname,
          phonenumber: location.state.phonenumber,
          email: location.state.email,
          addressline1: location.state.addressline1,
          addressline2:location.state. addressline2,
          city:location.state. city,
          postal: location.state.postal,
          selected: location.state.selected,
          phonecountry: location.state.phonecountry,
          country: location.state.country,
          confirm:confirm,
      ticket:ticket,
      adddetails:adddetails,
      topping:topping
    }).then(response=>{
      console.log(response)
      // this.setState({ feedbackId: response.data.insertedId })
      navigate("/review",{state:{feedbackId:response.data.insertedId}});
    })
   
  }
  }

  const handleBackClick =() =>{
    navigate("/personalinformation")
  }




  return (
    <div>
    <div>
      <h1 className="h1comment">Leave Your Comment</h1>
      <p className="pcomment">Please provide as much detail as you can</p>
    </div>

    <div className="commentcontainer">
    <p className="paracomment">
      Inorder to assist you faster, please lookup your flight details by providing your Confirmation # and <br/>
       Ticket # . Your full name must watch your Ticket #. Don't have your Confirmation # or Ticket # ? <br/>
      Check the box below to continue with partial (or no) flight information.</p>
      <h6 className="allreq">All2 fields required unless noted.</h6>
      <label className="fullname">Full Name </label>
      <h5 className="dispname">{location.state.firstname}</h5>

      {/* {datalist.map( (val,key) =>{
          return(
             <p key={key}>
               <h5 className="dispname">{val.firstname}</h5>
               
              </p>
           )
      })} */}
       <input type="text" placeholder="Confirmation #" className="confirmlabel"
     
       onChange={(event)=>{setConfirm(event.target.value)}}
       />
         {error && confirm.length <= 0 ? (
                        <label style={{ color: "red"}}>
                          Please Enter Confirmation Number
                        </label>
                      ) : (
                        ""
                      )}
       
     <input type="text" placeholder="Ticket #" className="ticketlabel"
 
     onChange={(event)=>{setTicket(event.target.value)}}/>
       {error && ticket.length <= 0 ? (
                        <label style={{ color: "red"}}>
                          Please Enter Ticket Number
                        </label>
                      ) : (
                        ""
                      )}<br/>
     <input type="checkbox"  className="checkbox" />
       <label className="boxlabel"><b>I don't have my Confirmation # and/or Ticket #</b></label>

       <button className="flightdetails">Lookup Flight Details</button>

      </div>

      <div className="addcommentcontainer">
      <h6 className="allreq2">All fields required unless noted.</h6>
      <p className="secondpara">Please Provide additonal details below.(1500 Character limit)</p>
      <input className="feedbackinput"
      onChange={(event)=>{setAdddetails(event.target.value)}}/>
        {error && adddetails.length <= 0 ? (
                        <label style={{ color: "red"}}>
                          Please Provide additional details
                        </label>
                      ) : (
                        ""
                      )}
      
      <div className="attach">
      <p className="attachment">+ Add an attachment</p>
        <p className="attachfile">Maximum numbers of attachment: 5 items. Maximum file size:25MB. Accepted file types: JPG, JPEG, PNG, PDF, PPT, PPTX, CSV,
          DOCX, DOC ,XLSX, XLS 

        </p>
        </div>
        <p className="reply">Would you like a reply ?</p>






 <div className="form-check form-check-inline">
 

<input
 className="form-check-input1" 
        type="radio"
        name="topping"
        value="Yes"
        id="regular"
        checked={topping === "Yes"}
        onChange={(event)=>{setTopping(event.target.value)}}
      />
      <label  className="form-check-label1" htmlFor="regular">Yes</label>
      </div>
      <div className="form-check form-check-inline2">
      <input className="form-check-input2"
        type="radio"
        name="topping"
        value="No"
        id="medium"
        checked={topping === "No"}
        onChange={(event)=>{setTopping(event.target.value)}}
      />
       <label className="form-check-label2" htmlFor="regular">No</label>
      
      



</div>


        </div>
        
        <button className="ctrbutton" onClick={handleReviewClick}>Continue To Review</button>
        <button className="ctrbuttonback" onClick={handleBackClick}>Back</button>
     
    
    </div>
  )
}

export default Comment;



