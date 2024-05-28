import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e18f78f6-44ba-4b6f-b0f6-a35e873e08c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className='contact-col'>
           <h3>Sens us a Message <img src={msg_icon}/></h3>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, laboriosam temporibus sit inventore adipisci nesciunt accusantium, eligendi unde magnam eum possimus error perferendis minima recusandae illum voluptas quae maxime blanditiis.</p>
           <ul>
             <li><img src={mail_icon}/> enquiry@dsuniversity.ac.in </li>
             <li><img src={phone_icon }/>91 70944 58021 | 70944 58022
</li>
             <li><img src={location_icon}/> NH-45, Trichy Chennai Trunk Road,<br/>   Tiruchirappalli - 621 112.
       Tamil Nadu,
       India.</li>
            </ul>  
        </div>
         <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter you name'/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter you Phone number'/>
                <label>Write your Message</label>
                <textarea name="Message" rows="6" placeholder=' Enter your message'></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow}/></button>
                 </form>

                 <span>{result}</span>
         </div>
    </div>
  )
}

export default Contact