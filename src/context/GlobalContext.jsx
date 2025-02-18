import React, { createContext, useEffect, useReducer } from "react";
import { dentistGet } from "../services/serviceDentist";


export const GlobalContext = createContext();

const initialState = {
    users: [],
    isDark: false,
    favs: []
    };

    const globalReducer = (state, action) => {
    switch (action.type) {
        case "GET_USERS":
            return {...state, users: action.payload}
        case "SWITCH_MODE":
            return {...state, isDark: !state.isDark}
        default:
        state;
    }
    };

    const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(globalReducer, initialState);
    useEffect(()=>{
        const dentistsApi = dentistGet()
        dentistsApi.then((res)=>dispatch({type:"GET_USERS",payload:res.data}));
    },[]) 
    console.log (state.users)
        return (
        <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
        </GlobalContext.Provider>
    );
        };

export default GlobalContextProvider;