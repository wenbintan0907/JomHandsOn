import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b316c0aa-28ed-4e2f-937f-a70a449ed9e3");
    
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
                <h3>Send us a message <img src={msg_icon} alt=''/></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque expedita velit est quibusdam suscipit facilis sit aut dignissimos sunt. Delectus voluptatibus nobis necessitatibus iste qui sit cumque ab omnis in.</p>
                <ul>
                    <li><img src={mail_icon} alt='' />tanwenbin060709@gmail.com</li>
                    <li><img src={phone_icon} alt='' />01170102651</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type="text" name='name' placeholder="Enter your name" required/>
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder='Enter your phone number' required/>
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact