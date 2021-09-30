import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { Container } from "./styles";

function Entradas({ transactions }) {
  const ins = transactions.filter((transaction) => transaction.quantity > 0);
  const history = useHistory();
  const changePage = (url) => {
    return history.push(url);
  };
  return (
    <>
      <NavBar changePage={changePage} />
      <Container>
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
        <h3>Quantidade de itens total de entrada: {ins.length}</h3>
      </Container>
    </>
  );
}

export default Entradas;
