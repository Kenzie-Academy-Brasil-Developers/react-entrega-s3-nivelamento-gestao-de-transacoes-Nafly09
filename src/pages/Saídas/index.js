import { useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar";

function Saídas({ transactions }) {
  const outs = transactions.filter((transaction) => transaction.quantity < 0);
  const history = useHistory();
  const changePage = (url) => {
    return history.push(url);
  };
  return (
    <>
      <NavBar changePage={changePage} />
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

export default Saídas;
