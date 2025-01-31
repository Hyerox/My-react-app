import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Articles from './Articles.jsx'
import Article from './Article.jsx'
import Popup from './Popup.jsx'
import Recipe from './api/recettes.json'

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')
  const [recipes, setRecipes] = useState(Recipe)
  const [userRecipes, setUserRecipes] = useState([])
  console.log('userRecipes:', userRecipes)
  const [showExploreButton, setShowExploreButton] = useState(true) // Nouvel état

  const location = useLocation() // Pour surveiller les changements de route

  const togglePopup = () => setIsPopupOpen(!isPopupOpen)

  const addRecipe = (newRecipe) => {
    setUserRecipes((prev) => [...prev, { ...newRecipe, id: prev.length + 1 }])
  }

  const uniqueCategories = [...new Set(recipes.map((r) => r.category))]
  const uniqueDifficulties = [
    ...new Set(recipes.map((r) => r.difficulty)),
  ].sort()

  const resetSearchBar = () => {
    setSearchTerm('')
    setSelectedCategory('')
  }

  const removeRecipe = (index) => {
    setUserRecipes((prev) => prev.filter((_, i) => i !== index))
  }

  // Surveiller le changement d'URL pour contrôler le bouton "Explorez"
  React.useEffect(() => {
    if (location.pathname === '/') {
      setShowExploreButton(true)
    } else {
      setShowExploreButton(false)
    }
  }, [location.pathname])

  return (
    <>
      <Header togglePopup={togglePopup} resetSearchBar={resetSearchBar} />
      <Routes>
        <Route
          path='/'
          element={
            <Articles
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedCategory={selectedCategory}
              selectedDifficulty={selectedDifficulty}
              setSelectedCategory={setSelectedCategory}
              setSelectedDifficulty={setSelectedDifficulty}
              uniqueCategories={uniqueCategories}
              uniqueDifficulties={uniqueDifficulties}
            />
          }
        />
        <Route path='/:id' element={<Article />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
      <Popup
        isPopupOpen={isPopupOpen}
        togglePopup={togglePopup}
        addRecipe={addRecipe}
        userRecipes={userRecipes}
        removeRecipe={removeRecipe}
      />
      {showExploreButton && (
        <div className='flex justify-center'>
          <button
            onClick={(e) => {
              e.preventDefault()
              const targetElement = document.getElementById('articles')
              window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth',
              })
            }}
            className='explore rounded-md p-2 hover:cursor-pointer'
          >
            Explorez la passion de nos recettes
          </button>
        </div>
      )}
      <Footer togglePopup={togglePopup} resetSearchBar={resetSearchBar} />
    </>
  )
}

export default App
