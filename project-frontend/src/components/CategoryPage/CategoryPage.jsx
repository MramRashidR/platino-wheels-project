import React from 'react'
import './CategoryPage.css';
import { Link } from 'react-router-dom'

function CategoryPage(props) {
  return (
     <><div id='div-1'>
        <ul>
           <li className='list-1'><Link to='/category/Bugatti' element><img src="https://static-x.jamesedition.com/assets/makes/mclaren-5b7b53b2064741888a99743fa5fd379299af12099ce4407a8db8f246909d9ce3.jpg"></img></Link> </li>
           <li className='list-1'><Link to='/category/Ferrari'><img src='https://drive.google.com/drive/folders/17ENegOOj45p0TBJ-67LIZCsIjD1Tr_Oy'></img></Link> </li>
           <li className='list-1'><Link to='/category/Lamborghini'><img src="https://static-x.jamesedition.com/assets/makes/lamborghini-927e2402f3ff3bb657e806e56c30521e49c033bd6292a55a773dbc2a27321433.jpg"></img></Link> </li>
           <li className='list-1'><Link to='/category/RollsRoyce'><img src="https://static-x.jamesedition.com/assets/makes/rolls_royce-0043966006f32665098ccfc539c130966cfdc489c434696971131aa8f762b9a6.jpg"></img></Link> </li>
        </ul>
     </div><div id='div-2'>
           <ul>
              <li className='list-2'><Link to='/category/AstonMartin'><img src="https://static-x.jamesedition.com/assets/makes/aston_martin-41e227427038c30b7a5784176b787804bd61b2807b8b8938dc0a396ae5444b42.jpg"></img></Link> </li>
              <li className='list-2'><Link to='/category/Rivian'><img src="https://drive.google.com/drive/folders/17ENegOOj45p0TBJ-67LIZCsIjD1Tr_Oy"></img></Link> </li>
              <li className='list-2'><Link to='/category/McLaren'>McLaren</Link> </li>
              <li className='list-2'><Link to='/category/Corvette'>Corvette</Link> </li>
           </ul>
        </div></>
   )}


   export default CategoryPage