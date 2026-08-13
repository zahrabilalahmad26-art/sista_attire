import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopHeader from './Header/TopHeader.jsx'
import MainHeader from './Header/MainHeader.jsx'
import NewIn from './Header/NewIn.jsx'
import TopPick from './Header/TopPick.jsx'
import Video from './Header/Video.jsx'
import All from './Header/All.jsx'
import Footer from './Header/Footer.jsx'

import ShirtPage from './Pages/ShirtPage.jsx'
import SkirtPage from './Pages/SkirtPage.jsx'
import SkirtShirtPage from './Pages/SkirtShirtPage.jsx'
import CasualPage from './Pages/CasualPage.jsx'
import ShalwarKameezPage from './Pages/ShalwarKameezPage.jsx'
import FrocksPage from './Pages/FrocksPage.jsx'

const Home = () => (
  <>
    <TopHeader />
    <MainHeader />
    <All />
    <TopPick />
    <Video />
    <NewIn />
    <Footer />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/shirt" element={<ShirtPage />} />
        <Route path="/shop/skirt" element={<SkirtPage />} />
        <Route path="/shop/skirt-shirt" element={<SkirtShirtPage />} />
        <Route path="/shop/casual" element={<CasualPage />} />
        <Route path="/shop/shalwar-kameez" element={<ShalwarKameezPage />} />
        <Route path="/shop/frocks" element={<FrocksPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App