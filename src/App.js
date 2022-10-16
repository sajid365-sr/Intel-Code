

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';

function App() {

  


  return (
    <div className="App">

      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/topics' element={<Topics></Topics>}></Route>
        <Route path='/statistics' element={<Statistics></Statistics>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>

      </Routes>

    </div>
  );
}

export default App;
