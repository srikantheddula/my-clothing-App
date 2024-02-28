import './categories-styles.scss'
import Home from './routes/home/home.component.jsx';
import {Routes,Route,Outlet} from 'react-router-dom'
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './authentication/authentication.component.jsx';
import Shop from './routes/shop/shop-component.jsx'
import Checkout from './routes/checkout/checkout-component.jsx';

 const App=()=> {
  return (
    <Routes >  
      <Route path='/' element={<Navigation />} >
        <Route index={true}  element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='shop' element ={<Shop />} />
        <Route path='checkout' element={<Checkout></Checkout>}/>
      </Route>
       

    </Routes>
  );
}

export default App;
