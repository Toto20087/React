import React, { useState } from "react"
import "./app.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

/* Los parametros no se modifican. Son INMUTABLES OK? PERFECTO */

export function App () {

  const format = (userName) => `@${userName}`
  const [name, setName] = useState("midudev")


  return (
    <section className="App">
      <TwitterFollowCard 
      formatUserName={format} 
      userName = {name}
      name = "Miguel Ángel Durán" 
      />
      
      {/* En el isFollowing, como es un buleano, lo que podes hacer es pasarlo directamente asi: isFollowing | y eso devuelve TRUE */} 

      <TwitterFollowCard 
      formatUserName={format} 
      userName = "kikobeats" 
      name = "Tomas Rodriguez Moyano" 
      />

      <button onClick={() => setName("pedromichel")}>
        Cambio Nombre
        </button>
    </section>
  )
}

/* otra manera de hacerlo es de la siguiente manera: */

/* export function App () {

  const format = (userName) => `@${userName}`

  const midudev = {isFollowing: true, userName: "midudev", name: "Miguel Ángel Durán"}
  const kikobeats = {isFollowing: false, userName: "kikobeats", name: "Tomas Rodriguez Moyano"}

  Lo de arriba son objetos por eso mismo se pasan de la siguiente manera:

  return (
    <div className="App">
      <TwitterFollowCard {...midudev} />
      <TwitterFollowCard {...kikobeats} />
    </div>
  )
}
 */
