import Cards from "./components/Cards/Cards";
import style from "./App.module.css";
import Form from "./components/Form/Form";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Route, Routes, useLocation } from "react-router-dom";
import Error from "./components/Error/Error";
import Favorites from "./components/Favorites/Favorites";

const email = "1";
const password = "1";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  
  const login = (userData) => {
    if (userData.password === password && userData.email === email) {
      setAccess(true);
      navigate("/home");
    }
  };
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter(
      (character) => character.id !== Number(id)
    );
    setCharacters(charactersFilter);
  };

  return (
    <div>
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path={"/detail/:id"} element={<Detail />} />
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/home"
          element={
            <Cards
              classname={style.card}
              characters={characters}
              onClose={onClose}
            />
          }
        />
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
