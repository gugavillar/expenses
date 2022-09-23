import ChartBar from './ChartBar'
import styles from './ChartContainer.module.css'

interface ChartContainerProps {
  dataPoints: Array<{
    label: string
    value: number
  }>
}

const ChartContainer = ({ dataPoints }: ChartContainerProps) => {
  const dataPointValues = dataPoints?.map((dataPoint) => dataPoint?.value)
  const maxDataPointsValue = Math.max(...dataPointValues)
  return (
    <div className={styles.chart}>
      {dataPoints?.map((data) => (
        <ChartBar
          key={data?.label}
          maxValue={maxDataPointsValue}
          {...data}
        />
      ))}
    </div>
  )
}

export default ChartContainer
