import { useContext, useState } from 'react'

import { ExpenseContext } from '../../context/ExpenseContext'
import Card from '../UserInterface/Card'
import ExpenseChart from './ExpenseChart'
import ExpenseContainerList from './ExpenseContainerList'
import ExpenseFilter from './ExpenseFilter'
import styles from './ExpenseList.module.css'

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext)
  const [yearSelected, setYearSelected] = useState('2021')

  const onFilterChangeHandler = (year: string) => {
    setYearSelected(year)
  }

  const filteredExpenses = expenses.filter(
    (expense) => expense?.date?.getFullYear().toString() === yearSelected
  )

  return (
    <Card className={styles.expenses}>
      <ExpenseFilter
        filterChangeHandler={onFilterChangeHandler}
        yearSelected={yearSelected}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseContainerList filteredExpenses={filteredExpenses} />
    </Card>
  )
}

export default ExpenseList
