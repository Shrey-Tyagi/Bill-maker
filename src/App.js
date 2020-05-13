import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";
import Input from "./components/Input";
import Modal from "./components/Modal";
import List from './components/List'
import AmountCalculation from './components/AmountCalculation';
import ItemInput from './components/ItemInput';

class App extends Component {
    constructor(){
        super();      

        this.state = {
            items: "",
            result: "",
            showModal : false
        }

        this.state = {
            list:[]
        }
    }
  
    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            if(this.state.result === undefined){

                this.setState({
                    result: button
                })
                   
            }

            else {

                this.setState({
                    result:this.state.result+button
                })
            }
           
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+');
        }

        else {
            checkResult = this.state.result;
        }
           
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })

        } 
        catch (e) {
            this.setState({
                result: "error"
            });

        }
   };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    //rendering portal

    handleShow = () => {

        this.setState({showModal : true});

    }
    
    handleHide = () => {

        this.setState({showModal : false});
    }
    
    handleChange = (item) => {
    
        this.setState ({

            item:item

        })

        let listItem = { item,amount:this.state.result}

        this.addItemfromCalci(listItem);      

    }

    
    addItemfromCalci = (listItem) => {

        listItem.id = Math.random();
        let listCopy = [...this.state.list,listItem]
        this.setState({
            list:listCopy
        })
          console.log(this.state.list)
    }


    addNinja = (ninja) => {
       
        if(ninja.item && ninja.amount){
            ninja.id= Math.random();
            let listCopy = [...this.state.list,ninja]
            this.setState({
                list:listCopy
            })
        }

    }

    deleteItem = (id) => {
        
        let list = this.state.list.filter(item => {
            return item.id !==id
        })
        this.setState({
            list : list
        })
    }


    render() {

        const modal = this.state.showModal ? (
            <Modal>
                 <div className="calculator-body">
                 <ItemInput handleChange = {this.handleChange} item={this.state.item} result={this.state.result} />
                 <ResultComponent result={this.state.result}/>
                 <KeyPadComponent onClick={this.onClick}/>

                 <button id="center-align" onClick = {this.handleHide}>close</button>                
                 </div>
               
            </Modal>
        ) :null;        
     
        return (
            <div>
                    
                     <div className="header">
                         <div className="title">Billing App</div>
                    </div>
                    <Input addNinja = {this.addNinja} handleShow={this.handleShow}/>
                    <List list = {this.state.list} deleteItem= {this.deleteItem} />
                    <AmountCalculation list = {this.state.list}/>
                    {modal}


            </div>
        );
    }
}

export default App;

