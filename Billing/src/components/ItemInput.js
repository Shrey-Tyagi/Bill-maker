import React from 'react';

class ItemInput extends React.Component {

    state = {
        item: ''
  }
  changeHandler=(e)=> {
     
      this.setState ({

          item:e.target.value
      })
      
      //this.props.handleChange(this.state.item);   
  }
   
  handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.item && this.props.result){

        this.props.handleChange(this.state.item);
        this.setState({
            item:""
        })

        }
    }

    render(){

        return(
            <div className="input_container">
                <div className="con_gallery">
                    <input className="input_grid1 calciInput" required
                    type = "text" 
                    placeholder = "Enter items" 
                    name = "item" 
                    value={this.state.item}  
                    onChange={this.changeHandler}/>
                    <img className="input_grid2" onClick={(e)=>{this.handleSubmit(e)}} src="https://img.icons8.com/material/64/000000/plus--v1.png"/>
                </div>
            </div>
        );

    }
   

}

export default ItemInput;