import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle,SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Contact Details</SectionTitle>
          <SectionText>
		Phone number: (+27) 62 133 5988 <br/>
		Email Address: Karabo0521@gmail.com <br/>

          </SectionText>
  </Section>
);

export default Projects;