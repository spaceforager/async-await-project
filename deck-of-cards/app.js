// $(function () {
let baseURL = 'https://deckofcardsapi.com/api/deck';

// 1. 
async function part1() {
    let { data } = await axios.get(`${baseURL}/new/draw/`)
    console.log(data);
    let { suit, value } = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);

}

part1()

// 2. 
async function part2() {
    let firstCard = null;
    let res = await axios.get(`${baseURL}/new/draw/`)

    firstCard = res.data.cards[0];
    let deckID = res.data.deck_id;

    let secondRes = await axios.get(`${baseURL}/${deckID}/draw/`);


    let secondCard = secondRes.data.cards[0];
    cardsArr = [firstCard, secondCard];
    cardsArr.forEach(card => {
        console.log(
            `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
        );

    });
}
part2();

// 3. 
async function part3() {
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let res = await axios.get(`${baseURL}/new/shuffle/`)
    let deckID = res.data.deck_id;
    $btn.show();

    $btn.on('click', async function () {
        let res = await axios.get(`${baseURL}/${deckID}/draw/`)
        let cardSrc = res.data.cards[0].image;
        let angle = Math.random() * 90 - 45;
        let randomX = Math.random() * 40 - 20;
        let randomY = Math.random() * 40 - 20;
        $cardArea.append(
            $('<img>', {
                src: cardSrc,
                css: {
                    transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
            })
        );
        if (res.data.remaining === 0) $btn.remove();

    });

}

part3();
