
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {

  return (
<div className='grid grid-cols-3'>
  <RevenueCard title={"Amount Pending"} amount={494949}></RevenueCard>
</div>
  )
}

export default App
