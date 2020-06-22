import React from 'react';

const Map = () => {
  return (
    <div style={{lineHeight:0}}>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4702859209547!2d106.68598765047537!3d10.77524729228465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3b34b87435%3A0xb6acb4fbd0e336ae!2zMzkgTmd1eeG7hW4gVGjhu4sgRGnhu4d1LCBQaMaw4budbmcgNiwgUXXhuq1uIDMsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2sfi!4v1592843712341!5m2!1sen!2sfi'
        width='600'
        height='450'
        frameborder='0'
        style={{ border: 0, width: '100%' }}
        allowfullscreen=''
        aria-hidden='false'
        tabindex='0'
      ></iframe>
    </div>
  );
};


export default Map