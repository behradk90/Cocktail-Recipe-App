import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import NavBar from './components/home/NavBar';
import ShowCocktailList from './components/myCocktails/ShowCocktailList'
import CreateCocktail from './components/myCocktails/CreateCocktail';
import UpdateCocktailInfo from './components/myCocktails/UpdateCocktailInfo';
import ShowCocktailDetails from './components/myCocktails/ShowCocktailDetails';
import SignUp from './components/authentication/SignUp';
import Login from './components/authentication/Login';

function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/cocktail-list' element={<ShowCocktailList />} />
          <Route path='/create-cocktail' element={<CreateCocktail />} />
          <Route path='/edit-cocktail/:id' element={<UpdateCocktailInfo />} />
          <Route path='/show-cocktail/:id' element={<ShowCocktailDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
