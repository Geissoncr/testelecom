import styled from 'styled-components';

const MainGrid = styled.main`
  width:100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: 500px;
  padding: 16px;
  .optArea { 
    display: none;
    @media(min-width: 860px) { 
      display:block;
    } 
  } 

  @media( min-width: 860px){
    max-widht: 1110px;
    display: grid;
    grid-template-areas: "optArea plotArea";
    grid-template-columns: 160px 2fr;
  }

`;

export default MainGrid;