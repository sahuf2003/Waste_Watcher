// eslint-disable-next-line no-unused-vars
import React from 'react';
import Analy from './../assets/mission/Analytics.png';
import Facial from './../assets/mission/facial.png';
import Litter from './../assets/mission/litter.png';


const Card = () => {
  return (
    <section id="features">
    <div style={{ marginTop: '85px',fontFamily: 'Inter' }}>
        <div style={{ textAlign: 'center', fontSize: '35px', color: 'black', marginBottom:'20px',marginTop:'40px'}}>
            Our Technology
        </div>
        <div style={{ fontSize: '17px', color: '#808080' ,marginLeft:'40px',marginRight:'40px',textAlign: 'center', marginBottom:'20px'}}>Discover the Future of Environmental Monitoring with Our Technology: A Smart Littering Detection System, Powered by Advanced Sensors and AI.</div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            {/* Card 1*/}
            <div style={{ width: '220px', height: '270px', background: '#D9D9D9', borderRadius: '7px', textAlign: 'center', padding: '20px', marginRight:'20px'}}>
                <img src={Litter} style={{ width: '163px', height: '163px', marginBottom: '20px' }} alt="Placeholder" />
                <div style={{ color: 'black', fontSize: '17px', fontWeight: '700', marginBottom: '20px' }}>Litter Detection</div>
                <div style={{ color: '#808080', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>Litter recognition system identifies and categorizes litter efficiently.</div>
            </div>
            {/* Card 2*/}
            <div style={{ width: '220px', height: '270px', background: '#D9D9D9', borderRadius: '7px', textAlign: 'center', padding: '20px', margin: '0 20px' }}>
                <img src={Facial} style={{ width: '163px', height: '163px', marginBottom: '20px' }} alt="Placeholder" />
                <div style={{ color: 'black', fontSize: '17px', fontWeight: '700', marginBottom: '20px' }}>Litter Detection</div>
                <div style={{ color: '#808080', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>Litter recognition system identifies and categorizes litter efficiently.</div>
            </div>
            {/* Card 3*/}
            <div style={{ width: '220px', height: '270px', background: '#D9D9D9', borderRadius: '7px', textAlign: 'center', padding: '20px',marginLeft:'20px' }}>
                <img src={Analy} style={{ width: '163px', height: '163px', marginBottom: '20px' }} alt="Placeholder" />
                <div style={{ color: 'black', fontSize: '17px', fontWeight: '700', marginBottom: '20px' }}>Litter Detection</div>
                <div style={{ color: '#808080', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>Litter recognition system identifies and categorizes litter efficiently.</div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Card;
