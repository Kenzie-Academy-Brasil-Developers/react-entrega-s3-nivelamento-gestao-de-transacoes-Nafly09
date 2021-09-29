import { Route, Switch } from "react-router";
import Form from "../pages/Formulário";
import AllTransactions from "../pages/Transações";

export const Routes = ({ transactions, setTransactions }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Form setTransactions={setTransactions} />
      </Route>
      <Route path="/transactions">
        <AllTransactions transactions={transactions} />
      </Route>
    </Switch>
  );
};
