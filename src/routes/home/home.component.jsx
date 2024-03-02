import Directory from '../../components/directory/directory.component.jsx';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
 const Home=()=> {


// const categories2=JSON.parse(categories)
  return (
    <Fragment>   

    <Directory/>
    <Outlet />

    </Fragment>
  );
}

export default Home;
