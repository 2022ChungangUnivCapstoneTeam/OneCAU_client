import update from 'immutability-helper'
import { useCallback, useState, useRef } from 'react'
import { Card } from './Card.js'

const style = {
  width: 320,
}

export const Container = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      card_type: 'link',
      card_header: "⠿ 링크",
    },
    {
      id: 2,
      card_type: 'text',
      card_header: "⠿ 텍스트",
    },
    {
      id: 3,
      card_type: 'picture',
      card_header: "⠿ 사진",
    },
  ])

  const [inputs, setInputs] = useState({
    id: '',
    card_type: '',
    card_header: '',
  })

  // const onChange = e => {
  //   const { name, value } = e.target;
  //   setInputs({
  //     ...inputs,
  //     [id]: value
  //   });
  // };

  const nextId = useRef(4);
  const onCreate = () => {
    const newCard = {
      id: nextId.current,
      card_header: "",
      card_type: "",
    };

    setCards([...cards, newCard]);

    // setInputs({

    // });

    nextId.current += 1;
  }

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    // console.log("HOHOHo!!")
    // console.log(cards.find(elem => elem.card_type == 'profile'))
    // if(cards.indexOf() == 'profile'){
    setCards((prevCards) =>
    update(prevCards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, prevCards[dragIndex]],
      ],
    }),
    // console.log("dragIndex: ", dragIndex),
    // console.log("hoverIndex: ", hoverIndex),
  )}, [])

  const renderCard = useCallback((card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        card_type={card.card_type}
        card_header={card.card_header}
        movable={card.movable}
        moveCard={moveCard}
      />
    )
  }, [])

  return (
    <>
      <div style={style}>
         {/* <CreateCard/> */}
          {cards.map((card, i) => renderCard(card, i))}
      </div>
    </>
  )
}
