import React from 'react'
import { Link } from "react-router-dom"
import logo from '../../utils/img/Nexus-logo.png'
import profile from '../../utils/img/profil.png'
import '../../styles/Header.css'


function Header() {

  window.onscroll = function() {
    var header = document.querySelector('.header');
    if (window.scrollY > 0) { // Vérifie si la page a été défilée vers le bas
        header.classList.add('fixed-header');
    } else {
        header.classList.remove('fixed-header');
    }
};

  return (
    <>
    {/* refaire header avec half barre qui va contenir la marque du site et le tag du user avec une redirection profil avant la navbar  */}
    <container className='header'>
      <img className='logo logo-site' src={logo} alt="logo-site" />
      <div className='list-btn-header' >
        <Link to='/'>
          <button  className='btn-header' variant='text'>Home</button>
        </Link>

        <Link to='/404'>
          <button className='btn-header' variant='text'>Documentation</button>
        </Link>

        <Link to='/forum'>
          <button className='btn-header' variant='text'>Forum</button>
        </Link>

        <Link to='/404'>
          <button className='btn-header' variant='text'>Support</button>
        </Link>

        <Link to='/profile' className='div-profile'>
           <img className='logo logo-profile' src={profile} alt="profil-icone" />  
           <p className='usertag' >User</p>   
        </Link>

      </div>
    </container>
    
    
    </>


    
  )
}

export default Header