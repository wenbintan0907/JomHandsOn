import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {

    const [sending, setSending] = React.useState(false);
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        if (sending) return;
        setSending(true);
        setResult("Sending…");
        const form = event.currentTarget;
        try {
            const formData = new FormData(form);

            formData.append("access_key", "8b21f43d-7651-45bc-a420-76dd4b4c1f66");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
                signal: AbortSignal.timeout(15000)
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setResult("Form Submitted Successfully");
                form.reset();
            } else {

                setResult(data.message || "Could not send your message. Please try again.");
            }
        } catch {
            setResult("Unable to send. Please try again or email jomhandson@gmail.com.");
        } finally { setSending(false); }
    };

    return (
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message <img loading="lazy" decoding="async" src={msg_icon} alt=''/></h3>
                <ul>
                    <li><img loading="lazy" decoding="async" src={mail_icon} alt='' /><a href="mailto:jomhandson@gmail.com">jomhandson@gmail.com</a></li>
                    <li><img loading="lazy" decoding="async" src={phone_icon} alt='' /><a href="tel:+60149834827">0149834827</a></li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label htmlFor="contact-name">Your name</label>
                    <input id="contact-name" autoComplete="name" type="text" name='name' placeholder="Enter your name" required/>
                    <label htmlFor="contact-phone">Phone Number</label>
                    <input id="contact-phone" autoComplete="tel" type="tel" name="phone" placeholder='Enter your phone number' required/>
                    <label htmlFor="contact-message">Write your messages here</label>
                    <textarea id="contact-message" name="message" rows="6" placeholder='Enter your message' required></textarea>
                    <button disabled={sending} type="submit" className="btn dark-btn">Submit now <img loading="lazy" decoding="async" src={white_arrow} alt="" /></button>
                </form>
                <span role="status" aria-live="polite">{result}</span>
            </div>
        </div>
    )
}

export default Contact
