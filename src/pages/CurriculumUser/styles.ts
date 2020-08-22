import styled from "styled-components";

export const Container = styled.div`
  /* background: #607d8b; */
  background: #121214;
  
  max-width: 1100px;
  width: 100%;
  height: auto;
  display: flex;
  padding: 20px;
  margin: auto;  
`;

export const Content = styled.div`
  flex: 1;
`;

export const Header = styled.div`
  /* background: #37474f; */
  background: #202024;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;

  > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: auto;
    border: 10px solid #E6525C;
  }

  > div{
    margin: auto;

    > h1{
      font-weight: 500;
      color: #fff;
    }

    > h3{
      font-weight: 500;
      color: #E6525C;
      margin-left: 20px;
      margin-top: 10px;
    }

    > div{
      display: flex;
      align-items: center;

      > svg {
        margin-right: 10px;
        color: #E6525C;
      }

      > p{
        font-size: 16px;
        color: #fff;       
      }

      &:first-of-type{
          margin-top:20px;
      }

      &:last-of-type{
        p{
          font-size:16px;
        }
      }
    }

  }
`;

export const About = styled.div`
  /* background: #FEF5E7; */
  background: #202024;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  border-radius: 5px;

    > p{
      padding: 10px 20px;
      text-align:justify;
      font-size: 16px;
    }
  
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: auto;

  img {
    width: 30px;
    height: 30px;
  }
`;

export const MainLeft = styled.div`
  display: flex;
  width: 45%;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`;

export const Formation = styled.div`
  /* background: #FEF5E7; */
  background: #202024;
  width: 100%;
  flex: 1;
  padding: 10px;
  border-radius: 5px;

  > span{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    text-align: center;
  }
  `;

export const Achievements = styled.div`
  /* background: #FEF5E7; */
  background: #202024;
  width: 100%;
  flex: 1;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  `;

export const Tools = styled.div`
  /* background: #FEF5E7; */
  background: #202024;
  width: 100%;
  flex: 1;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;

  > div + div{
    padding:20px;
   
    ul{
      list-style:none;
      font-size:16px;
      font-weight: 500;

      li{
        display:inline-block;
        background: #E6525C;
        margin-left: 10px;
        margin-bottom: 5px;
        padding: 5px 20px;
        border-radius: 8px;
        color: #fff;
      }
    }
   
  }

`;

export const MainRight = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
`;

export const Experience = styled.div`
  /* background: #FEF5E7; */
  background: #202024;
  width: 100%;
  flex: 1;
  padding: 10px;
  border-radius: 5px;
`;

export const Skills = styled.div`
  /* background: #FEF5E7; */
  background: #202024;
  width: 100%;
  flex: 1;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;

  > div + div{
    padding:20px;
   
    ul{
      list-style:none;
      font-size:16px;
      font-weight: 500;

      li{
        display:inline-block;
        background: #E6525C;
        margin-left: 10px;
        margin-bottom: 5px;
        padding: 5px 20px;
        border-radius: 8px;
        color: #fff;
      }
    }
  }
`;
