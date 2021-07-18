import React from  'react';

//Components
import Item from '../Item/Index';
//Data
import { items } from '../Item/Items';


const Shop =()=>{

    return(
        <div>
            {items.map((item)=>(
                <Item key={item.id} brand={item.brand}
                model={item.model}
                price={item.price}

                
                img={item.img}/>
            ))}
        </div>
    )
}

export default Shop;