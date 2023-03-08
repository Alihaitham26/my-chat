export default function Navbar(){
  return (
    <nav>
      <h1>my chat</h1>
      <button className="source" onClick={()=>window.open("https://github.com/Alihaitham26/my-chat")}><img src="./github.svg"></img> source</button>
    </nav>
  )
}

