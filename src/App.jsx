import './App.css'
import { AppContext, AppContextProvider } from './context/appContext'

export default function App() {
  return (
    <AppContextProvider>
      <div className="App">
        hello
      </div>
    </AppContextProvider>
  )
}
