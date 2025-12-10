import './App.css'
import { Welcome } from './Welcome'
import { HelloWorld } from './Hello'
import Counter from './Counter'
import Products from './Products'
import Greetings from './Greetings'
import UserCard from './UserCard'
import CardWrapper from './CardWrapper'




function App() {

  return (
    <div>
      <Welcome name="Meshach" alias="Superman" />
      <Welcome name="Maureen" alias="Superwoman" />
      <Welcome name="Maxwell" alias="Superboy" />
      <Products title="Gaming Laptop" price={2399} inStock={true} categories={['Electronics', "Computers", "Gaming"]} />
      <Greetings name="Bruce" message="Good morning" />
      <Greetings name="George" />
      <Greetings message="Weldone" />
      <Greetings />
      <UserCard name="Meshach" age={37} email="meshach123@gmail.com" gender="Male" id={24} />

      <CardWrapper>
        <h4>I am a child here</h4>
        <p>We are children</p>
        <p>We are children</p>
        <p>We are children</p>
        <UserCard name="Meshach" age={37} email="meshach123@gmail.com" gender="Male" id={24} />
      </CardWrapper>
      <HelloWorld />
      <Counter />
    </div>

  )
}

export default App
