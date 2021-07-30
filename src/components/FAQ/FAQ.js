import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faq} from '../../data/dataStore';

const FAQ = () => (
    
  <div>
    <Container>
      <Hero titleText={faq.title} image={faq.image} />
      <p>{faq.content}</p>
    </Container>
  </div>
);

export default FAQ;