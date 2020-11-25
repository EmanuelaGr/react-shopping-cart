import * as React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Store from "./pages/Store";
import { StoreContextProvider } from "./components/ProductsContex";

export default function App() {
  return (
    <Root>
      <StoreContextProvider>
        <Router>
          <Meniu>
            <Ul>
              <Li>
                <svg width={20} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                <Link to="/">Store</Link>
              </Li>
              <Li>
                <svg width={20} fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                </svg>
                <Link to="/cart">Cart</Link>
              </Li>
            </Ul>
          </Meniu>
          <Switch>
            <Route exact path="/" component={Store} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </StoreContextProvider>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Meniu = styled.div`
  display: flex;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: column;
  background: #d0a3d0;
  justify-content: center;
`;
const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Li = styled.li`
  display: flex;
  margin-right: 50px;
  justify-content: center;
  & a {
    margin-left: 10px;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  align-items: center;
`;
