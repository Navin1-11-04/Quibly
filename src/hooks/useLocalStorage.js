import { useEffect, useState } from "react";

export function useLocalStorage(key,defaultValue){
    const [value,setValue] = useState(() =>{
        try{
            const json = localStorage.getItem(key);
            return json ? JSON.parse(json) : defaultValue;
        }catch (e){
            console.error("Failed to read localStorage",e);
            return defaultValue;
        }
    })
    useEffect(()=>{
        try{
            localStorage.setItem(key,JSON.stringify(value));
        }catch(e){
            console.error("Failed to write to localStorage",e);
        }
    },[key,value]);

    return [value,setValue];
}
