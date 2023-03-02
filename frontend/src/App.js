import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import ShowCocktailList from './components/ShowCocktailList'
import CreateCocktail from './components/CreateCocktail';
import UpdateCocktailInfo from './components/UpdateCocktailInfo';
import ShowCocktailDetails from './components/ShowCocktailDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
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
