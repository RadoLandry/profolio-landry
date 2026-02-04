'use client';

import { useState } from 'react';
import style from './style.module.css'
// import PhoneInput, { Value } from "react-phone-number-input";
// import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";

interface FormData {
  name: string;
  email: string;
  textarea: string;
}

const ContactForm = () => {
  //  const [phone, setPhone] = useState<Value>();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    textarea: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: JSON.stringify({
          access_key: "e0bd6f29-bdf5-4864-8246-9a1de91eaade",
          name: formData.name,
          email: formData.email,
          message: formData.textarea,
      }),
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await response.json();

      if (result.success) {
        console.log('Email envoyé avec succès'); 
        setFormData({ name: '', email: '', textarea: '' }); 
      } else {
        console.error('Erreur lors de l\'envoi de l\'email:', result.message);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  };

  return (
    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
      <div className={style.decorationLeft}></div>
      <h2 className="mb-4 text-2xl font-bold text-white"></h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="mx-0 mb-1 sm:mb-4">
            <div className="mx-0 mb-1 sm:mb-4">
              <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider text-white">Votre nom</label>
              <input 
                type="text" 
                id="name" 
                autoComplete="given-name" 
                placeholder="Votre nom" 
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black sm:mb-0"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider text-white">Votre Email</label>
              <input 
                type="email" 
                id="email" 
                autoComplete="email" 
                placeholder="Votre email address" 
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black  sm:mb-0"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider text-white">Votre message</label>
            <textarea 
              id="textarea" 
              name="textarea"
              cols={30} 
              rows={5} 
              placeholder="Écrivez votre message..."
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md text-black sm:mb-0"
              value={formData.textarea}
              onChange={handleChange}
            />
          </div>
          {/* <div>
              <PhoneInput
                id="telephone"
                name="telephone"
                placeholder="Téléphone"
                defaultCountry="MG"
                international 
                value={phone}
                onChange={setPhone}
                flags={flags}
                className="flex-1 p-2 text-base md:text-lg focus:outline-none text-black "
              />
          </div> */}
        </div>
        <div className="text-center">
          <button type="submit" className="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
            Envoyer le message
          </button>
        </div>
      </form>
      <div className={style.decorationRight}></div>
    </div>
  );
};

export default ContactForm;
