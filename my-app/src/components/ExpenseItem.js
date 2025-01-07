import React from 'react'
import "./ExpenseItem.css"

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
    const { id, charge, amount } = expense;
    return (
        <li className='item'>
            <div className='info'>
                <span className='expense'>{charge}</span>
                <span className='amount'>{amount}원</span>
            </div>
            <div>
                <button className='edit-btn'
                    onClick={()=>handleEdit(expense.id)}>수정</button>
                <button className='clear-btn' onClick={() => handleDelete(id)}>삭제</button>
            </div>
        </li>
    )
}

export default ExpenseItem

// import React, { Component } from 'react';
// import './ExpenseItem.css';
// import { MdEdit } from 'react-icons/md';

// class ExpenseItem extends Component {
//   render() {
//     return (
//       <li className='item'>
//         <div className='info'>
//           <span className='expense'>학원등록</span>
//           <span className='amount'>1000원</span>
//         </div>
//         <div>
//           <button className='edit-btn'>
//             <MdEdit size="1em" color="currentColor" />
//           </button>
//           <button className='clear-btn'>삭제</button>
//         </div>
//       </li>
//     );
//   }
// }

// export default ExpenseItem;