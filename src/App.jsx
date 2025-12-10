import './App.css'
import { Welcome } from './Welcome'
import { HelloWorld } from './Hello'
import Counter from './Counter'
import Products from './Products'




function App() {

  return (
    <div>
      <Welcome name="Meshach" alias="Superma"/>
      <Welcome name="Maureen" alias="Superwoman"/>
      <Welcome name="Maxwell" alias="Superboy"/>
      <Products title="Gaming Laptop" price={2399} inStock={true} categories={['Electronics', "Computers", "Gaming"]}/>
      <HelloWorld/>
      <Counter/>
    </div>

  )
}

export default App
