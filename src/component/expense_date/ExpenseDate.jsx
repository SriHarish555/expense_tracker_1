import './ExpenseDate.css'

const Expen = (props) => {

    // console.log(props)    
    let { date } = props;
    date=new Date(date);
    // console.log(date)

    // console.log(date.date.getDate()) 
    const month = date.toLocaleDateString('US-en', { month: 'long' })
    const cudate = date.getDate()
    const year = date.getFullYear();
    // console.log(month)

    return (<>

        {/* date and time */}
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__date'>{cudate}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    </>)
}

export default Expen;