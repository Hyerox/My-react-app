import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
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
  const [recipes, setRecipes] = useState(Recipe)

  const togglePopup = () => setIsPopupOpen(!isPopupOpen)

  const addRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, { ...newRecipe, id: prev.length + 1 }])
  }

  const uniqueCategories = [...new Set(recipes.map((r) => r.category))]

  const resetSearchBar = () => {
    setSearchTerm('')
    setSelectedCategory('')
  }

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
              setSelectedCategory={setSelectedCategory}
              uniqueCategories={uniqueCategories}
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
        existingRecipes={recipes.slice(-5)} // Dernières 5 recettes ajoutées
      />
      <Footer togglePopup={togglePopup} resetSearchBar={resetSearchBar} />
    </>
  )
}

export default App
