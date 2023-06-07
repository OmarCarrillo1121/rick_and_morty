import { useState } from "react"
import validation from "./validation"

const Form = ( {login} )=> {

const [userData, setUserData] = useState({
    email: "",
    password: "",
})
 
const [errors, setErrors] = useState ({})
    
const handleChange = (event)=> {
    const property = event.target.name;
    const value = event.target.value;
    setUserData ({...userData, [property]: value});
    validation ({...userData, [property]: value}, errors, setErrors);
}

const submitHandler = (event) => {
    event.preventDefault()
    login (userData)
}
    
    return (
        <div>
        <h1>Logueate acá</h1>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                type="text" 
                name="email" 
                value={userData.email} 
                placeholder="Poné tu email aquí"
                onChange={handleChange}
                />
                <p>{errors.email}</p>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input 
                type="text" 
                name="password" 
                value={userData.password}
                placeholder="Tu password va aquí"
                onChange={handleChange}
                />
                <p>{errors.password}</p>
            </div>
            <button>Submit</button>
        </form>
        </div>
    )
}

export default Form