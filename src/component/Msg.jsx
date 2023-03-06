export default function Msg({user,text,time}){
  return(
    <div className="msg">
      <h3>@{user}</h3>
      <p className="text">{text}</p>
      <p className="time">{time}</p>
    </div>
  )
}
