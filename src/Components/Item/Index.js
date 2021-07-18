import React from  'react';
import { Container, Info  } from './Item.styles';



const Item =({brand,model,price,img})=>{
    

  

    return(
        <Container>
            
        
      
            <img src={img} width="200" alt='minister-d'
            
        >
            </img>
            <Info>
                <div id={`brand`}>{brand}</div>
                <div id={`model`}>{model}</div>
                <div id={`price`}>{price}</div>
            </Info>
            
        </Container>
    )
}

export default Item;