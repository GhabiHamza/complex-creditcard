import React, { Component } from 'react';
import Puce from './ID-Puce.jpg'
import Image from './images.jpg'



const renderNumber = number=>{
    number=number.toString()
    let resultStr=''
    for (let i=0;i<number.length;i+=4){
        resultStr+=number.slice(i,i+4)+''
    }
    return resultStr.trim()
}

class Credit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'FOULEN',
            Year:'YY' ,
            Month:'MM',
            Number:'13581xxxxxxxxxxx'

          }
          this.nameChange=this.nameChange.bind(this)
          this.YearChange=this.YearChange.bind(this)
          this.MonthChange=this.MonthChange.bind(this)
          this.NumberChange=this.NumberChange.bind(this)

        }
    nameChange(n){
        this.setState({
            name:n.target.value
        });
    
    }
    YearChange(y){
        this.setState({
            Year:y.target.value
        });
    }
    MonthChange(m){
        this.setState({
            Month:m.target.value
        });
    }
    NumberChange(N){
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
  <h3 className="num-card">{renderNumber(this.state.Number)}</h3>
  </div>
  <div className="footer-card">
    <div className="main-footer">
  <h4 className="title">{this.state.name.toUpperCase()}</h4>
  </div>
  <h6 className="valid">{this.state.Month}/{this.state.Year}</h6>
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
    <input type="text" maxLength="2" onChange={this.MonthChange}/>
    </div>
    /
    <div className='date-year'>
    <input type="text" maxLength="2" onChange={this.YearChange}/>
    </div>
    </div>
</div>



</div>
        
        
        
        
        
        
        
</div>
         );
    }
}
 
export default Credit;