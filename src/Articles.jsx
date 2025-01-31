import React from 'react'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import Recipe from './api/recettes.json'

function Articles({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  setSelectedCategory,
  uniqueCategories,
  uniqueDifficulties,
}) {
  // Filtrer les recettes en fonction de la recherche, de la catégorie et de la difficulté
  const filteredRecipes = Recipe.filter((r) => {
    const matchesSearch = r.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory
      ? r.category === selectedCategory
      : true

    // Filtrage basé sur la difficulté, avec conversion de selectedDifficulty en nombre
    const matchesDifficulty = selectedDifficulty
      ? r.difficulty === Number(selectedDifficulty) // Conversion en nombre pour la comparaison
      : true

    // Log pour voir ce qui est filtré
    console.log(r.title, matchesSearch, matchesCategory, matchesDifficulty)

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  return (
    <main className='bg-[rgba(33,33,43,1)] text-white'>
      <div className='flex justify-center flex-wrap items-center gap-4 p-2'>
        {/* FILTRE SEARCH BAR */}
        <input
          type='text'
          placeholder='Recherche de recette'
          className='p-1 rounded-lg text-center text-black bg-white'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* FILTRE DE CATÉGORIE */}
        <select
          className='text-black p-1 rounded-lg bg-white'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {/* DROPDOWN AVEC FONCTION POUR EVITER LES DOUBLONS DANS L'AFFICHAGE */}
          <option value=''>Toutes les catégories</option>
          {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* FILTRE DE DIFFICULTE */}
        <select
          className='text-black p-1 rounded-lg bg-white'
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
        >
          <option value=''>Toutes les difficultés</option>
          {uniqueDifficulties.map((difficulty, index) => (
            <option key={index} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </div>

      <section className='gridContainer' id='articles'>
        {/* AFFICHAGE DES RECETTES */}
        {filteredRecipes.map((recipe) => (
          <article className='grid justify-center' key={recipe.id}>
            <div className='CardContainer border-black border-2 rounded-sm w-64 text-center flex flex-col relative'>
              <h2 className='p-2'>{recipe.title}</h2>
              <img
                src={recipe.imageUrl || 'placeholder-image.jpg'}
                alt={recipe.title}
                className='w-full h-[252px] object-cover'
              />
              <p className='pb-4'>{recipe.description}</p>
              <div className='absolute bottom-0.5 left-1'>
                <Link to={`/${recipe.id}`} className='text-blue-500'>
                  Recette
                </Link>
              </div>
              <div className='mt-auto flex justify-end items-center'>
                <h2 className='text-sm items-center'>Difficulté</h2>
                <h2>
                  {[...Array(recipe.difficulty)].map((_, index) => (
                    <StarIcon key={index} className='text-yellow-500' />
                  ))}
                </h2>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}

export default Articles
