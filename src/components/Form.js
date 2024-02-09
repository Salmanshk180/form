import React ,{useState} from 'react'

const Form = (props) => {
    const [email,setEmail] = useState('');
    const inputHandler = (event) =>{
        setEmail(event.target.value);
        console.log(email);
    }
    const buttonHandler = (event) => {
        props.setLogin(true);
        localStorage.setItem('login',true);
    }
  return ( 
    <div>
        <input type="email" onChange={inputHandler} placeholder="johndoe@gmail.com"/>
        <button onClick={buttonHandler}>Login</button>
    </div>
  )
}

export default Form