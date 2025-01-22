import { useState } from 'react'
import LogoLetsCook from './assets/logoLetsCook.svg'
import SearchIcon from '@mui/icons-material/Search'
import AddCircleIcon from '@mui/icons-material/AddCircle'

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen)
  }

  return (
    <header className='text-white relative'>
      <nav className='flex justify-between pt-10 h-dvh'>
        <div className='ml-40'>
          <a href='#'>
            <img
              src={LogoLetsCook}
              alt='Logo'
              className='max-w-20 max-h-20 absolute top-4 left-8 filtergrayscale'
            ></img>
          </a>
          <a href='#' className='hover:text-blue-500 hover:text-lg'>
            Accueil
          </a>
        </div>
        <div className=' '>
          <input
            type='text'
            placeholder='Search...'
            className='rounded-md placeholder:pl-4 text-black'
          />
          <a href='#'>
            <SearchIcon className='h-5 w-5 mr-10' />
          </a>
          <a href='#' onClick={togglePopup}>
            <AddCircleIcon className='h-8 w-8 mr-10' />
          </a>
        </div>
      </nav>

      {isPopupOpen && (
        <div className='popup-overlay'>
          <div className='popup-content'>
            <h2>Add a recipe !</h2>
            <div className='flex flex-col justify-center items-center gap-2'>
              <label for='RecipeTitle'>Recipe Title</label>
              <input
                type='text'
                placeholder='ex: pâtes carbonara'
                className='w-full px-4 py-2 mb-4 rounded-md'
              />
              <label for='RecipeDifficulty'>Recipe difficulty /5</label>
              <input
                type='text'
                placeholder='ex: 4'
                className='w-full px-4 py-2 mb-4 rounded-md'
              />
              <label for='RecipeDescription'>Recipe description</label>
              <textarea
                type='text'
                placeholder='Votre opinion sur la recette'
                rows='3'
                className='text-black w-full px-4 py-2 mb-4 rounded-md'
              />
            </div>
            <button className='green mr-2'>Validate</button>
            <button className='blue mr-2'>Reset</button>
            <button className='red' onClick={togglePopup}>
              Close
            </button>
            <h2>Vos anciennes recettes:</h2>
            <a className='text-sm' href='#'>
              Purée de patate de frite
            </a>
            <br />
            <a className='text-sm' href='#'>
              Caviar de saumon de poisson
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
