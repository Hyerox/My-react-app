import React from 'react'
import { useParams } from 'react-router-dom'
import Recipe from './api/recettes.json'
import StarIcon from '@mui/icons-material/Star'

function Article() {
  const { id } = useParams()
  const recipe = Recipe.find((r) => r.id === id)

  if (!recipe) {
    return <h1>Recette non trouvée</h1>
  }

  return (
    <main className='bg-[rgba(33,33,43,1)] text-white'>
      <article className='flex justify-center py-4 text-white' key={recipe.id}>
        <div className='CardContainer border-black border-2 rounded w-64 text-center flex flex-col relative'>
          <h2 className='p-2'>{recipe.title}</h2>
          <img
            src={recipe.imageUrl || 'placeholder-image.jpg'}
            alt={recipe.title}
            className='w-full h-[252px] object-cover'
          />
          <p className='pb-4'>{recipe.description}</p>
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
    </main>
  )
}

export default Article
