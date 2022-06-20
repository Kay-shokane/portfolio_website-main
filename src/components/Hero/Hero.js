import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          KARABO SHOKANE <br />
          PORTFOLIO
        </SectionTitle>
        <SectionText>
           This is my personal portfolio website. Developed using React.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;