import Auth from "./components/Auth";
import ThemeBox from "./components/ThemeBox";
import { ThemeProvider } from "./components/ThemeContext";
import ThemeToggler from "./components/ThemeToggler";
import UserProfile from "./components/UserProfile/UserProfile";
import { UserProvider } from "./components/UserProfile/userContext";

function App(){
  return(
    <>
       
        <ThemeProvider>
            <ThemeToggler/>
            <ThemeBox/>
        </ThemeProvider>
        <UserProvider>
            <Auth/>
            <UserProfile/>
        </UserProvider>
          
        
    </>
  )
}
export default App;