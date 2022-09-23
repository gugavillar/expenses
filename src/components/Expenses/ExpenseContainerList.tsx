import { ExpenseData } from '../../@types'
import styles from './ExpenseContainerList.module.css'
import ExpenseItem from './ExpenseItem'

interface ExpenseContainerListProps {
  filteredExpenses: Array<ExpenseData>
}

const ExpenseContainerList = ({
  filteredExpenses
}: ExpenseContainerListProps) => {
  if (filteredExpenses?.length) {
    return (
      <ul className={styles['expenses-list']}>
        {filteredExpenses?.map((expense) => (
          <ExpenseItem
            key={expense.id}
            {...expense}
          />
        ))}
      </ul>
    )
  }
  return (
    <h2 className={styles['expenses-list__fallback']}>
      Nenhuma despesa encontrada
    </h2>
  )
}

export default ExpenseContainerList
