import update from 'immutability-helper'
import { useCallback, useState, useRef } from 'react'
import { Card } from './Card.js'
import ModalView from '../LinkTree/ModalView';  // ModalView.js file

const style = {
  width: 320,
}

//cardcontainer :: card list 라고 보면 될듯
export const Container = (props) => {
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

  const [newCardType, setNewCardType] = useState(props.newCardType)
  const [createNewCard, setCreateNewCard] = useState(props.createNewCard);

  const nextId = useRef(4);
  const onCreate = () => {
    const newCard = {
      id: nextId.current,
      card_header: "",
      card_type: props.card_type,
      // card_type: blockType,
    };

    console.log("new card type: ", newCard);
    // console.log("new card type: ", props.card_type);

    setCards([...cards, newCard]);
    nextId.current += 1;

    // return (
    //   <div style={style}>
    //   {/* <CreateCard/> */}
    //    {cards.map((card, i) => renderCard(card, i))}
    //   </div>
    // )
  }

  // const [newCardType, setNewCardType] = useState("");

  // stream: 하위(ModalView) -> 상위(card container)
  const getNewCardType = async (cT) => {
    setNewCardType(cT);// cT: cardType
    if(newCardType) {
      await setCreateNewCard(true);
      console.log(cT);
      console.log(createNewCard);

      const headersType = {
        link : '⠿ 링크',
        text : '⠿ 텍스트',
        picture : '⠿ 사진',
      };
      let header = '';
      for (const [key, value] of Object.entries(headersType)){
        if(key == cT){
          header = value;
        }
      }

      const newCard = {
        id: nextId.current,
        card_header: header,
        // card_type: props.card_type,
        card_type: cT,
      };

      console.log("new card type: ", newCard);

      setCards([...cards, newCard]);
      nextId.current += 1;

      // await onCreate();
    }
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
    // onCreate(card.card_type);
    // console.log("render cards", card)
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        card_type={card.card_type}
        card_header={card.card_header}
        movable={card.movable}
        moveCard={moveCard}
        // onCreate={onCreate}
      />
    )
  }, [])


  // 어디에다가 onCreate를 추가해야 할까?

  // if(createNewCard){
  //   onCreate();
  // }

  return (
    <>
      <div style={style}>
         {/* <CreateCard/> */}
          {cards.map((card, i) => renderCard(card, i))}
      </div>
      <ModalView getNewCardType={getNewCardType}/>
    </>
  )
}
