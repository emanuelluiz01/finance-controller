import { useState } from 'react';
import './style.css'

export function Form({listTransactions, setListTransactions}) {

    const [description, setDescription] = useState('')
    const [type, setType] = useState('entradas')
    const [value, setValue] = useState('')

   function FormSubmit(event){
    event.preventDefault()
    const newTransaction = {
      description: description,
      type: type,
      value: parseInt(type === 'entradas' ? value : -value),
    }
    
    setListTransactions([...listTransactions, newTransaction])
  }

  
  return (
    <aside>
      <form onSubmit={(event) => FormSubmit(event)}>
        <label htmlFor="">Descrição</label>
        <input required onChange={(event) => setDescription(event.target.value)} id='desc' type="text" placeholder="Digite aqui sua descrição" />
        <div>

          <label htmlFor="">Valor</label>
          <input required placeholder='1 R$' onChange={(event) => setValue(event.target.value)} id='value' type="number" />
          
          <select required onChange={(event) => setType(event.target.value)} name="" id="select">
            <option required value="entradas">Entradas</option>
            <option required value="despesas">Despesas</option>
          </select>

          <button type='submit' id='new-value'>Inserir Valor</button>
        </div>
      </form>
    </aside>
  );
}
