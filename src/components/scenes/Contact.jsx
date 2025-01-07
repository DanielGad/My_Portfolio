import { useContext, useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import '../../assets/contact.css'
import { Context } from '../Context';

const Contact = () => {
  const { isSmallScreen } = useContext(Context);
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
  
    const formDataWithTimestamp = {
      ...formData,
      timestamp: Timestamp.now(), // Add the current date and time
    };
  
    try {
      const docRef = await addDoc(collection(db, 'data-info'), formDataWithTimestamp);
      console.log('Document written with ID:', docRef.id);
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <div className='contact-txt slide-in right-slide-in'>Contact</div>
    <div className='contact-cont' id='contact'>
      { 
      isSmallScreen ? <div className='left-cont'>
        <div className='contact-img-cont'>
          <img src="/contact.jpg" alt="contact image" width={'100%'} className='contact-img'/>
        </div>
        <p className='let-chat'>Let&apos;s Chat.</p>
        <p className='tell-me'>Tell me about your Project.</p>
      </div>
       : 
      <div className='left-cont'>
      <p className='let-chat'>Let&apos;s Chat.</p>
      <p className='tell-me'>Tell me about your Project.</p>
      <div className='contact-img-cont'>
        <img src="/contact.jpg" alt="contact image" width={'100%'} className='contact-img'/>
      </div>
    </div>
    }


      <div className='right-cont'>
        {/* <p className='send-us'>Send me a message.</p> */}
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contacts</h2>
            <p>Send me a message or chat me up through the media below;</p>
                <input type="text" placeholder='Name:' name="name" value={formData.name} onChange={handleChange} required />
                
                <input type="email" placeholder='Email:' name="email" value={formData.email} onChange={handleChange} required />

                <textarea name="message" placeholder='Message:' value={formData.message} onChange={handleChange} required rows={4}/>
            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            <div className='icons'>
            <a href="https://wa.me/2348084331922" target="_blank"><img src="/whatsapp.svg" alt="WhatsApp logo"  /></a>
            <div className='fb-con'>
            <a href="https://facebook.com/adeyemidanielgad/" target="_blank"><img src="/facebook.svg" alt="Facebook logo" className='fb-icon' width={"20px"}/></a>
            </div>
            <a href="https://www.instagram.com/adeyemidanielgad/" target="_blank"><img src="/instagram.svg" alt="Instagram logo" width={"50px"}/></a>
            <a href="https://www.x.com/adedanielgad/" target="_blank"><img src="/X.avif" alt="X logo" /></a>
            <a href="https://www.linkedin.com/in/adeyemidanielgad/" target="_blank"><img src="/linkedin.svg" alt="Linkedin logo" /></a>
            <a href="mailto:adeyemidanielgad@gmail.com" target="_blank"><img src="/email.svg" alt="Linkedin logo" /></a>
              
            </div>
        </form>
      </div>
    </div>
    
    </>
  )
}

export default Contact