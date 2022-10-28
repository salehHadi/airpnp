import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Card from './Card'
import data from './data'

// img
import image from './assets/mountain-bike.png'
import './App.css'



function App() {


  const alldata = data
  const cards = alldata.map(item => {
    return <Card 
    key={item.id}
    img={image}
    // item={item} another way
    {...item}
    />
  })

  return (
    <div>
      <Header />
       < Hero />
      <section className="cards-list">
          {cards}
      </section>
  </div>
  )
}

export default App
