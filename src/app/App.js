import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import './App.css';

function App({ store, persistor, basename }) {
  console.log(basename);
  return (
    /* Provide Redux store */
    <Provider store={store}>
      {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
      <PersistGate persistor={persistor}>
        <BrowserRouter basename={basename}>
          <Routes /> 
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
