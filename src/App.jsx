import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { Home } from './components/page/home'
import { About } from './components/page/about'
import { Contant } from './components/page/contact'
import { Header } from './components/layout/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
   

   <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contant' element={<Contant/>}/>
      <Route path='*' element={<img style={{width: '100%'}} src="https://media.licdn.com/dms/image/C5112AQEw1fXuabCTyQ/article-inline_image-shrink_1500_2232/0/1581099611064?e=1725494400&v=beta&t=7ODxobcklUlei8lN7u0M3Vetm-LJwP-bo5MYM1-O-qw" alt="" />}/>
    
   </Routes>
    </>
  )
}

export default App
