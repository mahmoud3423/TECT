import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styeled from  "styled-components";

// npm i @gmailjs/brower

export const ContactUs = () => {

    return <styeledcontactfrom>
          <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_Email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
 </styeledcontactfrom>

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
    
    
    .sendForm(
        "service_cocw2ew" , "template_kkwdopl" , form.current, "5Fl42Dgy3GC7MsbgL"
        )



      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);

      });
  };