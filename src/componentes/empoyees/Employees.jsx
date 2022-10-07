import React, { useEffect } from 'react'
import { useState } from 'react'
import mujer from '../../imgs/femaleProfile.jpg'
import hombre from '../../imgs/maleProfile.jpg'
import estilos from './employee.module.css'

const Employees = () => {
    const [seleccionado, setSeleccionado] = useState('TeamA')
    const [employee, setEmployee] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
      },
      {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
      },
      {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
      },
      {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
      },
      {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
      },
      {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
      },
      {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
      },
      {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
      }]) 

      function handeCambiarTeam(e){
        console.log(e.target.value)
        setSeleccionado(e.target.value) 
      }
      function handleCambiarTeamClick(e){
        console.log(e.currentTarget)
        const transformedEmployee = employee.map(emp=> emp.id === parseInt(e.currentTarget.id)?
                                    (emp.teamName === seleccionado)?{...emp,teamName:''}:{...emp,teamName:seleccionado}
                                    :emp);
          setEmployee(transformedEmployee)
      }
      useEffect(() => {
        console.log(seleccionado)
      }, [seleccionado])
      
  return (
    <>
      <div className={`${estilos.opciones}`}>
        <select name="" id="" value={seleccionado} onChange={handeCambiarTeam}>
          <option value="TeamA">Equipo A</option>
          <option value="TeamB">Equipo B</option>
          <option value="TeamC">Equipo C</option>
          <option value="TeamD">Equipo D</option>
        </select>
      </div>
      <div className={estilos.contenedor}>
        <div className={estilos.contenedorInner}>
        {/* e.teamName === seleccionado? 'card seleccionado' : 'card' */}
        {
          employee.map(e => 
            <div key={e.id} id={e.id} className={e.teamName===seleccionado? `${estilos.card} ${estilos.seleccionado}`: `${estilos.card}`}   onClick={handleCambiarTeamClick}>
              <img src={e.gender==='male'?hombre:mujer} alt="" />
              <p>Nombre: {e.fullName}</p>
              <p><b>Designación</b>: {e.designation}</p>
            </div>
          
          )
        }
        </div>
      </div>
    </>
  )
}

export default Employees