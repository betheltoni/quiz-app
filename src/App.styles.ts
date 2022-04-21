import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body{
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p{
    color: black;
}

.score{
    font-size: 2rem;
    margin: 0;
    color: blue;
}

h1{
    color:green;
    font-size: 70px;
    text-align: center;
    margin: 20px;
}

.start-btn, .next-btn {
    cursor: pointer;
    border: 2px solid green;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    height:30px;
    margin: 20px 0;
    padding: 0 40px;
}

.start-btn{
    max-width: 200px; 
}

`