import React, { Component } from 'react';
import './css/cards.css';
import  heartsmall  from './imagens/heart-small.gif';
import  clubsmall  from './imagens/clubs-small.gif';
import  spadessmall  from './imagens/spades-small.gif';
import  diamontsmall  from './imagens/diamont-small.gif';

class Cards extends Component {
    state = { 
        type: {},
        red: false,
        value: 'A'
     }


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const type = this.props.type.toUpperCase();

        switch(type) {
            case 'HEARTS':
                this.setState({ type: heartsmall, red: true });                
            break;
            case 'SPADES':
                this.setState({ type: spadessmall });
            break;                    
            case 'DIAMONDS':
                this.setState({ type: diamontsmall, red: true });                    
            break;        
            case 'CLUBS':
                this.setState({ type: clubsmall });                    
            break;

            default:
                this.setState({ type: heartsmall });
            break;
        }

        const value = parseInt(this.props.value);
        if(value == 1 || value > 10) {            
            switch(value) {
                case 1:
                    this.setState({ value: 'A' });
                break;
                case 11:
                    this.setState({ value: 'J' });
                break;
                case 12:
                    this.setState({ value: 'Q' });
                break;
                case 13:
                    this.setState({ value: 'K' });
                break;
                default:
                    this.setState({ value: '?' });
                break;
            }
        } else {
            this.setState({value});
        }

    }

    renderSimbol() {
        let simbol = [];
        const value = parseInt(this.props.value);

        if(value > 10) {            

        } else {
            for(var i = 0; i < value; i++) {
                simbol.push( <img src={this.state.type} className="card-iconsm" alt="H"/> );
            }
        }        

        return simbol;
    }


    renderRed() {
        if(this.state.red) {
            return ('card-value card-red');
        } else {
            return ('card-value');
        }
    }

    //card-value
    render() { 
        return ( 
            <div className="card-body">
                <div className="card-number card-top">
                    <h3 className={this.renderRed()}>{this.state.value}</h3>
                    <img src={this.state.type} className="card-iconsm" alt="H"/>
                </div> 

                <div className="card-center">   
                    <div className="card-container">
                    {
                        this.renderSimbol().map((simbol) =>
                            simbol
                        )
                    }
                    </div>                        
                </div>
                <div className="card-number card-bottom">
                    <h3 className={this.renderRed()}>{this.state.value}</h3>
                    <img src={this.state.type} className="card-iconsm" alt="H"/>
                </div>                
            </div>
         );
    }
}
 
export default Cards;