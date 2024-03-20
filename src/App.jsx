
import './App.css'
// import ExpenseItem from './assets/component/ExpenseItem'
import Expenses from './component/expenses/Expenses'
import { useState } from 'react'

import ExpensesForm from './component/expense_form/ExpenseForm'
import { nanoid } from 'nanoid'

const Expense = []

// const Expense = [{
//   id: nanoid(),
//   title: "iphone",
//   price: "$555",
//   date: "2023-04-21"
// }, {
//   id: nanoid(),
//   title: "Watch",
//   price: "$55",
//   date: "2023-04-21"
// }, {
//   id: nanoid(),
//   title: "Bag",
//   price: "$5",
//   date: "2023-04-21"
// }
// ]


function App() {

  const [expenseList, setexpenseList] = useState(Expense)

  const addExpense = async (props) => {
    // await fetch("http://localhost:555/expense/create",{
    //   method:"POST",
    //   body: JSON.stringify(props),
    //   headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    // })
    setexpenseList([props, ...expenseList])
    console.log(expenseList)

  }

 
  const deleteExpense = (del) => {
    const arr = expenseList.filter(function (id) {
      return id.id != del;
    })
    console.log(arr)
    setexpenseList(arr)
  }

  return (
    <>
      <ExpensesForm addExpense={addExpense} />

      {/* <div class='new-expense'>
        <form>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Title</label>
              <input type='text'/>
            </div>
            <div className='new-expense__control'>
              <label>Amount</label>
              <input type='text'/>
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input type='date'/>
            </div>
          </div>
          <div className='new-expense__actions'>
            <button>Cancel</button>
            <button>Add Expense</button>

          </div>

        </form>
      </div> */}
      <Expenses expenseList={expenseList} del={deleteExpense} />
    </>
  )



  // const date=new Date() 
  // const obj1={
  //   item:"iphone",
  //   price:"$555"
  // }

  // return (
  //   <>
  //   {/* <div>Hello World</div>    */}
  //   {/* <img src="https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s16000/222.jpg"></img> */}
  //   <ExpenseItem date={date} obj1={obj1}/>
  //   </>
  // )
}

export default App
