import { createContext, ReactNode, useState } from 'react'

import { Expense, ExpenseData } from '../@types'

interface ExpenseContextProviderProps {
  children: ReactNode
}

interface ExpenseContextInterface {
  expenses: Array<ExpenseData>
  saveExpenseHandler: (expense: Expense) => void
}

const INITIAL_EXPENSES: Array<ExpenseData> = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12)
  }
]

export const ExpenseContext = createContext({} as ExpenseContextInterface)

const ExpenseContextProvider = ({ children }: ExpenseContextProviderProps) => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const saveExpenseHandler = (newExpense: Expense) => {
    const expenseWithId = {
      ...newExpense,
      amount: Number(newExpense?.amount),
      date: new Date(newExpense?.date),
      id: Math.random().toString()
    }
    setExpenses((prevState) => [expenseWithId, ...prevState])
  }

  return (
    <ExpenseContext.Provider value={{ expenses, saveExpenseHandler }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseContextProvider
