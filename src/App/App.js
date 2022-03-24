import { BrowserRouter } from "react-router-dom";

import Router from "Router";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import AppContainer from "./AppContainer";
import GlobalStyle from "./GlobalStyle";
import Header from "../components/Header";
import ContentContainer from "../components/ContentContainer";
import Footer from "../components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppContainer>
          <GlobalStyle />
          <Header />
          <ContentContainer>
            <Router />
          </ContentContainer>
          <Footer />
        </AppContainer>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
