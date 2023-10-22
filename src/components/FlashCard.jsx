import React, { useState } from 'react';
import './FlashCard.css'
const CreateCard = ({ onShadowClick, onCreateCard }) => {
  const [word, setWord] = useState('');
  const [description, setDescription] = useState('');
  const [showError, setShowError] = useState(false);

  const hideError = () => {
    setShowError(!showError);
  };

  const errorMessage = showError ? 'Please fill in the word and description!' : '';

  return (
    <div className='create-card'>
      <div className='create-card__shadow' onClick={onShadowClick}></div>
      <div className='create-card__body'>
        <h1>Create New Card</h1>
        <div className='create-card__input-wrapper'>
          <input
            id='word'
            placeholder="Word i.e. 'React'"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <input
            id='description'
            placeholder="Description i.e. 'A front-end JS framework.'"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <button
            id='create-card__button'
            onClick={() => {
              if (word.length === 0 || description.length === 0) {
                setShowError(!showError);
                setTimeout(() => hideError(), 2000);
              } else {
                onShadowClick();
                const newCard = { word, description };
                onCreateCard(newCard);
              }
            }}
          >
            Create!
          </button>
          <div className='create-card__error'>{errorMessage}</div>
        </div>
      </div>
    </div>
  );
};

// const Header = () => {
//   return (
//     <div className='header'>
//       <div className='header-content header-content__left'></div>
//       <div className='header-content header-content__middle'>Flash Cards</div>
//       <div className='header-content header-content__right'></div>
//     </div>
//   );
// };

const Card = ({ frontContent, backContent, img, showPrevCard, showNextCard, cardNumber }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const content = showAnswer ? backContent : frontContent;
  const iconClass = showAnswer ? 'reply' : 'share';
  const cardClass = showAnswer ? 'back' : '';
  const contentClass = showAnswer ? 'back' : 'front';
  const actionClass = showAnswer ? 'active' : '';

  return (
    <div className={`card ${cardClass}`} onClick={() => setShowAnswer(!showAnswer)}>
      <span className='card__counter'>{cardNumber + 1}</span>
      <div className='card__flip-card' onClick={() => setShowAnswer(!showAnswer)}>
        <span className={`fa fa-${iconClass}`}></span>
      </div>
      <div className={`card__content--${contentClass}`}>{content}</div>
      <div className={`card__actions ${actionClass}`}>
        <div
          className='card__prev-button'
          onClick={() => {
            showPrevCard();
            setShowAnswer(false);
          }}
        >
          Prev
        </div>
        <div
          className='card__next-button'
          onClick={() => {
            showNextCard();
            setShowAnswer(false);
          }}
        >
          Next
        </div>
      </div>
    </div>
  );
};

const FlashCard = () => {
  const [cards, setCards] = useState([
    {
        word: "I love to read books.",
        description: "أحب قراءة الكتب."
      },
      {
        word: "The sun shines brightly.",
        description: "الشمس تشرق بلمعان."
      },
      {
        word: "Cats are playful animals.",
        description: "القطط حيوانات لعوبة."
      },
      {
        word: "She enjoys listening to music.",
        description: "إنها تستمتع بالاستماع إلى الموسيقى."
      },
      {
        word: "Family is important to me.",
        description: "العائلة مهمة بالنسبة لي."
      },
      {
        word: "The ocean is vast and beautiful.",
        description: "المحيط واسع وجميل."
      },
      {
        word: "Learning new things is fun.",
        description: "تعلم أشياء جديدة ممتع."
      },
      {
        word: "The moon is bright in the night sky.",
        description: "القمر مشرق في سماء الليل."
      },
      {
        word: "Traveling to new places is exciting.",
        description: "السفر إلى أماكن جديدة مثير."
      },
      {
        word: "Food is delicious and nourishing.",
        description: "الطعام لذيذ ومغذي."
      },
      {
        word: "The sky is blue.",
        description: "السماء زرقاء."
      },
      {
        word: "We play games for fun.",
        description: "نلعب الألعاب للمتعة."
      },
      {
        word: "Gardening is a relaxing hobby.",
        description: "الزراعة هو هواية مريحة."
      },
      {
        word: "Rainbows are colorful and beautiful.",
        description: "الأقواس قوس قزح ملونة وجميلة."
      },
      {
        word: "Travel broadens the mind.",
        description: "السفر يوسع الأفق."
      },
      {
        word: "Nature is full of wonders.",
        description: "الطبيعة مليئة بالعجائب."
      },
      {
        word: "Friends make life more enjoyable.",
        description: "الأصدقاء يجعلون الحياة أكثر متعة."
      },
      {
        word: "The stars twinkle in the night sky.",
        description: "النجوم تتلألأ في سماء الليل."
      },
      {
        word: "Learning a new language is challenging.",
        description: "تعلم لغة جديدة صعب."
      },
      {
        word: "The beach is a peaceful place.",
        description: "الشاطئ مكان هادئ."
      },
      {
        word: "The mountains are majestic.",
        description: "الجبال رائعة."
      },
      {
        word: "Cooking is a creative activity.",
        description: "الطهي نشاط إبداعي."
      },
      {
        word: "Happiness is contagious.",
        description: "السعادة معديه."
      },
      {
        word: "Rain brings life to the earth.",
        description: "المطر يحيي الأرض."
      },
      {
        word: "Kindness goes a long way.",
        description: "اللطف يمضي بعيداً."
      },
      {
        word: "Dancing is a form of expression.",
        description: "الرقص هو شكل من أشكال التعبير."
      },
      {
        word: "Laughter is the best medicine.",
        description: "الضحك هو أفضل دواء."
      },
      {
        word: "Exploring new cultures is enlightening.",
        description: "استكشاف الثقافات الجديدة مثير."
      },
      {
        word: "Learning from mistakes is valuable.",
        description: "التعلم من الأخطاء قيمة."
      },
      {
        word: "The universe is full of mysteries.",
        description: "الكون مليء بالأسرار."
      },
  ]);
  const [cardNumber, setCardNumber] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const hideCreateCard = () => {
    setShowModal(false);
  };

  const showNextCard = () => {
    if (cardNumber + 1 !== cards.length) {
      setCardNumber(cardNumber + 1);
    }
  };

  const showPrevCard = () => {
    if (cardNumber !== 0) {
      setCardNumber(cardNumber - 1);
    }
  };

  const setCard = (card) => {
    const newCards = [...cards, card];
    setCards(newCards);
  };

  const generateDots = () => {
    return cards.map((card, num) => {
      const dotClass = num === cardNumber ? 'active' : '';
      return (
        <span
          key={num}
          className={`card-container__dot fa fa-circle ${dotClass}`}
          onClick={() => setCardNumber(num)}
        />
      );
    });
  };

  const generateCards = () => {
    const content = cards[cardNumber];
    return (
      <Card
        frontContent={content.word}
        backContent={content.description}
        showNextCard={showNextCard}
        showPrevCard={showPrevCard}
        cardNumber={cardNumber}
      />
    );
  };

  return (
    <div className=' pl-2 w-[100vw] overflow-x-hidden'>
      <span className='card-container__icon fa fa-plus' onClick={() => setShowModal(!showModal)} />
      {showModal ? <CreateCard onShadowClick={hideCreateCard} onCreateCard={setCard} /> : ''}
      {generateCards()}
      <div className='card-container__dots-wrapper'>{generateDots()}</div>
    </div>
  );
};

export default FlashCard
