import Expen from '../expense_date/ExpenseDate'
import './ExpenseItem.css'

import { useState } from 'react'

import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ExpenseItem = (props) => {

    const { title, price, date, del, id } = props
    


    // const {date,title,price}=props
    // return (           
    // <div className="expense-item__description">
    //     <Expen date={props}/>

    // {/* <h2>{date.getTime()}</h2> */}
    // <h2 id='item_name'>{title}</h2>
    // <div className="expense-item__price">{price}</div>
    // </div>
    // )

    const [customtitle, settitle] = useState(title);


    const notify = (title) => {
        toast.info(title+' Deleted', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    

    const onClickHandler = () => {
        // settitle("Updated")        
        del(id)
        notify(title)
    
    }

    return (
        <div className="expense-item">
            <Expen date={date} />
            <div className="expense-item__description">
                <h2 id='item_name'>{customtitle}</h2>
                <div className="expense-item__price">₹ {price} /-</div>
            </div>

            <button className='expense-item_delete' type='button' onClick={onClickHandler}>Delete</button>

        </div>
    )

}


export default ExpenseItem;