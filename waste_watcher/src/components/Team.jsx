// eslint-disable-next-line no-unused-vars
import React from 'react'
import Rehan from './../assets/team/rehan.jpg';
import Salman from './../assets/team/salman.png';
import Sahuf from './../assets/team/sahuf.jpg';

export default function Team() {
  return (
    <section id="team">
    <div style={{ marginTop: '85px',fontFamily: 'Inter' }}>
        <div style={{ textAlign: 'center', fontSize: '35px', color: 'black', marginBottom:'20px'}}>
            Meet our Team
        </div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            {/* Card 1*/}
            <div style={{ width: '220px', height: '270px', background: 'aliceblue', borderRadius: '7px', textAlign: 'center', padding: '20px', marginRight:'20px'}}>
                <img src={Rehan} style={{ width: '163px', height: '163px', marginBottom: '20px', borderRadius:'10px' }} alt="team image" />
                <div style={{ color: 'black', fontSize: '17px', fontWeight: '700', marginBottom: '20px' }}>Rehan Sayyed</div>
                <div style={{ color: '#808080', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>Full Stack Developer</div>
            </div>
            {/* Card 2*/}
            <div style={{ width: '220px', height: '270px', background: 'aliceblue', borderRadius: '7px', textAlign: 'center', padding: '20px', margin: '0 20px' }}>
                <img src={Sahuf} style={{ width: '163px', height: '163px', marginBottom: '20px' , borderRadius:'10px' }} alt="team image" />
                <div style={{ color: 'black', fontSize: '17px', fontWeight: '700', marginBottom: '20px' }}>Sahuf Shaikh</div>
                <div style={{ color: '#808080', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>Backend Developer</div>
            </div>
            {/* Card 3*/}
            <div style={{ width: '220px', height: '270px', background: 'aliceblue', borderRadius: '7px', textAlign: 'center', padding: '20px',marginLeft:'20px' }}>
                <img src={Salman} style={{ width: '163px', height: '163px', marginBottom: '20px', borderRadius:'10px'  }} alt="team image" />
                <div style={{ color: 'black', fontSize: '17px', fontWeight: '700', marginBottom: '20px' }}>Salman Shaikh</div>
                <div style={{ color: '#808080', fontSize: '13px', fontWeight: '600', marginBottom: '20px' }}>Full Stack Developer</div>
            </div>
        </div>
    </div>
    </section>
  )
}
