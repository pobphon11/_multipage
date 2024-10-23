import { verifyUser } from '../../data/user';
import './Login.css'
import Form from 'react-bootstrap/Form';
import{ useRef} from 'react'

function Login({setToken, setRole}) {
    const userRef = useRef()
    const passRef = useRef()
    return ( 
        <div className="login-container">
             <Form.Label htmlFor="username">username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        style={{textAlign: 'center'}}
        placeholder='user'
        ref={userRef}
      />
               <Form.Label htmlFor="password">username</Form.Label>
      <Form.Control
        type="password"
        id="password"
        style={{textAlign: 'center'}}
        placeholder='pass'
        ref={passRef}
      />
      <button className='btn btn-success mt-3' onClick={() =>{
            const user = userRef.current.value.trim()
            const pass = passRef.current.value.trim()
           const userInfo = verifyUser(user, pass)
           userRef.current.value = ''
           passRef.current.value = ''
           if(userInfo === null){
            alert('user not found')
            userRef.current.focus()
           }else{
              setToken(userInfo.token)
              setRole(userInfo.role)
           }
      } } >Login</button>
        </div>
     );
}

export default Login;
