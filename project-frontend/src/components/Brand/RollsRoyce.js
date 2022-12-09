import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function RollsRoyce() {

  const [carsList, setCarsList] = useState([])

  useEffect(() => {
    getCars()
  }, [])


  const getCars = () => {
    axios.get('http://localhost:4000/cars/category/RollsRoyce')
    .then(res => setCarsList(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div>

      {carsList.length ? carsList.map(car => 
        <div key={car._id}>
        <img src={car.Photo}></img>
        <p> {car.Brand}</p>
        <p> {car.Year}</p>
        <p> {car.Price}</p>
        <p> {car.Description}</p>
        <p> {car.Contact}</p>
        </div>
        ) : null}

        <br></br>

    </div>
  )
}
