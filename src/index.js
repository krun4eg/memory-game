document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
    {
        name: 'fries',
        img: 'src/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png'
    },
    {
        name: 'fries',
        img: 'src/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'src/images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        img: 'src/images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'src/images/pizza.png'
    },
    {
        name: 'milkshake',
        img: 'src/images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'src/images/hotdog.png'
    }]

    cardArray.sort(() => 0.5 - Math.random());
    console.log(cardArray);

    const grid = document.querySelector('.grid');
    const resulrDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsWon = [];

    function createBord(){
        for(let i = 0; i<cardArray.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'src/images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard)
            grid.appendChild(card);
        }
    }

    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img');
        const optioneOneId = cardsChosenIds[0];
        const optioneTwoId = cardsChosenIds[1];
        if (optioneOneId == optioneTwoId){
            alert('You have clicked the same image');
            cards[optioneOneId].setAttribute('src', 'src/images/blank.png');
            cards[optioneTwoId].setAttribute('src', 'src/images/blank.png');
        } else if (cardsChosen[0] === cardsChosen[1]){
            alert('You have found the match');
            cards[optioneOneId].setAttribute('src', 'src/images/white.png');
            cards[optioneTwoId].setAttribute('src', 'src/images/white.png');
            cards[optioneOneId].removeEventListener('click', flipCard);
            cards[optioneTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optioneOneId].setAttribute('src', 'src/images/blank.png');
            cards[optioneTwoId].setAttribute('src', 'src/images/blank.png');
            alert('sorry');
        }

        cardsChosen = [];
        cardsChosenIds = [];
        resulrDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length / 2)
        {
            resulrDisplay.textContent = 'You have won';
        }
    }

    createBord();

})