import React, { useEffect, useState } from 'react'
import CharacterCard from '../pages/Character/components/CharacterCard'
import { useCharacter } from '../pages/Character/hooks/useCharacter';
function CharacterList() {
    const { characters } = useCharacter()
  return (
    <div className='grid grid-cols-4 gap-10'>
        {
            characters.map((character)=>
                <CharacterCard key={character.id} character = {character}/>
            )
        }
    </div>
  )
}

export default CharacterList;