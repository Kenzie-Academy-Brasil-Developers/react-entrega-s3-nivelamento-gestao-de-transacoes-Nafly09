import { Route, Switch } from "react-router";
import Form from "../pages/Formulário";
import AllTransactions from "../pages/Transações";
import Saídas from "../pages/Saídas";
import Entradas from "../pages/Entradas";

export const Routes = ({ transactions, setTransactions }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Form transactions={transactions} setTransactions={setTransactions} />
      </Route>
      <Route path="/transactions">
        <AllTransactions transactions={transactions} />
      </Route>
      <Route path="/outs">
        <Saídas transactions={transactions} />
      </Route>
      <Route path="/ins">
        <Entradas transactions={transactions} />
      </Route>
    </Switch>
  );
};
