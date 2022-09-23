import { ChangeEvent, FormEvent, useContext, useState } from 'react'

import { Expense } from '../../@types'
import { ExpenseContext } from '../../context/ExpenseContext'
import styles from './NewExpenseForm.module.css'

const initialExpense: Expense = {
  title: '',
  amount: '',
  date: ''
}

interface NewExpenseFormProps {
  onToggleForm: () => void
}

const NewExpenseForm = ({ onToggleForm }: NewExpenseFormProps) => {
  const [userInput, setUserInput] = useState(initialExpense)

  const { saveExpenseHandler } = useContext(ExpenseContext)

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event?.target?.name
    const value = event?.target?.value
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const submitHandler = (event: FormEvent) => {
    event?.preventDefault()
    saveExpenseHandler(userInput)
    setUserInput(initialExpense)
    onToggleForm()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles['new-expense__controls']}>
        <div className={styles['new-expense__control']}>
          <label htmlFor="title">Título</label>
          <input
            id="title"
            type="text"
            name="title"
            onChange={inputChangeHandler}
            value={userInput?.title}
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label htmlFor="amount">Valor</label>
          <input
            id="amount"
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            onChange={inputChangeHandler}
            value={userInput?.amount}
          />
        </div>
        <div className={styles['new-expense__control']}>
          <label htmlFor="date">Data</label>
          <input
            id="date"
            type="date"
            name="date"
            onChange={inputChangeHandler}
            value={userInput?.date}
          />
        </div>
      </div>
      <div className={styles['new-expense__actions']}>
        <button
          type="button"
          onClick={onToggleForm}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default NewExpenseForm
