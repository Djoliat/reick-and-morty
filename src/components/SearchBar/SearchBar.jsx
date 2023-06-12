import style from "./SearchBar.module.css"
import { useState } from "react";



export default function SearchBar({onSearch}) {
  const [id, setId] = useState('');  
 
  const  handleChange =(event)=>{
     setId(event.target.value)
  
     
  
}
 
   return (
      <div className={style.conteiner}>
        <input type='search' className={style.search} onChange={handleChange} value={id} placeholder="busca en el multiverso"/>
        <button className={style.button} onClick={()=>{onSearch(id); setId('')}}>Agregar</button>
        
       </div>
   );
} 

