import styles from './ChartBar.module.css'

export interface ChartBarProps {
  maxValue: number
  label: string
  value: number
}

const ChartBar = ({ label, value, maxValue }: ChartBarProps) => {
  let height = '0%'

  if (maxValue > 0) {
    height = `${Math.round((value / maxValue) * 100)}%`
  }

  return (
    <div className={styles['chart-bar']}>
      <div className={styles['chart-bar__inner']}>
        <div
          className={styles['chart-bar__fill']}
          style={{ height }}
        />
      </div>
      <div className={styles['chart-bar__label']}>{label}</div>
    </div>
  )
}

export default ChartBar
