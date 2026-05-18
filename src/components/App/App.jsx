// import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Menu from '../Menu/Menu.jsx';

import './App.scss';
import 'normalize.css';
import { Suspense, useState } from 'react';



function App(){

  const [isActive, setIsActive] = useState(false)

  // function clickMenuTogle()
  //  {setIsActive(!isActive)}

   function clickMenuClose(){
    setIsActive(false)
   }

   console.log(clickMenuClose);
   
  // const openMenu = () => {
  //     setIsActive(!isActive)
  // }


    return (
    <>
      <Header isActive={isActive} clickMenuTogle={() => {setIsActive((v) => !v)}}/>
      <Menu  isActive={isActive} clickMenuClose = {clickMenuClose}/>
      <main >
        <Suspense >
          <Outlet/>
        </Suspense>
      </main>
      
    </>
  )
}



export default App
