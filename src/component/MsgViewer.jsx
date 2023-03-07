import { useContext } from "react";
import { useAppContext } from "../context/appContext.jsx";
import Msg from "./Msg.jsx";
export default function MsgViewer(){
  const AppContext = useAppContext()
  console.log(AppContext.msgs)

  return(
    <div className="msg-viewer">
      {AppContext.msgs.map(({text,username:user,timestamp:time})=><Msg {...{text,user,time}} key={time+user}/>)}
    </div>
  )
}
