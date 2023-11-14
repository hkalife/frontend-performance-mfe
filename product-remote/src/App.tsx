// import PeopleList from './components/PeopleList'
import ProductList from './components/ProductList'
import './App.css'

function App() {
  const numberOfRowsToRender = 5;

  return (
    <>
      {/* <PeopleList numberOfRowsToRender={numberOfRowsToRender} /> */}
      <ProductList numberOfRowsToRender={numberOfRowsToRender} />
    </>
  )
}

export default App
