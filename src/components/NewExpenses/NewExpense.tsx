import { useState } from 'react'

import styles from './NewExpense.module.css'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = () => {
  const [toggleForm, setToggleForm] = useState(false)

  const toggleFormHandler = () => setToggleForm((prevState) => !prevState)

  let newExpenseContent = (
    <button
      type="button"
      onClick={toggleFormHandler}
    >
      Add New Expense
    </button>
  )

  if (toggleForm) {
    newExpenseContent = <NewExpenseForm onToggleForm={toggleFormHandler} />
  }

  return <div className={styles['new-expense']}>{newExpenseContent}</div>
}

export default NewExpense
