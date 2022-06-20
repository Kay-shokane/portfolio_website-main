import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
 	Good day, welcome to my personal portfolio. My name is Karabo Shokane, I was born in a small town in the Eastern Free State called Bethlehem. I grew up as someone who is very passionate about technology and how it is changing the world that we live in. <br/> <br/> I posses a Diploma in ICT Business Aanalysis and an Advanced Diploma in ICT, both qualifications obtained from the Durban University of Technology.
	<br/> <br/> I want to be a software developer at SovTech because I've worked hard to develop skills that are relevant to this industry and because this type of work brings me personal satisfaction. Software development wasn't my initial career path, but I'm glad I discovered it. In varsity, my first choice was Bisuness Analysis as I thought is only for nerds but I was wrong. I did my reasearch on SovTech after before for the Graduate Programme and I fell in love with the culture of the company. I would like to learn and grow in SovTech.
      </SectionText>
    </Section>
  );
};

export default Timeline;
