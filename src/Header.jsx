import LogoLetsCook from './assets/logoLetsCook.svg'
import SearchIcon from '@mui/icons-material/Search'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { Link } from 'react-router-dom'

function Header({ togglePopup, resetSearchBar }) {
  // Fonction de défilement fluide avec un décalage
  const scrollToSection = (e, targetId) => {
    e.preventDefault() // Empêcher le comportement par défaut du lien

    const targetElement = document.getElementById(targetId)
    window.scrollTo({
      top: targetElement.offsetTop - 60, // Décalage de 60px (ajuste cette valeur)
      behavior: 'smooth',
    })
  }

  return (
    <header className='text-white relative' id='accueil'>
      <nav className='flex pt-10 h-dvh justify-around'>
        <div className=''>
          <Link to='/' onClick={resetSearchBar}>
            <img
              src={LogoLetsCook}
              alt='Logo'
              className='max-w-20 max-h-20 absolute top-4 left-8 filtergrayscale'
            ></img>
          </Link>
          {/* Lien "Accueil" qui réinitialise les filtres */}
          <Link
            to='/'
            onClick={resetSearchBar}
            className='hover:text-gray-400 hover:text-lg'
          >
            Accueil
          </Link>
          <button
            className='ml-4 hover:text-gray-400 hover:text-lg'
            onClick={togglePopup}
          >
            Ajoutez une recette
          </button>
        </div>
      </nav>

      {/* BUTTON QUI FAIT DEFILER VERS LES ARTICLES */}
      <div className='flex justify-center'>
        <button
          href='#articles'
          onClick={(e) => scrollToSection(e, 'articles')}
          className='explore rounded-md p-2'
        >
          Explorez la passion de nos recettes
        </button>
      </div>
    </header>
  )
}

export default Header
