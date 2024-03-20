import { nanoid } from 'nanoid'
import './ExpenseForm.css'
import { useState } from 'react'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ExpenForm = (props) => {

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [price, setPrice] = useState('')
  const { addExpense } = props

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
    console.log(event.target.value);

  }
  const handleAmountChange = (event) => {
    setPrice(event.target.value)
    // console.log(event.target.value);

  }
  const handleDateChange = (event) => {
    setDate(event.target.value)
    // console.log(event.target.value);
    // console.log("total info",title)

  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (title === '') {
      notify("invalid title!!!")
      return
    }
    if (price === ''||isNaN(Number(price))) {
      notify("invalid amount!!!")
      return
    }
    if (date === '') {
      notify("invalid date!!!")
      return
    }
    const obj = {
      id: nanoid(),
      title: title,
      price: Number(price),
      date: date,

    }
    successnotify()
    addExpense(obj)
    // console.log(obj,addExpense(obj));
  }
  const notify = (pass) => {
    toast.error(pass, {
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

  const successnotify = () => {
    toast.success(title + ' Added Successfully', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  // const notify=()=>console.log("notify")
  const clear = (event) => {
    setTitle('')
    setPrice('')
    setDate('')
  }


  return (<>

    <div className='new-expense'>
      <form onSubmit={handleSubmit} >
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={handleTitleChange} />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input type='text' onChange={handleAmountChange} />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' onChange={handleDateChange} />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button type='reset' onClick={clear}>Clear</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
      <ToastContainer />
    </div></>)
}
export default ExpenForm;