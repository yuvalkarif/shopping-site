import styled from 'styled-components';

export const Container = styled.div`
position: relative;
display: flex;
flex-direction: column;
max-width: 200px;
padding: 20px 10px;
cursor: pointer;
transition: opacity 150ms ease-out;
::after{
    opacity: 0;
content: 'BUY';
text-align:center;
position: absolute;
display: flex;
align-self: center;
top: 35%;
background-color:white;
padding: 0.5rem 1rem;
transition: opacity 150ms ease-out;

}

:hover{
opacity: 80%;

::after{
    opacity:80%;
}

}
`;

export const Info = styled.div`
display:grid; 				
grid-template: 1fr 1fr / 1fr 1fr;
gap: 0px;
height: 100%;
margin-left: .3rem;
margin-top: .5rem;
             
#price {
grid-row: 1 / 3;
grid-column: 2 / 3;
align-self: center;
text-align: right;
margin-right: .2rem;

:after{
    content:'₪';
    font-size: 0.7rem;
    line-height: 120%;
    
}

}
#brand {
grid-row: 1 / 2;
grid-column: 1 / 2;
text-align: left;



}
#model {
   grid-row: 2 / 3;
   grid-column: 1 / 2;
   font-size: .75rem;
   text-align: left;
   font-style: oblique;
   
}

`;


