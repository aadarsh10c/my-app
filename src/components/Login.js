import { useState } from "react";
import axios from "axios";


const Login = () => {
    const [error, setError ] = useState(false)
    const [ username , setUserName ] = useState("")
    const [ password , setPassword ] = useState("")
    const [ loading, setLoading ] = useState(false)
    const [ user, setUser ] = useState({})

    const isDisabled = () => ( (password.length === 0 && username.length === 0 ) || error)

    const handleClick = async (e) => {
        e.preventDefault()
        setLoading(true)
        try{
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/1")
            setUser(data)
        }catch{
            setError(true)
        }
        setLoading(false)
    }

    return(
        <div className="container">
            <span className="user">{user.name}</span>
            <form>
                <input 
                placeholder="username" 
                type="text" value={username} 
                onChange={({target}) => setUserName(target.value)} 
                />
                <input  
                placeholder="password" 
                type="password" 
                value={password}
                onChange={({target}) => setPassword(target.value)} 
                 />
                <button disabled={isDisabled()} onClick={(e) => handleClick(e)}>{loading ? "Please Wait" : "Login"}</button>
                <span data-testid='error' style={{visibility: error ? "visible" : "hidden" }}>Something went wrong</span>
            </form>
        </div>
    )
}

export default Login