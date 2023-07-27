import { useEffect } from "react";
import Router from "./router/Router";
import "./styles/css/style.css";

function App() {

  useEffect(()=>{
    window.scrollTo({top:0})
  },[])

  return <Router />;
}

export default App;
