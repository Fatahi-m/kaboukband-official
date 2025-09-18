import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutPage = ({ setCurrentPage }) => {
  const aboutData = {
    de: {
      pageTitle: "Über uns",
      mainTitle: "Die Geschichte der Kabouk Band",
      mainText: `
        Die Kabouk Band, eine kurdische Musikgruppe mit Sitz in Berlin, Deutschland, wurde 2016 gegründet. Seitdem widmet sich die Band der Aufgabe, die Schönheit und den Reichtum der kurdischen Musik und Kultur einem Publikum in Berlin und ganz Europa zu präsentieren. Mit jahrelangen Live-Auftritten und Konzerten hat sich die Kabouk Band durch ihre einzigartige Mischung aus traditionellen und modernen Klängen, herzlichen Darbietungen und der starken Verbindung zur kurdischen Gemeinschaft einen Namen gemacht.
        
        Die Mission der Band ist es, die Schönheit der kurdischen Musik mit der Welt zu teilen und Menschen durch die universelle Sprache der Musik zu verbinden.
      `,
      membersTitle: "Unsere Mitglieder",
      members: [
        
        {
          name: 'Farhad Amini',
          role: 'Keyboard & Bandleader',
          image: 'images/farhad.jpg',
          bio: 'Farhad Amini bringt mit seinen Fähigkeiten an Keyboard und Gitarre Energie und Vielseitigkeit in die Band. Er ist der Bandleader.',
          socials: {
            facebook: 'https://www.facebook.com/share/1CZ78892Yj/',
            instagram: 'https://www.instagram.com/farhad_amini_',
            tiktok: 'https://www.tiktok.com/@farhad.amini',
          },
        },
        {
          name: 'Mukhtar Fatahi',
          role: 'Sänger',
          image: 'images/mukhtar.jpg',
          bio: 'Mukhtar Fatahi ist der Leadsänger der Kabouk Band, bekannt für seine kraftvolle Stimme und seine tiefe Verbindung zu den kurdischen Musiktraditionen.',
          socials: {
            facebook: 'https://www.facebook.com/share/1GPvaDsxDN/',
            instagram: 'https://www.instagram.com/muxtar_fatahi/profilecard/?igsh=OGF2MHVoMjZzeng5',
            tiktok: 'https://www.tiktok.com/@muxtarfatahi?_t=ZN-8xkMGrOIgH0&_r=1',
          },
        },
        {
          name: 'Marwan Soufi',
          role: 'Violine & Oud',
          image: 'images/marwan.jpg',
          bio: 'Marwan Soufi verleiht der Kabouk Band mit seiner Beherrschung der Violine und Oud eine einzigartige Note und schafft emotionale und unvergessliche Melodien.',
          socials: {
            facebook: 'https://www.facebook.com/share/19GoSfwwMG/',
            instagram: 'https://www.instagram.com/marwan.rwandzi?igsh=c2l4cXlobHduMDdq',
            tiktok: 'https://www.tiktok.com/@marvan977',
          },
        },
      ],
    },
  };
  const data = aboutData.de;

  const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.909c0-.889.179-1.552 1.519-1.552h2.481v-3.998h-3.294c-3.513 0-4.706 2.008-4.706 4.359v2.641z"/></svg>
  );
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.77-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.35 1.185-6.096 4.67-6.205 6.206-.053 1.132-.063 1.49-.063 4.887 0 3.394.01 3.753.063 4.888.109 1.535 1.854 5.022 6.205 6.206 1.28.058 1.687.072 4.947.072 3.259 0 3.668-.014 4.948-.072 4.35-1.185 6.096-4.672 6.205-6.206.053-1.133.062-1.491.062-4.888 0-3.394-.01-3.753-.062-4.888-.11-1.535-1.855-5.021-6.205-6.206-1.28-.058-1.68-.072-4.948-.072zM12 7.387c-2.84 0-5.143 2.302-5.143 5.143s2.303 5.143 5.143 5.143 5.143-2.303 5.143-5.143-2.303-5.143-5.143-5.143zm0 8.446c-1.879 0-3.403-1.524-3.403-3.403s1.524-3.403 3.403-3.403 3.403 1.524 3.403 3.403-1.524 3.403-3.403 3.403zm5.737-11.849c-.58-.579-1.263-.873-2.052-.873s-1.478.294-2.052.873c-.58.579-.874 1.263-.874 2.052 0 .789.294 1.474.874 2.053.574.579 1.264.873 2.052.873s1.478-.294 2.052-.873c.579-.58.873-1.264.873-2.053 0-.789-.293-1.473-.873-2.052z"/></svg>
  );
  const TiktokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.645c-.179-.028-.363-.05-.552-.05-1.241 0-2.484.5-3.52 1.536-1.035 1.035-1.535 2.28-1.535 3.52 0 .179.022.363.05.552v4.86c0 2.946-2.502 5.347-5.448 5.347s-5.448-2.401-5.448-5.347c0-2.945 2.502-5.347 5.448-5.347.168 0 .341.02.518.043v-2.043c-.177-.023-.35-.043-.518-.043-4.041 0-7.448 3.327-7.448 7.39s3.407 7.39 7.448 7.39c4.04 0 7.448-3.327 7.448-7.39v-4.86c.189-.028.369-.05.552-.05.203 0 .4.02.6.046v-3.996zM13.447 1.493l-1.92 1.83v2.091c.205.02.404.04.604.04 1.229 0 2.457-.48 3.49-1.513 1.035-1.034 1.535-2.28 1.535-3.52 0-.179-.022-.363-.05-.552z"/></svg>
  );
  
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header setCurrentPage={setCurrentPage} />
      <main className="container mx-auto p-8 pt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-yellow-400">{data.pageTitle}</h1>
        <section className="mb-16 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center">{data.mainTitle}</h2>
          <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line text-justify">{data.mainText}</p>
        </section>
        <section>
          <h2 className="text-3xl font-semibold mb-8 border-b-2 border-yellow-400 pb-2 text-center">{data.membersTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {data.members.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400 shadow-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">{member.name}</h3>
                <p className="text-xl font-medium text-gray-300 mb-2">{member.role}</p>
                <p className="text-md text-gray-400">{member.bio}</p>
                <div className="flex justify-center gap-4 mt-4 text-yellow-400">
                  {member.socials.facebook && (
                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label={`Facebook von ${member.name}`} className="hover:text-white transition-colors duration-300">
                      <FacebookIcon />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label={`Instagram von ${member.name}`} className="hover:text-white transition-colors duration-300">
                      <InstagramIcon />
                    </a>
                  )}
                  {member.socials.tiktok && (
                    <a href={member.socials.tiktok} target="_blank" rel="noopener noreferrer" aria-label={`TikTok von ${member.name}`} className="hover:text-white transition-colors duration-300">
                      <TiktokIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;