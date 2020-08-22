import React from 'react';
import {ContentStyle} from './styles';
import {FiAward} from 'react-icons/fi';
import {DataExperience} from '../../data/luis';

interface ContentDescription{
  data: DataExperience ;
}

const ContentDescription: React.FC<ContentDescription> = ({data}) => {
  return (
    <ContentStyle>

      {data.yaer ?
      <>
        <div>
          <FiAward size={20}/>
          {data.yaer && <span>{data.yaer}</span>}
        </div>
        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </>
      :
      <>
        <div>
          <FiAward size={20}/>
          <h3>{data.title}</h3>         
        </div>
        <div>
          <p>{data.description}</p>
        </div>
      </>
      }
    </ContentStyle>
  );
}

export default ContentDescription;