import { useState } from 'react'

import { NavBar } from './Components/Navbar'
import { Newsboard } from './Components/NewsBoard'

export const App = () => {

  const [category, setCategory] = useState("general")

  return (
    <div>
      <NavBar setCategory={setCategory} />
      <Newsboard category={category}/>
    </div>
  )
}

export default App