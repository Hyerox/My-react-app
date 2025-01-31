import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear'
import ModeEditIcon from '@mui/icons-material/ModeEdit'

function Popup({
  isPopupOpen,
  togglePopup,
  addRecipe,
  userRecipes,
  removeRecipe = () => {},
}) {
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    difficulty: '',
    description: '',
    ingredients: '',
    instructions: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [ingredientsList, setIngredientsList] = useState([])
  const [instructionsList, setInstructionsList] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewRecipe((prev) => ({ ...prev, [name]: value }))
  }

  const resetPopup = () => {
    setNewRecipe({
      title: '',
      difficulty: '',
      description: '',
      ingredients: '',
      instructions: '',
    })
    setErrorMessage('')
    setIngredientsList([])
    setInstructionsList([])
  }

  const handleAddRecipe = () => {
    const { title, difficulty, description } = newRecipe

    if (
      !title ||
      !difficulty ||
      !description ||
      !ingredientsList.length ||
      !instructionsList.length
    ) {
      setErrorMessage('Tous les champs doivent être remplis.')
      return
    }

    const difficultyValue = Number(difficulty)
    if (difficultyValue < 1 || difficultyValue > 5) {
      setErrorMessage('La difficulté doit être comprise entre 1 et 5.')
      return
    }

    addRecipe({
      ...newRecipe,
      ingredients: ingredientsList,
      instructions: instructionsList,
    })
    resetPopup()
  }

  const ajoutListe = (field) => {
    if (newRecipe[field].trim() === '') return

    if (field === 'ingredients') {
      setIngredientsList((prev) => [...prev, newRecipe[field]])
    } else if (field === 'instructions') {
      setInstructionsList((prev) => [...prev, newRecipe[field]])
    }

    setNewRecipe((prev) => ({ ...prev, [field]: '' }))
  }

  const handleAddListKey = (e, field) => {
    if (e.key === 'Enter') {
      ajoutListe(field)
    }
  }

  const quittePopup = (e) => {
    if (e.target.classList.contains('popup-overlay')) {
      togglePopup()
      resetPopup()
    }
  }

  return (
    isPopupOpen && (
      <div className='popup-overlay' onClick={quittePopup}>
        <div className='popup-content'>
          <h2>Ajoutez une recette !</h2>
          <hr />
          {errorMessage && (
            <p className='text-red-500 text-sm mb-2'>{errorMessage}</p>
          )}

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

            {/* AJOUT INGREDIENTS */}

            <label htmlFor='RecipeIngredients'>Ingrédients</label>
            <div className='flex items-center w-full gap-2'>
              <input
                type='text'
                name='ingredients'
                className='w-full px-4 py-1.5 rounded-md bg-white'
                placeholder='ex: Tomate'
                value={newRecipe.ingredients}
                onChange={handleChange}
                onKeyDown={(e) => handleAddListKey(e, 'ingredients')}
              />

              <button
                type='button'
                onClick={() => ajoutListe('ingredients')}
                className='px-4 py-1.5 bg-blue-500 text-white rounded-md'
              >
                Ajouter
              </button>
            </div>

            {/*LISTE INGREDIENTS */}

            <ul className='list-disc flex flex-col w-full px-4'>
              {ingredientsList.map((ingredient, index) => (
                <li
                  key={index}
                  className='bg-gray-600 p-1 justify-between break-words flex mb-2'
                >
                  {ingredient}
                  <ClearIcon
                    className='ml-2 cursor-pointer'
                    onClick={() =>
                      setIngredientsList((prev) =>
                        prev.filter((_, i) => i !== index)
                      )
                    }
                  />
                </li>
              ))}
            </ul>

            {/* AJOUT D'INSTRUCTIONS */}

            <label htmlFor='RecipeInstructions'>Instructions</label>
            <div className='flex items-center gap-2 w-full'>
              <input
                type='text'
                name='instructions'
                className='w-full px-4 py-1.5 rounded-md bg-white'
                placeholder='ex: Éplucher la tomate, la couper en cubes'
                value={newRecipe.instructions}
                onChange={handleChange}
                onKeyDown={(e) => handleAddListKey(e, 'instructions')}
              />
              <button
                type='button'
                onClick={() => ajoutListe('instructions')}
                className='px-4 py-1.5 bg-blue-500 text-white rounded-md'
              >
                Ajouter
              </button>
            </div>

            {/* LISTE INSTRUCTIONS */}

            <ul className='list-disc flex flex-col w-full px-4'>
              {instructionsList.map((instruction, index) => (
                <li
                  key={index}
                  className='bg-gray-600 p-1 break-words flex justify-between mb-2'
                >
                  {instruction}
                  <ClearIcon
                    className='ml-2 cursor-pointer'
                    onClick={() =>
                      setInstructionsList((prev) =>
                        prev.filter((_, i) => i !== index)
                      )
                    }
                  />
                </li>
              ))}
            </ul>
          </div>

          <hr className='w-50 mx-auto my-2 mt-4' />

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

          <hr className='w-50 mx-auto my-2' />
          <h2>Vos recettes :</h2>
          {userRecipes.length > 0 ? (
            userRecipes.map((recipe, index) => (
              <div key={index} className='flex items-center rounded-md mb-1'>
                <p className='text-sm text-start flex-1'>{recipe.title}</p>
                <ModeEditIcon />
                <ClearIcon
                  className='hover:bg-red-500 cursor-pointer'
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
