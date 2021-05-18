import React from "react";
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from "./styles/globalStyles";

import Routes from './routes';


const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Routes />
  </BrowserRouter>
);

export default App;
