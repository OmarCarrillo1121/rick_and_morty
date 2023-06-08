import Card from '../Card/Card';
import { CardsContainer } from "./styledComponents";

export default function Cards (props) {
   //Se puede hacer el desctructuring directo // Cards ({characters})
   const {characters} = props
   return (
      <CardsContainer>
         {characters.map ((character) => {
         // podemos hacer el destructuring directo ({name, species, gender, image})
            // podemos guardar la fn onClose en una var para no redefinirla dentro de <Card>
            // const onClose = ()=> window.alert("Emulamos que se cierra la card")
            return (
               <Card
               id = {character.id}
               name= {character.name} 
               status = {character.status}
               species= {character.species}
               gender= {character.gender}
               origin= {character.origin.name}
               image= {character.image}
               onClose={props.onClose}
               />
            )
         })}
         </CardsContainer>
   )
}
