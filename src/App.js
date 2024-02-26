import './categories-styles.scss'
import Home from './routes/home/home.component.jsx';
import {Routes,Route,Outlet} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './authentication/authentication.component.jsx';

const Shop=()=>{
  return (
    <h1>in the shop page</h1>
  )
}

 const App=()=> {
  return (
    <Routes >  
      <Route path='/' element={<Navigation />} >
        <Route index={true}  element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
