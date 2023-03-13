import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import ShowCocktailList from './components/myCocktails/ShowCocktailList'
import CreateCocktail from './components/myCocktails/CreateCocktail';
import UpdateCocktailInfo from './components/myCocktails/UpdateCocktailInfo';
import ShowCocktailDetails from './components/myCocktails/ShowCocktailDetails';
import SignUp from './components/authentication/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
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
