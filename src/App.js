import React, {useContext} from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import MotocicletasPage from "./pages/MotocicletasPage";
import Footer from "./components/Footer";
import UserContext from "./context/UserContext";
import {MotosProvider} from "./context/MotosContext";


function App() {
    const {user} = useContext(UserContext)

  return (
      <MotosProvider>
        <div className="App">
            <NavBar/>
            {user===null ? <Login /> : <MotocicletasPage />}
            <Footer />
        </div>
      </MotosProvider>
  );
}


export default App;
