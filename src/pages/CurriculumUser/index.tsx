import React from "react";
import {FiPhone,FiMail, FiMapPin} from 'react-icons/fi'
import {
  Container,
  Content,
  Header,
  About,
  Achievements,
  Experience,
  Formation,
  Main,
  MainLeft,
  MainRight,
  Tools,
  Skills,
} from "./styles";

import Perfil from "../../assets/perfil.jpeg";
import Title from "../../components/Title/index";
import ContentDescription from "../../components/EducationCard/index";
import ExperienceCard from "../../components/ExperienceCard/index";
import Social from "../../components/Social/index";
import {Data} from '../../data/luis';

const CurriculumUser: React.FC = () => {
  return (
    <Container>
      <Content>
        <Header>
          <img src={Perfil} alt="" />
          <div>            
            <h1>LUIS FERNANDO LOPES MUNIZ</h1>            
            <h3>DESENVOLVEDOR FULLSTACK</h3>
            <div>
              <FiPhone size={15}/>
              <p>(98) 99174-6041</p>
            </div>
            <div>
              <FiMail size={15}/>
              <p>LUIS.FERNANDOLMUNIZ@GMAIL.COM</p>
            </div>
            <div>
              <FiMapPin size={15}/>
              <p>RUSSAS, CEARÁ</p>
            </div>
          <Social />
          </div>
        </Header>
        <About>
          <Title iconType="aboutMe" name="ABOUT ME" />
          <p>
            {Data.about}
          </p>
        </About>
        <Main>
          <MainLeft>
            <Formation>
              <Title iconType="education" name="EDUCATION" />
              {Data.formations.map(formation => 
              <ContentDescription key={formation.curse} data={formation}/>          
              )}
            </Formation>         
            <Tools>
              <Title iconType="hardskills" name="TECHINCS SKILLS" />
              <div>
              <ul>
              {Data.technicalSkills.map(technicalSkill =>  <li key={technicalSkill}>{technicalSkill}</li>)}
              </ul>
              </div>
            </Tools>
            <Skills>
              <Title iconType="softskills" name="SOFT SKILLS" />
              <div>
              <ul>
                {Data.softSkills.map(softSkill =>  <li key={softSkill}>{softSkill}</li>)}
              </ul>
              </div>
            </Skills>
          </MainLeft>
          <MainRight>
            <Experience>
              <Title iconType="experience" name="EXPERIENCIE (PERSONAL PROJECTS)" />
              {Data.experiences.map(experience => 
              <ExperienceCard key={experience.title} data={experience}/>          
              )}
            </Experience>
            
          </MainRight>
        </Main>
        <div></div>
      </Content>
    </Container>
  );
};

export default CurriculumUser;
