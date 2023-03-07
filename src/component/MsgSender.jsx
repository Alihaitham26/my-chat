import { useEffect } from "react"
import initUser from "../lib/initUser"

export default function MsgSender(){
  useEffect(()=>{
    console.log(initUser())
  })
  return(
    <div className="msg-sender">
      <input type="text" placeholder="Enter a message"/>
      <button><img src="https://img.icons8.com/fluency/48/null/filled-sent.png" alt="send"/></button>
    </div>
  )
}
