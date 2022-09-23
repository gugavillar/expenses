import { memo } from 'react'

import { ExpenseData } from '../../@types'
import { formatAmount } from '../../helpers/formatters'
import Card from '../UserInterface/Card'
import ExpenseDate from './ExpenseDate'
import styles from './ExpenseItem.module.css'

type ExpenseItemProps = Omit<ExpenseData, 'id'>

const ExpenseItem = ({ title, amount, date }: ExpenseItemProps) => {
  const formattedValue = formatAmount(amount)

  return (
    <li>
      <Card className={styles['expense-item']}>
        <ExpenseDate date={date} />
        <div className={styles['expense-item__description']}>
          <h2>{title}</h2>
          <div className={styles['expense-item__price']}>{formattedValue}</div>
        </div>
      </Card>
    </li>
  )
}

export default memo(ExpenseItem)
