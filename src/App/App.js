import { BrowserRouter } from "react-router-dom";

import Router from "Router";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Header from "../components/Header";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <GlobalStyle />
        <Header />
        <Router />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
