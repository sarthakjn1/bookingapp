import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { productInputs, userInputs } from "./formSource"
import "./styles/dark.scss"
import { DarkModeContext } from "./context/darkModeContext"
import { AuthContext } from "./context/AuthContext"
import { Navigate } from "react-router-dom";


function App() {

  const {darkMode} = useContext(DarkModeContext)

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <div className={darkMode ? "app dark": "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />}/>
            <Route index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
              }/>     
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userid" element={<Single />} />
              <Route path="new" element={<New input={userInputs} title="Add New User"/>} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productid" element={<Single />} />
              <Route path="new" element={<New input={productInputs} title="Add New Product"/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
