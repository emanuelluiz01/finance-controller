import './App.css';
import { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { Header } from './Components/Header';
import { HomePage } from './pages/HomePage';


function App() {
  
  const [isLogin, setIsLogin] = useState(false)

  const [listTransactions, setListTransactions] = useState([])

    function removeCard(nameDesc){
    const listRefreshed = listTransactions.filter(element => element.description !== nameDesc )
    setListTransactions(listRefreshed)
  }

  const [filter, setFilter] = useState('todos')

  const btnFilter = listTransactions.filter((ele) => (filter === "todos" ? true : ele.type === filter))
  

  return (
    <div className="App">
    
    {isLogin ? (
      <HomePage setIsLogin={setIsLogin} listTransactions={btnFilter} setListTransactions={setListTransactions} removeCard={removeCard} setFilter={setFilter}/>
      
    ) : (
      <LandingPage setIsLogin={setIsLogin}/>
    )}

  </div>
  );
}

export default App;
