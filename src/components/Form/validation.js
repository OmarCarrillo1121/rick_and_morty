const validation = (userData, errors, setErrors) => {
    //email
    if (!userData.email) 
      setErrors ({...errors, email: "Introduce tu email"})
    else if (userData.email.length > 35) 
      setErrors ({...errors, email: "Tu email debe tener menos de 35 caracteres"})
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) { // este es el formato de un regex para validar un mail con esta estructura: mail@mail.com
      setErrors ({ ...errors, email: "Email inválido"})
    } else {
      setErrors ({ ...errors, email: "" })
    }

    //password
    if (userData.password.length < 6 || userData.password.length > 10 ) {
      setErrors({ ...errors, password: "Longitud de password inválida"})
    } else if (!/\d/.test ( userData.password )) {
      setErrors({ ...errors, password: "Debe contener al menos un número"})
    } else {
      setErrors({ ...errors, password: ""})
    }
}
 
export default validation;