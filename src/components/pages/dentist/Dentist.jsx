import React, { useContext } from 'react'
import { GlobalContext } from '../../../context/GlobalContext';
import DentistCard from './DentistCard';


const Dentist = () => {
const { state, dispatch } = useContext(GlobalContext);
const nameApi = state.users ;
console.log (nameApi)  
return (
    <div>
      <DentistCard nameApi={nameApi}/>  

      

    </div>
  ) 
}

export default Dentist