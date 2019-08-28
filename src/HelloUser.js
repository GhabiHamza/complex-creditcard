import React, { Component } from 'react';
import Puce from './ID-Puce.jpg'
import Image from './images.jpg'



class Credit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'FOULEN',
            ValidThru:'MM/YY',
            Number:'13581xxxxxxxxxxx'

          }
       
        }
    nameChange=(n)=>{
        this.setState({
            name:n.target.value
        });
    
    }
  
    ValidThruChange=(m)=>{
        this.setState({
            ValidThru:m.target.value
        });
    }
    NumberChange=(N)=>{
        
        this.setState({
            Number:N.target.value
        
        });
    }
     
    render() { 
        return (
         <div>
            <div className='Credit'>
              <div className="container">
  <div>
  <h3 className="h3-card">Company name</h3>
  </div>
  <div>
  <img  className="logo-puce" src={Puce} alt="puce"/> 
  </div>
  <div>
  <h3 className="num-card">{this.state.Number.slice(0,4)+' '+this.state.Number.slice(4,8 )+' '+this.state.Number.slice(8,12 )+' '+this.state.Number.slice(12,16 )+' '}</h3>
  </div>
  <div className="footer-card">
    <div className="main-footer">
  <h4 className="title">{this.state.name.toUpperCase()}</h4>
  </div>
  <h6 className="valid">{this.state.ValidThru.slice(0,2)+'/'+this.state.ValidThru.slice(2,4)}</h6>
  <img  className="logo" src={Image} alt="logo"/>
  </div>
</div>
<div className='form'>
    <div>
    <input type="text" maxLength="16" onChange={this.NumberChange}/>
    </div>
    <div>
    <input type="text" maxLength="20" onChange={this.nameChange}/>
    </div>
    <div className='form-validthru'>
    <div>
    <input type="text" maxLength="5" onChange={this.ValidThruChange}/>
    </div>
   
    </div>
</div>



</div>
        
        
        
        
        
        
        
</div>
         );
    }
}
 
export default Credit;