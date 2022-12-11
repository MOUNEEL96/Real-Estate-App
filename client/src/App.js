import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import Pg1 from './components/pg1';
import Pg2 from './components/pg2';
import Pg3 from './components/pg3';
import Pg4 from './components/pg4';
import Table from './components/Table';
import Propertylist from './components/propertylist';
import Protected from './components/protected';

const App=()=> {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/signup"element={<Signup/>}></Route>
      <Route path="/propertylist" element={<Protected><Propertylist/></Protected>}></Route>
      <Route path="/basicinfo"element={<Protected><Pg1/></Protected>}></Route>
      <Route path='/propertydetail' element={<Pg2/>}></Route>
      <Route path='/generalinfo' element={<Pg3/>}></Route>
      <Route path='/locationinfo' element={<Pg4/>}></Route>
      <Route path='/table' element={<Table/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;