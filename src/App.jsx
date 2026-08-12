import React from 'react'
import TopHeader from './Header/TopHeader.jsx'
import MainHeader from './Header/MainHeader.jsx'
import NewIn from './Header/NewIn.jsx'
import TopPick from './Header/TopPick.jsx'
import Video from './Header/Video.jsx'
import All from './Header/All.jsx'
import Footer from './Header/Footer.jsx'

function App() {

  return (
    <>
      <TopHeader />
      <MainHeader />
      <All />
      <TopPick />
      <Video />
      <NewIn />
      <Footer />
    </ >

  )
}

export default App
