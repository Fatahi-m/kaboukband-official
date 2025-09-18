import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactPage = ({ setCurrentPage }) => {
  const data = {
    de: {
      pageTitle: "Kontakt",
      introText: "Wir freuen uns, von Ihnen zu hören! Egal, ob Sie eine Frage haben, eine Buchungsanfrage stellen möchten oder uns einfach nur Ihre Meinung mitteilen möchten, zögern Sie nicht, uns zu kontaktieren.",
      formTitle: "Senden Sie uns eine Nachricht",
      contactInfoTitle: "Unsere Kontaktdaten",
      email: "info@kaboukband.de",
      phone: "+49 123 4567890",
      address: "Kabouk Band, Berlin, Deutschland",
    },
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
  };
    
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header setCurrentPage={setCurrentPage} />
      <main className="container mx-auto p-8 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">{data.de.pageTitle}</h1>
        <p className="text-lg text-gray-300 text-center mb-8 max-w-2xl mx-auto">{data.de.introText}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-yellow-400 pb-2">{data.de.formTitle}</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300">Betreff</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:ring-yellow-400 focus:border-yellow-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full text-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
              >
                Absenden
              </button>
            </form>
          </section>
          <section className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 border-b-2 border-yellow-400 pb-2">{data.de.contactInfoTitle}</h2>
            <div className="space-y-4 text-lg">
              <p>
                <strong>E-Mail:</strong> <a href={`mailto:${data.de.email}`} className="text-yellow-400 hover:underline">{data.de.email}</a>
              </p>
              <p>
                <strong>Telefon:</strong> <a href={`tel:${data.de.phone}`} className="text-yellow-400 hover:underline">{data.de.phone}</a>
              </p>
              <p>
                <strong>Adresse:</strong> {data.de.address}
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
    
export default ContactPage;