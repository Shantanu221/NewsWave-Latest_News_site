import { useState } from "react"
import Navbar from "./components/Navbar"
import NewsAll from "./components/NewsAll"


const App = () => {
  const [category,setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsAll category={category}/>
    </div>
  )
}

export default App