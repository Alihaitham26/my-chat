import './App.css'
import MsgSender from './component/MsgSender'
import MsgViewer from './component/MsgViewer'
import { AppContext, AppContextProvider } from './context/appContext'

export default function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <MsgViewer/>
        <MsgSender/>
      </div>
    </AppContextProvider>
  )
}
