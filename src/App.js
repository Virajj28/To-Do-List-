import './App.css';
import { Routes, Route } from 'react-router-dom';
import Todos from './components/Todos';
import { AuthProvider, useAuth } from './auth';
import { Login } from './components/Login';
import { Home } from './components/Home';

function App() {
  const auth = useAuth();
  return (
    <AuthProvider>
      <Routes>
        <div className="App">
          <Route path = "/" element={<Home />} />
          <Route path="/list" element={<Todos />} />
        </div>
      </Routes>
    </AuthProvider>
  );
}

export default App;
