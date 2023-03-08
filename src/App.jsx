import './App.css'
import MsgSender from './component/MsgSender'
import MsgViewer from './component/MsgViewer'
import Navbar from './component/Navbar'
import { AppContext, AppContextProvider } from './context/appContext'

export default function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <Navbar/>
        <MsgViewer/>
        <MsgSender/>
      </div>
    </AppContextProvider>
  )
}
