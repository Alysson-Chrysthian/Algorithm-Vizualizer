import { useState } from "react"
import "./app.css"
import algorithms from "./consts/algorithms"

function App() {
  const [algorithm, setAlgorithm] = useState({});
  const [formData, setFormData] = useState({algorithm: ''})

  const handleAlgSelection = (event) => {
    event.preventDefault();

    algorithms.forEach((algsObject) => {
      algsObject.algs.forEach((alg) => {
        if (alg.label == formData.algorithm) {
          setAlgorithm(alg);
        }
      });
    });
  }

  return (
    <>
      <div>
        <form onSubmit={handleAlgSelection}>
          <select
            name="algorithm"
            value={formData.algorithm}
            onChange={(e) => setFormData({
              ...formData,
              algorithm: e.target.value,
            })}
          >
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
      </div>
      <div>
        {algorithm.element}
      </div>
    </>
  )
}

export default App
