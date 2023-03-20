import { Route, HashRouter, BrowserRouter, Routes } from "react-router-dom";

import "./App.css";
import "./styles/dashboard.css";

import Home from "./pages/Home";
import Send from "./pages/Mailer";
import Mailer from "./pages/Mailer";
import Groups from "./pages/Groups";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./auth/PrivateRoute";
import Logout from "./auth/Logout";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/mailer' element={<Mailer />} />
            <Route path='/groups' element={<Groups />} />
            <Route path='/logout' element={<Logout />} />
          </Route>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
