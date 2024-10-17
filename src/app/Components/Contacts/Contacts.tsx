'use client';

import React from 'react';
import ContactForm from './ContactForm';
import ContactSection from './ContactSection';

const Contacts: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section className="bg-[#1e293b00]" id="contact">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="md:mb-12 text-center">
          <h3 className="font-heading mb-4 font-bold tracking-tight text-white text-xl sm:text-5xl" data-aos="fade-down">
            CONTACT
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1" data-aos="fade-right">
            <ContactForm />
          </div>
          <div className="order-1 md:order-2" data-aos="fade-left">
            <ContactSection />
          </div>
        </div>
      </div>
      <footer className="bg-[#1e293b00] py-10">
        <hr className="my-6 border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-400">
          &copy; {currentYear}{" "}
          <a href="#" className="hover:underline">
            Elshard&trade;
          </a>
        </span>
      </footer>
    </section>
  );
};

export default Contacts;
