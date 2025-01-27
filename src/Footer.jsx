import Instagram from '@mui/icons-material/Instagram'
import Linkedin from '@mui/icons-material/Linkedin'
import Facebook from '@mui/icons-material/Facebook'
import X from '@mui/icons-material/X'
import { Link, useLocation } from 'react-router-dom'

function Footer({ setIsPopupOpen, isPopupOpen, togglePopup, resetSearchBar }) {
  const location = useLocation()
  // Fonction de défilement fluide avec un décalage
  const scrollToSection = (e, targetId) => {
    e.preventDefault() // Empêcher le comportement par défaut du lien

    const targetElement = document.getElementById(targetId)
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Décalage de 60px (ajuste cette valeur)
      behavior: 'smooth',
    })
  }

  const scrollTop = () => {
    if (location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className='text-white flex justify-around w-full text-center'>
      <div className=''>
        <h1 className='hover:text-gray-400 hover:text-lg'>
          <Link
            to='/'
            onClick={() => {
              scrollTop()
              resetSearchBar()
            }}
          >
            Accueil
          </Link>
        </h1>
        <h1 className='hover:text-gray-400 hover:text-lg'>
          <Link
            onClick={(e) => {
              togglePopup()
              scrollToSection(e, 'accueil')
            }}
          >
            Ajout d'une recette
          </Link>
        </h1>
      </div>
      <div className=''>
        <p>&copy; 2023 LetsCook. All rights reserved.</p>
        <nav className='flex flex-col'>
          <a href='#' className='hover:text-red-600 hover:text-lg'>
            About Us
          </a>
          <a href='#' className='hover:text-green-600 hover:text-lg'>
            Contact Us
          </a>
          <a href='#' className='hover:text-blue-600 hover:text-lg'>
            Terms & Conditions
          </a>
        </nav>
        <nav className='inline-flex'>
          <a href='https://instagram.com' className='red'>
            <Instagram />
          </a>
          <a href='https://linkedin.com' className='burly'>
            <Linkedin />
          </a>
          <a href='https://facebook.com' className='burly'>
            <Facebook />
          </a>
          <a href='https://x.com' className='burly'>
            <X />
          </a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
