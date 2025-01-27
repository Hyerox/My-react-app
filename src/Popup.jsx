import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear'

function Popup({
  isPopupOpen,
  togglePopup,
  addRecipe,
  userRecipes, // Liste des recettes ajoutées par l'utilisateur
  removeRecipe = () => {},
}) {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    difficulty: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewRecipe((prev) => ({ ...prev, [name]: value }))
  }

  const resetPopup = () => {
    setNewRecipe({ title: '', difficulty: '', description: '' })
  }

  const handleAddRecipe = () => {
    if (newRecipe.title && newRecipe.difficulty && newRecipe.description) {
      addRecipe(newRecipe) // Ajoute la recette
      setNewRecipe({ title: '', difficulty: '', description: '' }) // Réinitialise les champs
    } else {
      alert('Veuillez remplir tous les champs')
    }
  }

  return (
    isPopupOpen && (
      <div className='popup-overlay'>
        <div className='popup-content'>
          <h2>Ajoutez une recette !</h2>
          <hr />
          <div className='flex flex-col justify-center items-center gap-2'>
            <label htmlFor='RecipeTitle'>Titre de recette</label>
            <input
              type='text'
              name='title'
              placeholder='ex: pâtes carbonara'
              value={newRecipe.title}
              onChange={handleChange}
              className='w-full px-4 py-1.5 mb-2 rounded-md bg-white'
            />
            <label htmlFor='RecipeDifficulty'>Difficulté de recette /5</label>
            <input
              type='number'
              name='difficulty'
              placeholder='ex: 4'
              value={newRecipe.difficulty}
              onChange={handleChange}
              className='w-full px-4 py-1.5 mb-2 rounded-md bg-white'
              min='1'
              max='5'
            />
            <label htmlFor='RecipeDescription'>Description de recette</label>
            <textarea
              name='description'
              placeholder='Votre opinion sur la recette'
              rows='3'
              value={newRecipe.description}
              onChange={handleChange}
              className='w-full px-4 py-1.5 mb-2 rounded-md bg-white text-black'
            />
          </div>
          <button className='green mr-2' onClick={handleAddRecipe}>
            Valider
          </button>
          <button className='blue' onClick={resetPopup}>
            Reset
          </button>
          <button
            className='red'
            onClick={() => {
              resetPopup()
              togglePopup()
            }}
          >
            Fermer
          </button>
          <hr />
          <h2>Vos recettes :</h2>
          {userRecipes.length > 0 ? (
            userRecipes.map((recipe, index) => (
              <div key={index} className='flex items-center rounded-md mb-1'>
                <p className='text-sm text-start flex-1'>{recipe.title}</p>
                <ClearIcon
                  className='flex justify-end hover:bg-red-500 cursor-pointer'
                  onClick={() => removeRecipe(index)}
                />
              </div>
            ))
          ) : (
            <p>Aucune recette ajoutée pour l'instant.</p>
          )}
        </div>
      </div>
    )
  )
}

export default Popup
