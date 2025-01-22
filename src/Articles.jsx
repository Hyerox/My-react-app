import Recipe from './api/recettes.json'
import StarIcon from '@mui/icons-material/Star'

function Articles() {
  Recipe.map((recipe) => console.log(Array(recipe.difficulty)))
  return (
    <section className='gridContainer py-4 text-white'>
      {Recipe.map((recipe) => (
        <article className='grid' key={recipe.id}>
          <div className='CardContainer border-black border-2 rounded w-64 text-center flex flex-col'>
            <h2 className='p-2'>{recipe.title}</h2>
            <img
              src={recipe.imageUrl}
              className='w-full h-[252px] object-cover'
            />
            <p className='pb-4'>{recipe.description}</p>
            <div className='mt-auto flex justify-end items-center'>
              <h2 className='text-sm items-center'>Difficulté</h2>
              <h2>
                {/* Render stars based on difficulty */}
                {[...Array(recipe.difficulty)].map((_, index) => (
                  <StarIcon key={index} className='text-yellow-500' />
                ))}
              </h2>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Articles
