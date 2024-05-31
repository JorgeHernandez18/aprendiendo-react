import React from 'react'

export default function CharacterCard({character}) {
  return (
    <div className='p-4 rounded-lg transform duration-300 hover:scale-110 hover:bg-slate-500 bg-slate-700 text-white'>
        <img className='rounded-lg object-cover' src={character.image} alt="imagen character" />
        <h1 className='text-2xl font-bold'>{character.name}</h1>
        <p className='font-bold'>{character.status}</p>
        <p className='mt-4'>{character.species}</p>
    </div>
  )
}
