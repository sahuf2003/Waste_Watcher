// eslint-disable-next-line no-unused-vars
import React from 'react';
import heroimg from './../assets/hero.jpg';
const Hero = () => {
  return (
    <section id="hero">
    <>
      <div style={{ padding: '50px'}}>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '20px', marginRight:'20px' }}> {/* wrapper */}
          <div style={{ flex: 1, marginTop: '20px', fontFamily:'Inter' }}>
            <h1 style={{ fontSize: '56px', marginTop: '50px' }}>Waste Watcher</h1>
            <p style={{ fontSize: '18px', marginTop: '-30px', marginLeft: '5px',fontWeight:'300',color:'#808080'}}>Your AI Guardian Against Litter - Keeping it Clean,<br /> 
            Keeping it Green!</p>
            <div style={{ marginTop: '20px' }}>
              <button style={{ marginTop: '5px',borderRadius: '8px', border: '1px solid transparent', padding: '0.6em 9.0em', fontSize: '18px', fontWeight: '500', backgroundColor: 'black', color: 'white' }}>Get Started</button>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src={heroimg} style={{ width: '100%', height: 'auto', borderTopRightRadius: '100px', marginTop:'-10px'}} alt="Your Image" />
          </div>
        </div>
      </div>
    </>
    </section>
  );
};

export default Hero;
