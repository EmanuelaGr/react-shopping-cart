import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import NotFound from './pages/NotFound';
import Cart from "./pages/Cart";
import Store from './pages/Store';
import { ProductsContextProvider } from './components/ProductsContex';

export default  function App() {
  return (
    <Root>
    <ProductsContextProvider>
      <Router>
          <Switch>
            <Route exact path="/" component={Store}/>
            <Route path="/cart" component={Cart} />
            <Route path="*" component={NotFound} />
          </Switch>
      </Router>
    </ProductsContextProvider>
  </Root>

  );
}


const Root = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
`;

