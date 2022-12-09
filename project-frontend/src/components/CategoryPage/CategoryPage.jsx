import React from 'react'
import './CategoryPage.css';
import { Link } from 'react-router-dom'

function CategoryPage(props) {
  return (
     <><div id='div-1'>
        <ul>
           <li className='list-1'><Link to='/category/Bugatti' element><img src="https://static-x.jamesedition.com/assets/makes/bugatti-fabe3f5d6f228a909fab8056d077110e218f17dddbc937d63cce0b2f6a507404.jpg"></img></Link> </li>
           <li className='list-1'><Link to='/category/Ferrari'><img class="je2-lazy-load _loaded" data-src="https://static-x.jamesedition.com/assets/makes/ferrari-b59b3292b4111e6d77da5847bdc1195e3db5dfb3e810a665ad18983cc4826e86.jpg" alt="ferrari" src="https://static-x.jamesedition.com/assets/makes/ferrari-b59b3292b4111e6d77da5847bdc1195e3db5dfb3e810a665ad18983cc4826e86.jpg"></img></Link> </li>
           <li className='list-1'><Link to='/category/Lamborghini'><img src="https://static-x.jamesedition.com/assets/makes/lamborghini-927e2402f3ff3bb657e806e56c30521e49c033bd6292a55a773dbc2a27321433.jpg"></img></Link> </li>
           <li className='list-1'><Link to='/category/RollsRoyce'><img src="https://static-x.jamesedition.com/assets/makes/rolls_royce-0043966006f32665098ccfc539c130966cfdc489c434696971131aa8f762b9a6.jpg"></img></Link> </li>
        </ul>
     </div><div id='div-2'>
           <ul>
              <li className='list-2'><Link to='/category/Corvette'><img src ="https://i.imgur.com/JGvT3Bp.jpg "></img></Link></li>
              <li className='list-2'><Link to='/category/AstonMartin'><img src="https://static-x.jamesedition.com/assets/makes/aston_martin-41e227427038c30b7a5784176b787804bd61b2807b8b8938dc0a396ae5444b42.jpg"></img></Link> </li>
              <li className='list-2'><Link to='/category/McLaren'><img class="je2-lazy-load _loaded" data-src="https://static-x.jamesedition.com/assets/makes/mclaren-5b7b53b2064741888a99743fa5fd379299af12099ce4407a8db8f246909d9ce3.jpg" alt="mclaren" src="https://static-x.jamesedition.com/assets/makes/mclaren-5b7b53b2064741888a99743fa5fd379299af12099ce4407a8db8f246909d9ce3.jpg"></img></Link> </li>
              <li className='list-2'><Link to='/category/Rivian'><img src="https://i.imgur.com/70L5fwU.jpg"></img></Link> </li>
           </ul>


         <Link className='button1' to='/NewCar/NewCar'>Sell Car</Link> 
        </div></>

   )}

   
   export default CategoryPage