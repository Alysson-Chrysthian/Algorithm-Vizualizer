import "./app.css"
import algorithms from "./consts/algorithms"

function App() {
  return (
    <>
      <form>
        <select>
          {algorithms.map((algsObject, index) => (
              <optgroup label={algsObject.category} key={index}>
                {algsObject.algs.map((alg, index) => (
                  <option value={alg.label} key={index}>{alg.label}</option>
                ))}
              </optgroup>
          ))}
        </select>
        <button>Escolher algoritimo</button>
      </form>
    </>
  )
}

export default App
