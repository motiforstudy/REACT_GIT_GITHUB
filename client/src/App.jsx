import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import { Provider } from './context/GameProvider'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  )
}

export default App
