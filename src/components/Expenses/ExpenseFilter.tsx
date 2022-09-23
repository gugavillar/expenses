import { ChangeEvent } from 'react'

import styles from './ExpenseFilter.module.css'

interface ExpenseFilterProps {
  filterChangeHandler: (year: string) => void
  yearSelected: string
}

const ExpenseFilter = ({
  filterChangeHandler,
  yearSelected
}: ExpenseFilterProps) => {
  const handleSelectYear = (event: ChangeEvent<HTMLSelectElement>) => {
    filterChangeHandler(event.target.value)
  }

  return (
    <div className={styles['expenses-filter']}>
      <div className={styles['expenses-filter__control']}>
        <label>Filtro por ano</label>
        <select
          value={yearSelected}
          onChange={handleSelectYear}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  )
}

export default ExpenseFilter
