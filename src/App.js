import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

function Home () {
  return (
    <>
      <h1>Home</h1>
      <Link to="/list">Go to list</Link>
    </>
  );
}

function List () {
  return (
    <>
      <h1>List</h1>
      <Link to="/">Go to home</Link>
    </>
  );
}

export default App;
