import { useRef, useState } from "react"
import { useAppContext } from "../context/appContext"
import initUser from "../lib/initUser"

export default function MsgSender(){
  const userName = useRef(initUser())
  const [msg,setMsg] = useState("")
  const AppContext = useAppContext()
  const sendHandler = ()=>{AppContext.sendMsg({text:msg,userName:userName.current}).then(()=>setMsg(""))}
  return(
    <div className="msg-sender">
      <input
        type="text" placeholder="Enter a message"
        value={msg} onChange={(ev)=>{setMsg(ev.target.value)}}
        onKeyDown={(ev)=>{if(ev.code === "Enter") sendHandler() }}
      />
      <button
        onClick={sendHandler}
      >
        <img src="https://img.icons8.com/fluency/48/null/filled-sent.png" alt="send"/>
      </button>
    </div>
  )
}
