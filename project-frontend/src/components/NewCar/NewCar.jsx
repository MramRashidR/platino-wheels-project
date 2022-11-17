import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function NewCar() {
    const [carsList, setCarsList] = useState([])

  useEffect(() => {
    getCars()
  }, [])

  const getCars = () => {
    axios.get('http://localhost:4000/cars')
    .then(res => setCarsList(res.data))
    .catch(err => console.log(err))
  }

  const [formData, setFormData] = useState({
        Photo:'',
        Brand: '',
        Year: '',
        Price: '',
        Description: '',
        Contact: ''
  })

  const handleChange = (e) => {
    //Store the user input into state
    setFormData({
      ...formData,
      [e.target.Brand]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // axios.post(Create a tweet)
    axios.post('http://localhost:4000/cars', formData,
    {
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then(res => console.log(res))
    .then(() => getCars())
    .catch(err => console.log(err))
  }
  return (
    <div className='sell-form' >
        <form onSubmit={handleSubmit}>
        <label for="file" class="pic">upload photo:</label>
        <input type="file" value={formData.Photo} name="Img" /><br></br>

        <label>Brand</label>
        <input type="text" name="Brand" defaultvalue={formData.Brand} onChange={handleChange}/> <br></br>

        <label>Year</label>
        <input type="text" name="Year" defaultvalue={formData.Year}  onChange={handleChange}/><br></br>

        <label>Price</label>
        <input type="text" name="Price" defaultvalue={formData.Price}  onChange={handleChange}/><br></br>

        <label>Description</label>
        <input type="text" name="Description" defaultvalue={formData.Description} onChange={handleChange} /><br></br>

        <label>Contact</label>
        <input type="text" name="Contact" defaultvalue={formData.Contact} onChange={handleChange} /><br></br>

        <button type="submit">Sell</button>

        </form>
    
        {/* {carsList.length ? carsList.map(car => 
        <div key={car._id} >
            <p>Photo: {car.Photo}</p>
            <p>Brand: {car.Brand}</p>
            <p>Year: {car.Year}</p>
            <p>Price: {car.Price}</p>
            <p>Description: {car.Description}</p>
            <p>Contact: {car.Contact}</p>
        </div>
        )
        : null} */}

    </div>
        )
    }


export default NewCar