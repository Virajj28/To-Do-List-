import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom'

const Todos = () => {
    const auth = useAuth()
    const navigate = useNavigate()

    const handlelogout = () => {
        auth.logout()
        navigate('/')
    }

  return (
    <div>
        Welcome {auth.user}
        <button onClick={handlelogout}>Logout</button>
    </div>
  )
}

export default Todos;
