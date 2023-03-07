import { useContext } from "react";
import { useAppContext } from "../context/appContext.jsx";
import timeConverter from "../lib/timeConverter.js";
import Msg from "./Msg.jsx";
export default function MsgViewer(){
  const AppContext = useAppContext()
  console.log(AppContext.msgs)

  return(
    <div className="msg-viewer">
      {AppContext.msgs.map(
        ({text,username,timestamp})=>(
          <Msg
            text={text} user={username}
            time={timeConverter(timestamp)} key={timestamp}
          />
        )
      )}
    </div>
  )
}
