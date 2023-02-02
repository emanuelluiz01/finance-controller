import './style.css'

export function Total({listTransactions}){

    const total = listTransactions.reduce((a,b) => a + b.value, 0)
    return(
    <div id='total'>
        <div>
            <h3>Valor total:</h3>
            <h3>R$ {total},00</h3>
        </div>
      </div>
    )
}