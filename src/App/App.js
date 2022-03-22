import { BrowserRouter } from "react-router-dom";

import Router from "Router";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Router />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
