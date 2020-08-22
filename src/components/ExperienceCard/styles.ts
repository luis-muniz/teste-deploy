import styled from 'styled-components';

export const ContentStyle = styled.div`

  padding: 20px 20px 0px;

  > div:first-of-type{
    display: flex;
    align-items: center;

    > svg {
      /* color: #E6525C; */
    }

    span{
      margin-left: 17px;
    }

    > h3{
      margin-left: 15px;
      font-weight:400;
      color: #E6525C;
      line-height: 20px;
    }
  }

  > div + div{
      display: flex;
      flex-direction: column;
      border-left: 2px solid #E6525C;
      margin-left: 9px;
      padding-left: 26.5px;

      > h3{
      font-weight:400;
      color: #E6525C;
      line-height: 20px;
    }

      p{
        font-size: 16px;
        text-align:justify;
      }
  }
`;