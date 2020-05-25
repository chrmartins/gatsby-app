import React from 'react'

import cardStyles from './card.module.scss'

const Card = () => {
  return (
    <div className={cardStyles.card}>
      <h1>Title Card</h1>
      <h1 className={cardStyles.h1}>Title 2 Card</h1>
      <p>
        É um fato conhecido de todos que um leitor se distrairá com o conteúdo
        de texto legível de uma página quando estiver examinando sua
        diagramação.
      </p>
      <button>Button Card</button>
    </div>
  )
}

export default Card
