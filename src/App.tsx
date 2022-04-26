import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp'; 
import ShowData from './pages/ShowData'; 
import { ContextProvider } from './contexts/Context';

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <h1>Título da Página</h1>
        <hr />
        <Routes>
          <Route  path='/' element={ < SignUp /> }/>
          <Route  path='/exibir' element={ < ShowData /> }/>

        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
