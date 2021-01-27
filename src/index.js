import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";

import { MailSliceProvider } from "./context/MailSliceContext";

ReactDOM.render(
  <React.StrictMode>
    <MailSliceProvider>
      <App />
    </MailSliceProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

