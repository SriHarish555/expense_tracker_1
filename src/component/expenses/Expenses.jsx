import ExpenseItem from '../expense_item/ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {

  const { expenseList, del } = props

  // const obj=expenseList
  console.log(expenseList)



  // const obj = [{
  //   title: expenseList.title,
  //   price: expenseList.price,
  //   date: new Date()
  // }]

  return (
    <>
      <div className='expenses'>
        {
          expenseList.map((item) =>
            <ExpenseItem key={item.id} date={item.date} title={item.title} price={item.price} id={item.id} del={del} />

          )}
      </div>
    </>
  )

}



export default Expenses;