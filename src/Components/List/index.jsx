import { useState } from 'react';
import { Card } from '../Card';
import './style.css'

export function List( {listTransactions, setFilter, removeCard} ) {


  return (
    <div id="list">
        <div className='navList'>
            <h3>Resumo financeiro</h3>
            
            <div>
                <button value='todos' onClick={()=> setFilter('todos')}>Todos</button>
                <button value='entradas' onClick={()=> setFilter('entradas')}>Entradas</button>
                <button value='despesas' onClick={()=> setFilter('despesas')}>Despesas</button>
            </div>
        </div>
      <ul>
        <Card listTransactions={listTransactions} removeCard={removeCard}/>
      </ul>
    </div>
  );
}
