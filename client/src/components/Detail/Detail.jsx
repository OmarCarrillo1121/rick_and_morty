import axios from 'axios';
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const Detail = ()=> {

const {id} = useParams();

const [character, setCharacter] = useState({})
    
useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(({ data }) => {
        if (data.name) {
            setCharacter(data);
        } else {
            window.alert('No hay personajes con ese ID');
        }
    });
    return setCharacter({});
}, [id]);

return(
    <div>
        {character.name ? (
            <>
            <h3>{character.name}</h3>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt="img" />
            </>
            ) : (
            <h3> Cargando...</h3>
            )
        }
    </div>
    )
}

export default Detail