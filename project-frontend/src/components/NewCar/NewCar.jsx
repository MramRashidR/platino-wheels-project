import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './NewCar.css';

function NewCar() {
    const [car, setCar] = useState({})

  useEffect(() => {
  }, [])


  const [formData, setFormData] = useState({
        Photo:'https://imgur.com/mVD0uik',
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
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios.post(Create a tweet)
    axios.post('http://localhost:4000/cars', formData,
    {
      headers:{
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    })
    .then(res => setCar(res.data))
    .catch(err => console.log(err))
  }
  return (
    <div className='sell-form' >
        <form onSubmit={handleSubmit}>
        <label for="file" class="pic">Upload photo:</label>
        <input type="file" value={formData.Photo} name="Img" /><br></br>


        <label >Brand</label>
        <input type="text" name="Brand" defaultvalue={formData.Brand} onChange={handleChange}/> <br></br>

        <label>Year</label>
        <input type="text" name="Year" defaultvalue={formData.Year}  onChange={handleChange}/><br></br>

        <label>Price</label>
        <input type="text" name="Price" defaultvalue={formData.Price}  onChange={handleChange}/><br></br>

        <label>Description</label>
        <input type="text" name="Description" defaultvalue={formData.Description} onChange={handleChange} /><br></br>

        <label>Contact</label>
        <input type="text" name="Contact" defaultvalue={formData.Contact} onChange={handleChange} /><br></br>

        <button className='Sell' type ="submit">SELL</button>

        </form>
    
        {/* {carsList.length ? carsList.map(car =>  */}
        {/* <div key={car._id} > */}
        {car ? 
        <div>
            <p>Photo: <img src={car.Photo} /></p>
            <p>Brand: {car.Brand}</p>
            <p>Year: {car.Year}</p>
            <p>Price: {car.Price}</p>
            <p>Description: {car.Description}</p>
            <p>Contact: {car.Contact}</p>
            </div>
            : null 
        }

    </div>
        )
    }


export default NewCar