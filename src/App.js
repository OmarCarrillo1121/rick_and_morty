import style from './App.module.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from "react";
import axios from 'axios';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
   //! HOOK useState
   const [characters, setCharacters] = useState ([])

   //! EVENT HANDLER onSearch
   function onSearch(id) {
      // if (!characters.find((char) => char.id === id)) {
      //    return alert ("Personaje repetido")
      // }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   //! FN onClose
   const onClose = (id) => {
      setCharacters (characters.filter((char) => char.id !== id))
   }

   const { pathname } = useLocation()

   return (
      <div className="App">
         {/* <div className={style.searchBar}>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         </div>
         <hr /> */}
         { pathname !== "/" ? <Nav onSearch={onSearch} /> : null }
         <Routes>
            <Route path="/" element={<Form/>} />
            <Route 
            path="/home" 
            element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/about" element={<About/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/detail/:id" element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;

//RUTAS
// Nav debe que aparecer en todas las rutas.
// Cards debe aparecer solo en la ruta /home.
// About debe aparecer solo en la ruta /about.
// Detail debe aparecer solo en la ruta /detail/:id.
