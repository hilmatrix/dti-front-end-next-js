import React from 'react';
import ContactInfo from '../../components/ContactInfo/index';
import Footer from '../../components/Footer/index';
import Header from '../../components/Header/index';
import SubmitMessage from '../../components/SubmitMessage/index';
import "./style.css";

const Index: React.FC = () => {
  return (
    <>
    <Header/>
    <div className='contact'>
        <div className='contact-left'>
            <ContactInfo/>
        </div>
        <div className='contact-right'>
            <SubmitMessage/>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Index;
