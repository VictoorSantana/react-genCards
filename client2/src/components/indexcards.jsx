import React, { Component } from 'react';
import Cards from './cards';

class IndexCards extends Component {
    state = { };

    render() { 
        return ( 
            <div>
                <div style={{margin: '5px', display: 'inline-block'}}>
                    <Cards value="4" type="HEARTS">Add</Cards>    
                </div>         
                <div style={{margin: '5px', display: 'inline-block'}}>
                    <Cards value="7" type="SPADES">Add</Cards>    
                </div>  
                <div style={{margin: '5px', display: 'inline-block'}}>
                    <Cards value="9" type="DIAMONDS">Add</Cards>    
                </div>                                           
                <div style={{margin: '5px', display: 'inline-block'}}>
                    <Cards value="1" type="CLUBS">Add</Cards>    
                </div>  
            </div>            
         );
    }
}
 
export default IndexCards;