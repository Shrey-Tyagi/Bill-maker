import React from 'react';


const AmountCalculation = (props) => {
     
    let sum = 0;

   props.list.forEach(element => {
        
       sum = sum + parseFloat(element.amount);
    });
    return (
         
        <div className="item">
             
        <table>
           <tfoot>
            <tr>
               <td>Total:</td>
               <td>{sum}</td>
           </tr>

            </tfoot>
         
        </table>
       </div>
    );


}

export default AmountCalculation;