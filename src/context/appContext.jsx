import { createClient } from "@supabase/supabase-js";
import moment from "moment";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({})

const AppContextProvider = ({children}) =>{
  const supabaseUrl = import.meta.env["VITE_API_URL"]
  const supabaseKey = import.meta.env["VITE_API_KEY"]
  const supabase = createClient(supabaseUrl,supabaseKey)
  const getMsgs = async () => await supabase.from("chat").select().range(0,49).order("id",{ascending:true})
  const [msgs,setMsgs] = useState([])
  useEffect(()=>{
    getMsgs().then((({data})=>{setMsgs(data)}))
    const chat = supabase.channel('custom-all-channel')
    .on(
      'postgres_changes',
      { event: 'insert', schema: 'public', table: 'chat' },
      (payload) => {
        setMsgs((msgs)=>{
          const copyMsg = Object.assign([],msgs)
          copyMsg.push(payload.new)
          return copyMsg
        })
      }
    )
    .subscribe()
  },[])
  const getTimeStamp = ()=>{
    return moment().toISOString()
  }
  const sendMsg = async ({text,userName})=>{
    if(text && userName){
      const {error} = await supabase.from("chat").insert([{text,username:userName,timestamp:getTimeStamp()}])
      console.log(error)
    }
  }

  return (
    <AppContext.Provider
      value={{
        supabase,
        msgs,
        sendMsg
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export {AppContext,AppContextProvider,useAppContext}
