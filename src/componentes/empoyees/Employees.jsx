import React from 'react'
import { useState } from 'react'
import mujer from '../../imgs/femaleProfile.jpg'
import hombre from '../../imgs/maleProfile.jpg'
import estilos from './employee.module.css'

const Employees = () => {
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
  return (
    <>
      <div className={estilos.opciones}>
        <select name="" id="">
          <option value="equipoA">Equipo A</option>
          <option value="equipoB">Equipo B</option>
          <option value="equipoC">Equipo C</option>
          <option value="equipoD">Equipo D</option>
        </select>
      </div>
      <div className={estilos.contenedor}>
        <div className={estilos.contenedorInner}>

        {
          employee.map(e => 
            <div className={estilos.card}>
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