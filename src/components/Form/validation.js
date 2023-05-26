const validation = (userData, errors, setErrors) =>{
    //email
    if (!userData.email) 
      setErrors ({...errors, email: "Introduce tu email"})
    else if (userData.email.length > 35) 
      setErrors ({...errors, email: "Tu email debe tener menos de 35 caracteres"})
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email))  // este es el formato de un regex para validar un mail con esta estructura: mail@mail.com
      setErrors ({...errors, email: "Email invalido"})
    else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email))
        setErrors ({...errors, email: "Mail incorrecto"})
      else setErrors ({...errors, email: ""})
      }
    // if (!userData.password)
    //   setErrors ({...errors, password: "Introduce tu password"})
    // else if (userData.password.length < 6 || userData.password.length > 10) 
    //   setErrors ({...errors, password: "Tu password debe tener entre 6 y 10 caracteres"}) 
    // else setErrors ({...errors, password: ""}) 
   
}
 
export default validation;