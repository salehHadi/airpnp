import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Card from './Card'
import data from './Data'
import './App.css'


function App() {
  const alldata = data
  const cards = alldata.map(item => {
    return <Card 
    key={item.id}
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
