import Restaurant from './components/restaurants';
import RestaurantsList from './components/restaurants-list';
import AddReview from './components/add-review';
import Login from './components/logout';
import Something from './components/something';
import NavBarExample from './layouts/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './home.js'

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }
  return (
    <div className="Home">

<BrowserRouter>
<Routes>
<Route path='/' element={ <NavBarExample /> }>
    <Route path='/login' element={ <HomePage /> } />
    <Route index path='/restaurants' element={ <RestaurantsList /> } />
    <Route path="/restaurants/:id" element={<Restaurant user={user}  />} />
    <Route path="/restaurants/:id/review" element={<AddReview user={user} />} />
    <Route path="/logout" element={<Login/>}/>
    
         
    
          
  </Route>
  
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;

