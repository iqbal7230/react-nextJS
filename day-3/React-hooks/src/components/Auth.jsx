import { useContext, useState } from "react";
import { userContext } from "./UserProfile/userContext";

function Auth(){
    const [login, isLogin] = useState(false);
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(userContext);  
    function handleAuth(){
        if(email && password){
            isLogin(true)
            setUser({
                name: email.split("@")[0],
                email:email
            })
        }
    }

    function handleLogout(){
        isLogin(false);
        setEmail("")
        setPassword("")    
        setUser("")
}
    
    return(
        <div>
            {login ? (
                <>
                    <p>Welcome {email}!</p>
                    <button onClick={handleLogout}>LogOut</button>
                </>
                ) : (
                    <form onSubmit={handleAuth}>
                        <p>Please Login</p>
                        <input type="email"
                        placeholder="enter email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)} />

                        <input type="password"
                        placeholder="enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />

                        <button type="submit">LogIn</button>
                    </form>
                )
                }
            
        </div>
        
        
    )
}
export default Auth;