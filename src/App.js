import GlobalStyles from "./styles/global";
import { useState } from "react";
import { Routes } from "./Routes";

function App() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  return (
    <>
      <GlobalStyles />
      <Routes transactions={transactions} setTransactions={setTransactions} />
    </>
  );
}

export default App;
