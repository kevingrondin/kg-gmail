import { Routes, Route, HashRouter  } from 'react-router-dom';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SendMail from "./components/SendMail";

import Mail from "./pages/Mail";
import Emaillist from './pages/Emaillist';

import { useMailSlice } from "./context/MailSliceContext";

import "./App.css";

const App = () => {
  const {isOpen} = useMailSlice();

  return(
      <>
        <HashRouter>
          <div className="app">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Routes>
                <Route path="/mail" element={<Mail />} />
                <Route path="/" element={<Emaillist />} />
              </Routes>
            </div>
            {isOpen && <SendMail />}
          </div>
        </HashRouter>
      </>
  );
}

export default App;
