import { ExpenseData } from '../../@types'
import ChartContainer from '../Chart/ChartContainer'

interface ExpenseChartProps {
  expenses: Array<ExpenseData>
}

const generateDataPoints = (expenses: Array<ExpenseData>) =>
  expenses?.reduce(
    (dataPointArray, element) => {
      const expenseMonth = element?.date?.getMonth()
      dataPointArray[expenseMonth] = {
        ...dataPointArray[expenseMonth],
        value: dataPointArray[expenseMonth]?.value + element.amount
      }
      return dataPointArray
    },
    [
      {
        label: 'Jan',
        value: 0
      },
      {
        label: 'Fev',
        value: 0
      },
      {
        label: 'Mar',
        value: 0
      },
      {
        label: 'Abr',
        value: 0
      },
      {
        label: 'Mai',
        value: 0
      },
      {
        label: 'Jun',
        value: 0
      },
      {
        label: 'Jul',
        value: 0
      },
      {
        label: 'Ago',
        value: 0
      },
      {
        label: 'Set',
        value: 0
      },
      {
        label: 'Out',
        value: 0
      },
      {
        label: 'Nov',
        value: 0
      },
      {
        label: 'Dec',
        value: 0
      }
    ]
  )

const ExpenseChart = ({ expenses }: ExpenseChartProps) => {
  const dataPoints = generateDataPoints(expenses)
  return <ChartContainer dataPoints={dataPoints} />
}

export default ExpenseChart
