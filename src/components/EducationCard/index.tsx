import React from 'react';
import {ContentStyle} from './styles';

import MortaboardIcon from '../../assets/mortarboard-year-icon.svg';
import {DataFormation} from '../../data/luis';

interface ContentDescription{
  data: DataFormation ;
}

const ContentDescription: React.FC<ContentDescription> = ({data}) => {
  return (
    <ContentStyle>
      <div>
        <img src={MortaboardIcon} alt=""/>
        <span>{data.year}</span>
      </div>
      <div>
  <h3>{data.institute}</h3>
  <h4>{data.curse}</h4>
  <p>{data.description}</p>
      </div>
    </ContentStyle>
  );
}

export default ContentDescription;