import { Card } from "../../Components/Card";
import { Form } from "../../Components/Form";
import { Header } from "../../Components/Header";
import { List } from "../../Components/List";
import { Total } from "../../Components/Total";
import './style.css'


export function HomePage({ setIsLogin, listTransactions, setListTransactions, removeCard, setFilter }) {
  return (
    <div className="container">
      <Header setIsLogin={setIsLogin} />
      <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
      <Total listTransactions={listTransactions}/>
      <List listTransactions={listTransactions} removeCard={removeCard} setFilter={setFilter}/>
    </div>
  );
}
