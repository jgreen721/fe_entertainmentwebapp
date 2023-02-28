
import './App.css'
import {Dashboard, SignIn} from "./views"
// import {useAppContext} from "./context/AppStoreContext"
import {useAppContext} from "./context/context_args"



function App() {
  const {auth} = useAppContext();

 return <div data-theme="dark" className="app">
   <div className="app-container">
   {auth ? <Dashboard/> : <SignIn/>}
   </div>
   </div>
}

export default App
