import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card"
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react"

const Favorites = () => {

    const [aux, setAux] = useState(false)
    const favorites = useSelector (state => state.myFavorites)
    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}> 
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="All">All</option>
            </select>
            {favorites.map (({id, name, status, species, gender, origin, image}) => {
                return (
                <Card
                key = {id}
                id = {id}
                name= {name} 
                status = {status}
                species= {species}
                gender= {gender}
                origin= {origin.name}
                image= {image}
                />
                )
            })}
        </div>
    )
}

export default Favorites