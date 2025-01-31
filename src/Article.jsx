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
    <main className='bg-[rgba(33,33,43,1)] text-white '>
      <div className='flex justify-evenly text-white py-6 items-center '>
        <img src={recipe.imageUrl} alt={recipe.title} className='cadre h-100' />
        <div className='flex flex-col gap-2 info max-w-100'>
          <h2 className='text-lg text-center'>{recipe.title}</h2>
          <h4 className='text-sm text-center'>{recipe.category}</h4>
          <p className='underline underline-offset-2 text-center'>
            Ingrédients
          </p>
          <ul>
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>• {ingredient}</li>
            ))}
          </ul>
          <p className='underline underline-offset-2 text-center'>
            Instructions
          </p>
          <ul>
            {recipe.instructions?.map((instruction, index) => (
              <li key={index}>• {instruction}</li>
            ))}
          </ul>
          <h1 className='underline underline-offset-2 text-center'>
            Niveau de difficulté
          </h1>
          <p className='text-center'>
            {[...Array(recipe.difficulty)].map((_, index) => (
              <StarIcon key={index} className='text-yellow-500' />
            ))}
          </p>
        </div>
      </div>
    </main>

    // <main className='bg-[rgba(33,33,43,1)] text-white'>
    //   <article className='flex justify-center py-4 text-white' key={recipe.id}>
    //     <div className='CardContainer border-black border-2 rounded-sm w-64 text-center flex flex-col relative'>
    //       <h2 className='p-2'>{recipe.title}</h2>
    //       <img
    //         src={recipe.imageUrl || 'placeholder-image.jpg'}
    //         alt={recipe.title}
    //         className='w-full h-[252px] object-cover'
    //       />
    //       <p className='pb-4'>Ingrédients : {recipe.ingredients}</p>
    //       <p className='pb-4'>Instructions : {recipe.instructions}</p>
    //       <div className='mt-auto flex justify-end items-center'>
    //         <h2 className='text-sm items-center'>Difficulté</h2>
    //         <h2>
    //           {[...Array(recipe.difficulty)].map((_, index) => (
    //             <StarIcon key={index} className='text-yellow-500' />
    //           ))}
    //         </h2>
    //       </div>
    //     </div>
    //   </article>
    // </main>
  )
}

export default Article
