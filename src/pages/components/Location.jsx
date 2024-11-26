import React from 'react';

const Location = () => {
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="bg-gray-300 rounded-lg overflow-hidden relative" style={{ width: '100%', height: '500px' }}>
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.215374545453!2d120.9714937153719!3d14.451219089909316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ce1d1441cbcd%3A0x7bc346a4a6255599!2sSaint%20Francis%20of%20Assisi%20College%20-%20Las%20Pi%C3%B1as%20Campus!5e0!3m2!1sen!2sph!4v1732528225180!5m2!1sen!2sph"
              allowFullScreen
            ></iframe>
            <div
              className="bg-white relative flex flex-wrap py-6 rounded shadow-md"
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                zIndex: 10,
                maxWidth: '400px',
              }}
            >
              <div className="w-full px-4">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">045 Admiral, Las Piñas, 1740 Metro Manila, Philippines</p>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">info@stfrancis.edu.ph</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">8800-31-31</p>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">CONTACT NUMBER</h2>
                <p className="leading-relaxed">09339468066</p>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">DEVELOPER</h2>
                <p className="leading-relaxed">John Rae G. Manuel & Rodnel Rianzares BSCS-3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;