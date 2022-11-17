import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <> 
    {props.isAuth ? (
        <div className='NAVBAR'>
          <ul className="navbar-ul">
          <li><Link class ="N1" to='/home'>Home</Link></li>
          <li><Link class ="N2" to='/about'>About</Link></li>
          <li><Link class ="N3" to='/category'>Category</Link></li>
          <li><Link class ="N4" to='/contact'>Contact</Link></li>
          <li><Link class ="N5" to='/policy'>Policy</Link></li>
          
          <li><Link class="N6" to ='/logout' onClick={props.onLogoutHandler}>Logout</Link></li>
          {props.user ? "Welcome " + props.user.user.username : null}
          </ul>
        </div>
     ) : (
      <div className='NAVBAR2'>
      <ul className="navbar-ul">
        <li><Link class ="N7" to='/home'>Home</Link></li>
      <li><Link class ="N8" to="/signup">Signup</Link></li>
      <li><Link class ="N9" to="/signin">Signin</Link></li>
      </ul>
    </div>
     )}

    </>
  )
}

export default NavBar
