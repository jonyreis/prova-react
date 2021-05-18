import React from "react";
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from "./styles/globalStyles";

import Routes from './routes';
import Footer from "./components/Footer";


const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Routes />
    <Footer />
  </BrowserRouter>
);

export default App;
