import React from "react"
import ReactDOM from "react-dom"
import './index.css'
import './bootstrap.min.css'
// Components
import Counter from "./Components/Counter/Counter"

// Redux
import store from "./store";
import { Provider } from "react-redux";


const App = ()=>{
  
  return (
    <Provider store = {store}>
      <Counter/>
    </Provider>
    
  )
}
ReactDOM.render(<App/>, document.getElementById("root"))