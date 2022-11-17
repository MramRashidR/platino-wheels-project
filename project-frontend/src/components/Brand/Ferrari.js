import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Ferrari() {

  const [carsList, setCarsList] = useState([])

  useEffect(() => {
    getCars()
  }, [])


  const getCars = () => {
    axios.get('http://localhost:4000/cars/category/Ferrari')
    .then(res => setCarsList(res.data))
    .catch(err => console.log(err))
  }

  return (
    <div>

      {carsList.length ? carsList.map(car => 
        <div key={car._id}>
        <p> Brand : {car.Brand}</p>
        <p> Year : {car.Year}</p>
        <p> Price : {car.Price}</p>
        <p> Description : {car.Description}</p>
        <p> Contact Information : {car.Contact}</p>
        </div>
        ) : null}

        <br></br>

    </div>
  )
}
