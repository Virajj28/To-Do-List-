import { Link } from "react-router-dom"
import { Routes, Route} from "react-router-dom"
import { useAuth } from "../auth"

export const Home = () => {
    const auth = useAuth();
  return (
    <Routes>
        <div>Home</div>
        { !auth.user && 
            <Link to="/login">
                Login
            </Link> 
        }
    </Routes>
  )
}
