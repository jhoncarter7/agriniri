/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { Send } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = React.useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm('service_720asuj', 'template_lwxfkmu', form.current, {
        publicKey: '13pQZOJvkphXL_doj',
      })
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        () => {
          toast.error('Failed to send message. Please try again.');
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const InputField = ({ type, name, placeholder }) => (
    <motion.div variants={itemVariants}  className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700">{name}</label>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type={type}
        name={name.toLowerCase().replace(' ', '_')}
        placeholder={placeholder}
        required
        className="p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      />
    </motion.div>
  );

  return (
    <section id='contact' className="max-w-lg mx-auto p-6 min-h-screen flex items-center justify-center font-family-gilroy-Bold">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-gray-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
        >
          Get in Touch
        </motion.h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <InputField type="text" name="User Name" placeholder="Enter your name" />
          <InputField type="email" name="User Email" placeholder="Enter your email" />

          <motion.div variants={itemVariants} className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              placeholder="Your message here..."
              rows="5"
              required
              className="p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </form>
      </motion.div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Contact;
