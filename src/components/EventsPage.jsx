import React from 'react';
import Header from './Header';
import Footer from './Footer';

const EventsPage = ({ setCurrentPage }) => {
  const data = {
    de: {
      pageTitle: "Veranstaltungen & Konzerte",
      events: [
        {
          id: 1,
          title: "Live-Konzert in Berlin",
          date: "Samstag, 05. April 2025",
          time: "21:00 Uhr",
          location: "Hanns-Eisler-Straße 93, 10409 Berlin",
          price: "10 Euro",
          description: "Die Kabouk Band live in Berlin! Seien Sie dabei bei einem unvergesslichen Abend voller kurdischer Musik und Energie. Begrenzte Kapazität: nur 100 Plätze. Kinder unter 12 Jahren haben freien Eintritt.",
          poster: 'images/flyer1.jpg',
          isPast: true
        },
        {
          id: 2,
          title: "Live-Konzert in Berlin",
          date: "Freitag, 27. Juni 2025",
          time: "21:00 - 02:00 Uhr",
          location: "Hanns-Eisler-Straße 93, 10409 Berlin",
          price: "10 Euro",
          description: "Live-Musik-Abend mit der Kabouk Band und der Kulturmarkthalle Berlin. Verpassen Sie dieses besondere Ereignis nicht!",
          poster: 'images/flyer2.jpg',
          isPast: true
        },
        {
          id: 3,
          title: "Kurdisches Live-Konzert",
          date: "Samstag, 28. Juni 2025",
          time: "21:00 Uhr",
          location: "Kulturmarkthalle Berlin, Hanns-Eisler-Str. 93, 10409 Berlin",
          price: "10 Euro",
          description: "Kurdisches Live-Konzert der Kabouk Band. Die Kapazität ist begrenzt, sichern Sie sich jetzt Ihr Ticket!",
          poster: 'images/flyer3.jpg',
          isPast: true
        },
        {
          id: 4,
          title: "Konzert der Kabouk Band",
          date: "Samstag, 28. Juni 2025",
          time: "21:00 Uhr",
          location: "Kulturmarkthalle Berlin",
          price: "10 Euro",
          description: "Die Kabouk Band tritt live auf! Für weitere Infos und Tickets kontaktieren Sie uns auf Telegram.",
          poster: 'images/flyer4.jpg',
          isPast: true
        },
        {
          id: 5,
          title: "Live-Konzert in Berlin",
          date: "Samstag, 30. August 2025",
          time: "20:00 - 00 Uhr",
          location: "Kulturmarkthalle Berlin",
          price: "10 Euro",
          description: "Ein brandneues Konzert mit der Kabouk Band! Sichern Sie sich jetzt Ihre Tickets für einen unvergesslichen Abend.",
          poster: 'images/flyer2new.jpg',
          isPast: true
        }
      ],
      telegramBotLink: "https://t.me/kaboukbandbot",
    },
  };
    
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header setCurrentPage={setCurrentPage} />
      <main className="container mx-auto p-8 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">{data.de.pageTitle}</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.de.events.map((event) => (
            <div
              key={event.id}
              className={`relative p-6 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105 ${
                event.isPast ? 'bg-gray-700 opacity-60' : 'bg-gray-800'
              }`}
            >
              {event.isPast && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="absolute w-full h-1 bg-red-500 transform rotate-12"></div>
                  <p className="text-red-500 text-2xl font-bold transform -rotate-12">ABGELAUFEN</p>
                </div>
              )}
              <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
              <img
                src={event.poster}
                alt={`Poster für ${event.title}`}
                className="w-full h-auto object-cover rounded-md shadow-md mb-4"
              />
              <p className="text-lg text-gray-300 mb-2">
                <strong>Datum:</strong> {event.date}
              </p>
              <p className="text-lg text-gray-300 mb-2">
                <strong>Uhrzeit:</strong> {event.time}
              </p>
              <p className="text-lg text-gray-300 mb-2">
                <strong>Ort:</strong> {event.location}
              </p>
              <p className="text-lg text-gray-300 mb-4">
                <strong>Eintritt:</strong> {event.price}
              </p>
              <p className="text-md text-gray-400 mb-4">{event.description}</p>
              <a
                href={data.de.telegramBotLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-full text-lg shadow-lg hover:bg-yellow-500 transition-colors duration-300"
              >
                Tickets über Telegram kaufen
              </a>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};
    
export default EventsPage;