import React, { useState } from 'react'

function Popup({ isPopupOpen, togglePopup, addRecipe, existingRecipes = [] }) {
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
      addRecipe(newRecipe)
      setNewRecipe({ title: '', difficulty: '', description: '' })
    } else {
      alert('Veuillez remplir tous les champs')
    }
  }

  return (
    isPopupOpen && (
      <div className='popup-overlay'>
        <div className='popup-content'>
          <h2>AJoutez une recette !</h2>
          <div className='flex flex-col justify-center items-center gap-2 '>
            <label htmlFor='RecipeTitle'>Recipe Title</label>
            <input
              type='text'
              name='title'
              placeholder='ex: pâtes carbonara'
              value={newRecipe.title}
              onChange={handleChange}
              className='w-full px-4 py-2 mb-4 rounded-md'
            />
            <label htmlFor='RecipeDifficulty'>Recipe Difficulty /5</label>
            <input
              type='number'
              name='difficulty'
              placeholder='ex: 4'
              value={newRecipe.difficulty}
              onChange={handleChange}
              className='w-full px-4 py-2 mb-4 rounded-md'
            />
            <label htmlFor='RecipeDescription'>Recipe Description</label>
            <textarea
              name='description'
              placeholder='Votre opinion sur la recette'
              rows='3'
              value={newRecipe.description}
              onChange={handleChange}
              className='text-black w-full px-4 py-2 mb-4 rounded-md'
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
              setNewRecipe({ title: '', difficulty: '', description: '' })
              togglePopup()
            }}
          >
            Fermer
          </button>
          <h2>Vos anciennes recettes:</h2>
          <div
            className='overflow-y auto max-h-40'
            style={{ scrollbarWidth: 'thin' }}
          >
            {existingRecipes.map((recipe, index) => (
              <p key={index} className='text-sm'>
                {recipe.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    )
  )
}

export default Popup
