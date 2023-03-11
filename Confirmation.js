import React from 'react';
import './Confirmation.css';

const Confirmation = () => {
  return (
    <div>
      <h1 className="confirm">Confirmation</h1>
      <p className="comment">Your comments have been submitted</p>
      <div className="confirmcontainer">
          <h1 className="feedback"> Thank you for your <br/>feedback
          <hr className="line"/></h1>
         
          <div>
              <p className="ack">If you requested a reply, you will recieve a acknowledgement email with your <br/>
              case number and other important information. We appreciate your feedback,<br/> and
              thank you for flying Delta.</p>
          </div>
      </div>
    </div>
  )
}

export default Confirmation
