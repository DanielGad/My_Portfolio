import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import '../../assets/contact.css'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
        await addDoc(collection(db, 'data-info'), formData);
        alert('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false)
    } catch (error) {
        console.error('Error adding document: ', error);
        setIsSubmitting(false)
    }
};

  return (
    <>
    <div className='contact-txt slide-in right-slide-in'>Contact</div>
    <div className='contact-cont' id='contact'>
      <div className='left-cont'>
        <p className='let-chat'>Let&apos;s Chat</p>
        <p className='tell-me'>Tell me about your Project.</p>
        <div>
          <img src="/contact.jpg" alt="contact image" width={'100%'} className='contact-img'/>
        </div>
      </div>

      <div className='right-cont'>
        <p className='send-us'>Send me a message.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
                <input type="text" placeholder='Name:' name="name" value={formData.name} onChange={handleChange} required />
                
                <input type="email" placeholder='Email:' name="email" value={formData.email} onChange={handleChange} required />

                <textarea name="message" placeholder='Message:' value={formData.message} onChange={handleChange} required />
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <div className='icons'>
            <a href="https://wa.me/2348084331922" target="_blank"><img src="/whatsapp.png" alt="WhatsApp logo"  /></a>
            <a href="https://facebook.com/adeyemidanielgad/" target="_blank"><img src="/facebook.png" alt="Facebook logo"  /></a>
            <a href="https://www.instagram.com/adeyemi_daniel_gad/" target="_blank"><img src="/instagram.png" alt="Instagram logo" width={"50px"}/></a>
            <a href="https://www.x.com/adedanielgad/" target="_blank"><img src="/X.avif" alt="X logo" /></a>
            <a href="https://www.linkedin.com/in/adeyemi-daniel-gad/" target="_blank"><img src="/linkedin.png" alt="Linkedin logo" /></a>
              
            </div>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default Contact