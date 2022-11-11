import { createContext, useContext, useState } from "react";


const tools = createContext();

export const ToolContextProvider = ({children}) => {
const [color , setColor] = useState("")
const [style, setStyle] = useState("")
 const redColor = () => {
 setColor("red")
 }
 const blueColor = () => {
  setColor("blue")
 }
 const greenColor = () => {
  setColor("green")
 }
 const purpleColor = () => {
  setColor("purple")
 }
 const blackColor = () => {
  setColor("black")
 }
 const cyanColor = () => {
  setColor("cyan")
 }


 // Decotations
 const boldLetter = () => {
setStyle("bold")
 }

 const underLine = () => {
  setStyle("underline")
 }
 const itallic = () => {
  setStyle("italic")
 }
 const value = {
color,
style,
redColor,
blueColor,
greenColor, 
purpleColor,
blackColor,
cyanColor,
boldLetter,
underLine,
itallic
 }

 return <tools.Provider value={value}>
{children}
 </tools.Provider>
}


export const useToolsContext = () => {
 return useContext(tools)
} 