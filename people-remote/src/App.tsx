import PeopleList from './components/PeopleList'
import './App.css'

function App() {
  const numberOfRowsToRender = 5;

  return (
    <>
      <PeopleList numberOfRowsToRender={numberOfRowsToRender} />
    </>
  )
}

export default App
