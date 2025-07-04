import React from 'react';
import './Services.css';
import needleImg from '../../assets/needle.png';
import scissorsImg from '../../assets/scissors.png';
import threadImg from '../../assets/thread.png';

const servicesData = [
  {
    icon: '✂️',
    title: 'Custom Tailoring',
    desc: 'Perfectly fit clothing stitched with premium materials and love.',
  },
  {
    icon: '🧵',
    title: 'Stitching Services',
    desc: 'Precision stitching by experts for every style and season.',
  },
  {
    icon: '👗',
    title: 'Designer Outfits',
    desc: 'Uniquely styled garments tailored to your imagination.',
  },
  {
    icon: '📏',
    title: 'Home Measurements',
    desc: 'Doorstep measurements taken by professionals.',
  },
  {
    icon: '🧥',
    title: 'Alteration & Fit',
    desc: 'We make your existing clothes look new with perfect fits.',
  },
  {
    icon: '🚚',
    title: 'Pickup & Delivery',
    desc: 'No-hassle service from pickup to doorstep delivery.',
  },
  {
    icon: '🎨',
    title: 'Fashion Consultation',
    desc: 'Expert advice on choosing the right fabric, color, and style for every occasion.',
  },
  {
    icon: '🔁',
    title: 'Upcycled Fashion',
    desc: 'We transform old or unused clothes into trendy, eco-friendly designs.',
  },
];
const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-heading">✨ Our Signature Services</h2>

      <div className="services-intro">
        <p>Your outfit’s journey begins with expert hands 🧵✂️</p>
      </div>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="emoji">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>

  
      <div className="floating-assets">
        <img src={needleImg} className="floating-img float-needle" alt="needle" />
        <img src={scissorsImg} className="floating-img float-scissors" alt="scissors" />
        <img src={threadImg} className="floating-img float-thread" alt="thread" />
      </div>
    </section>
  );
};

export default Services;
