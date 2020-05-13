import React from 'react';
import "/home/saru/calculator/src/Input.css";




export default class Input extends React.Component {


  constructor(){
    super();
    this.state ={
      item:"",
      amount: '',
    }
}

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNinja(this.state);

    this.setState({
      item:"",
      amount:""
    })
}

handleChange = (event) => {
    event.preventDefault();
      this.setState({
      [event.target.name] : event.target.value
    }) 
  
 }

 showHandle = (e) => {

  this.props.handleShow(e)
 }
    
    
  render(){
       
     
    return(
      <div className = "display">

        <form onSubmit = {this.handleSubmit}>

          <div className="form">

            <input className="inputField" type = "text" placeholder = "Enter items" required name = "item" value = {this.state.item}  onChange = {this.handleChange}/> <br />

            <input className="inputField" type = "number" placeholder = "Enter amount" required name = "amount" value = {this.state.amount}  onChange = {this.handleChange}/> <br />
          
            <div className="con_cotainer">

              <div className="con_gallery">

                <div className="gallery-item1"><button  className="btn-align">Add</button></div>
             
                <div className="gallery-item2"> <img onClick = {e =>{this.showHandle(e)}} src="https://img.icons8.com/pastel-glyph/50/000000/calculator.png"/></div>

              </div>

            </div>
     
          </div>
         
        </form>

      </div>
    );
  }
}