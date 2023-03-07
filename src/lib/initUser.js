export default function initUser(){
  return "user" + Date.now().toString().slice(0,6)
}
