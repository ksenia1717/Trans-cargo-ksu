// import { Header } from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import Menu from '../Menu/Menu.jsx';

import './App.scss';
import 'normalize.css';
import { Suspense } from 'react';

function App(){
    return (
    <>
      <Header />
      <Menu />
      <main >
        <Suspense >
          <Outlet/>
        </Suspense>
      </main>
      
    </>
  )
}



export default App
