import { createClient } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

const AppContext = createContext({})

const AppContextProvider = ({children}) =>{
  const supabaseUrl = import.meta.env["VITE_API_URL"]
  const supabaseKey = import.meta.env["VITE_API_KEY"]
  const supabase = createClient(supabaseUrl,supabaseKey)
  return (
    <AppContext.Provider
      value={{
        supabase
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)

export {AppContext,AppContextProvider,useAppContext}
