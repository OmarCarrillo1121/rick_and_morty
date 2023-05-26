import { Link } from "react-router-dom";
import style from "../Card/Card.module.css"
import { connect } from "react-redux";
import { addFav, removeFav} from "../../redux/actions"
import { useState, useEffect } from "react";

function Card({id, name, species, gender, image, status, origin, onClose, addFav, removeFav, myFavorites}) {

const [isFav, setIsFav] = useState(false) 

const handleFavorite = () => {
   if (isFav) {
      setIsFav (false)
      removeFav(id)
   } else {
      setIsFav (true)
      addFav ({
         id, name, species, gender, image, status, origin, onClose, addFav, removeFav,
      })
   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);
   // otr forma es con destructuring, guardar directamente en variables las propiedades
   // que nos mandan en el obj props Card({name,species,gender,image,onClose})
return (
   <div className={style.container}>
         { isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <button 
            className={style.closeButton} 
            onClick={()=> onClose (id)}>
            X
         </button>
         {/*Si usamos el destructuring no hace falta poner props.onClose, colocamos directo el nombre de la var onClose*/}
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <img src={image} alt='' />

         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <h3>Key: {id}</h3>
         <h3>Id: {id}</h3>
      </div>
   );
}


const mapDispatchToProps = (dispatch)=> {
   return {
      addFav: (character)=> {
         dispatch(addFav(character))
      },
      removeFav: (id)=> {
         dispatch(removeFav(id))
      }
   }
}

const mapStateToProps = (state)=> {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps , mapDispatchToProps)(Card)