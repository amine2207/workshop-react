/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React, {Suspense} from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Wellcome = React.lazy(()=> import("./pages/Wellcome") )
const Products = React.lazy(()=> import("./pages/Products"))
const ProductDetails = React.lazy(()=> import("./pages/ProductDetails"))

function App() {
  return (
    <>
      <Header></Header>
      <AppFrame className="App">
        <BrowserRouter basename="/">
          <Suspense fallback={<p>The Content is Loading ...</p>}>
          <Switch>
            <Route
              path="/welcome"
              render={(props) => <Wellcome {...props} />}
            ></Route>
            <Route
              path="/products"
              render={(props) => <Products {...props} />}
            ></Route>
            <Route
              path="/product/:name"
              render={(props) => <ProductDetails {...props} />}
            ></Route>
            <Route exact render={() => <p>Default rendered page!</p>}></Route>
          </Switch>
          </Suspense>
        </BrowserRouter>
      </AppFrame>
    </>
  );
}

const AppFrame = styled.div`
 text-align: center;
 display: flex;
 flex-direction: column;
`; 
export default App;
