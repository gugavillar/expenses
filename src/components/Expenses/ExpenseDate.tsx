import { ExpenseData } from '../../@types'
import styles from './ExpenseDate.module.css'

type ExpenseDateProps = Pick<ExpenseData, 'date'>

const ExpenseDate = ({ date }: ExpenseDateProps) => {
  const month = date?.toLocaleString('pt-BR', { month: 'long' })
  const day = date?.toLocaleString('pt-BR', { day: '2-digit' })
  const year = date?.getFullYear()
  return (
    <div className={styles['expense-date']}>
      <div className={styles['expense-date__month']}>{month}</div>
      <div className={styles['expense-date__year']}>{year}</div>
      <div className={styles['expense-date__day']}>{day}</div>
    </div>
  )
}

export default ExpenseDate
