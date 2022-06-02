import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { Card } from './Card.js'

const style = {
  width: 400,
}

export const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: 'Write a cool JS library',
        card_type: "⠿ 링크",
      },
      {
        id: 2,
        text: 'Make it generic enough',
        card_type: "⠿ 텍스트",

      },
      {
        id: 3,
        text: 'Write README',
        card_type: "⠿ 사진",
      },
    ])

    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        }),
      )
    }, [])

    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          card_type={card.card_type}
          moveCard={moveCard}
        />
      )
    }, [])

    return (
      <>
        <div style={style}>
            {cards.map((card, i) => renderCard(card, i))}
        </div>
      </>
    )
  }
}
