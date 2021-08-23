 import React,{ useState } from "react";
import "./contact.scss"
import lottie from "lottie-web";
import reactLogo from "../../contact.json";

 export default function Contact() {
    const [message,setMessage]=useState(false);

     const handleSubmit =(e)=>{
         e.preventDefault();
         setMessage(true);
     }
     React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#react-logo"),
            animationData: reactLogo,
           // boolean
          });
      }, []);
     return (
         <div className="contact" id="contact">
             <div className="left">
                 {/* <img src="assets/contact.png" alt="" /> */}
                 <div id="react-logo"  />

             </div>
             <div className="right">
                 <h2>Contact.</h2>
                 <form onSubmit={handleSubmit}>
                     <input type="text" placeholder="Email" />
                     <textarea placeholder="Message"></textarea>
                     <button type="submit">Send</button>
                     {message && <span>Thanks, I'll Reply ASAP :)</span>}
                 </form>
             </div>
             
         </div>
     )
 }
 