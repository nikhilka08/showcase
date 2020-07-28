import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Dashboard from "./pages/Dashboard/Dashboard";
import Landing from "./pages/Landing/Landing";
import { store, persistor } from "./reduxCore/redux/store";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
