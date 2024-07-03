import Header from './pages/header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import NoMatch from './pages/noMatch/NoMatch';
import PostUser from './pages/employee/PostUser';
import UpdateUser from './pages/employee/UpdateUser';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='*' element={<NoMatch/>}/>
      <Route path='/employee/:id' element={<UpdateUser/>}/>
      <Route path='/employee' element={<PostUser/>}/>
    </Routes>
    </>
  );
}

export default App;
