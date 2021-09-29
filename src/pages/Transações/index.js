function AllTransactions({ transactions }) {
  const ins = transactions.filter((transaction) => transaction.quantity > 0);
  const outs = transactions.filter((transaction) => transaction.quantity < 0);
  return (
    <>
      <h1>Entradas</h1>
      <ul>
        {ins.map((products, index) => {
          return (
            <li key={index}>
              Nome: {products.name}, qtd: {products.quantity}, valor: R$
              {products.price}
            </li>
          );
        })}
      </ul>
      <h1>Saídas</h1>
      <ul>
        {outs.map((products, index) => {
          return (
            <li key={index}>
              Nome: {products.name}, qtd: {products.quantity}, valor: R$
              {products.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AllTransactions;
