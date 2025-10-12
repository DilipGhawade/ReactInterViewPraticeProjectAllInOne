import { useRef } from "react"


export const UseRef = () =>{
    const inputRef = useRef()

    const handleFocusInput = () => inputRef.current.focus()

    return <>
       
    </>
}