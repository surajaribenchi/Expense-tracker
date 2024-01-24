
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import {Auth} from "./page/auth/Index.jsx";
import { Expensetracker } from './page/expense-tracker/Index.jsx';
function App() {
 

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" exact element={<Auth/>}/>
        <Route path="/expense-tracker" element={<Expensetracker/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
