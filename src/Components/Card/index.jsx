import './style.css';

export function Card( {listTransactions, removeCard} ){
    if(listTransactions.length){
       return listTransactions.map((ele, index) => {
            return(
                <li key={index}>
                    <div>
                       <h3>{ele.description}</h3>
                        <p> R$ {ele.value},00</p>
                        <button onClick={() => removeCard(ele.description)} className='trash'></button>
                    </div>
                       <span>{ele.type}</span> 
                </li>
            )
        })
    
    } else {
       return <h2>Sem transação no momento</h2>
    }
}
    
 