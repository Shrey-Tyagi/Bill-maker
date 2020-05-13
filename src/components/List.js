import React from 'react';

const List = ({list,deleteItem}) =>{

    return(
        
        <div>

           {list.map((elemI) => (
                
        <div className="item" key={elemI.id}>
  
        <table>
            <tbody>
            <tr>
               <td>{elemI.item}</td>
               <td>{elemI.amount}</td>
               <td onClick = {() => {deleteItem(elemI.id)}}>
               <img src="https://img.icons8.com/material/30/000000/trash--v1.png"/>
               </td>
           </tr>

            </tbody>
         
        </table>

        </div>
                 )
             
           )}

        </div>
         
      
  
    );

}

export default List;