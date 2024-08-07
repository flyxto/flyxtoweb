"use client"
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion
import banner from './assets/contactwall3.webp'
import Container from '../components/Container';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_USER_ID'
      );
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('Failed to send message.');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <motion.div
        className='absolute inset-0 top-24 z-0 overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }} // Add a delay here
      >
        <Image
          src={banner}
          className='brightness-[80%]'
          objectFit='cover'
          alt='Background Banner'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0F0A0A] via-transparent to-transparent opacity-100'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-[#0F0A0A] via-transparent to-transparent opacity-100'></div>
      </motion.div>
      <Container>
        <div className='relative'>

          <div className='grid grid-cols-2'>
            <div></div>
            <motion.div
              className='z-10 relative mt-24 w-96'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }} // Add a delay here
            >
              <p className='text-5xl font-semibold gradient-text text-center'>Get in touch</p>
              <div className='w-96 p-6 mt-3 bg-black/50 backdrop-blur-sm rounded-lg shadow-lg'>
                <form onSubmit={handleSubmit}>
                  <div className='mt-4'>
                    <label htmlFor="name" className='block text-sm font-medium '>Your Name :</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-white/20 focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                  </div>
                  <div className='mt-4'>
                    <label htmlFor="email" className='block text-sm font-medium '>Email :</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='mt-1 block bg-white/20 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                  </div>
                  <div className='mt-4'>
                    <label htmlFor="message" className='block text-sm font-medium '>Tell us your need :</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className='mt-1 block bg-white/20 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                    />
                  </div>
                  <div className='mt-6'>
                    <Button type="submit" className='w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-white/30 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/80'>
                      Send
                    </Button>
                  </div>
                  {formStatus && <p className='mt-4 text-sm text-gray-600'>{formStatus}</p>}
                </form>
              </div>

              <p className='text-xl font-semibold text-center mt-2'>or Email us at<a href="mailto:hello@flyxto.com"> hello@flyxto.com</a></p>

            </motion.div>
          </div>

          <motion.div
            className='relative z-10 mt-24'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }} // Add a delay here
          >
            <p className='text-5xl font-semibold text-center gradient-text'>Schedule a Meeting</p>
            <p className='text-center'>Time Made Simple: Book Your Meetings in Seconds!</p>
            <div className="calendly-inline-widget" data-url="https://calendly.com/flystudioslk/30min" style={{ minWidth: 'auto', height: '900px' }}></div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
