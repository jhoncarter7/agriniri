import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import InputLabel from './InputLabel';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_720asuj', 'template_lwxfkmu', form.current, {
        publicKey: '13pQZOJvkphXL_doj',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} id='contact' className='flex flex-col bg-white text-black'>
      <InputLabel type="text" name="user_name"/>
      <InputLabel type="email" name="user_email"/>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contact