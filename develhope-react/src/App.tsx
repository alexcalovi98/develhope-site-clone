import { HelloWorld } from './components/HelloWorld'

function App() {
  return (
    <>
    <HelloWorld name="Alex" surname="Calovi" course="Mobile Development"/>
    <HelloWorld name="Rosario" surname="Floridia" age={27}/>
    <HelloWorld name="Federico Maria" surname="Calato" age={23}/>
    </>
  )
}

export default App
