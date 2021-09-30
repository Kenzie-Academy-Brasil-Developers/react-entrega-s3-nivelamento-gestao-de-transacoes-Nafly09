import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import NavBar from "../../components/NavBar";

function Saídas({ transactions }) {
  const outs = transactions.filter((transaction) => transaction.quantity < 0);
  const getTotalValue = outs
    .map((transactions) => transactions.price)
    .reduce((a, b) => a + b, 0);
  const history = useHistory();
  const changePage = (url) => {
    return history.push(url);
  };
  return (
    <>
      <NavBar changePage={changePage} />
      <Container>
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
        <h3>Valor total de saída: R${getTotalValue.toFixed(2)}</h3>
        <h3>Quantidade de itens total de saída: {outs.length}</h3>
      </Container>
    </>
  );
}

export default Saídas;
