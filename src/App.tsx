import ExpenseList from './components/Expenses/ExpenseList'
import NewExpense from './components/NewExpenses/NewExpense'
import ExpenseContextProvider from './context/ExpenseContext'

function App() {
  return (
    <div>
      <ExpenseContextProvider>
        <NewExpense />
        <ExpenseList />
      </ExpenseContextProvider>
    </div>
  )
}

export default App
