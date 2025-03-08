document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("grid");
    const gameContainer = document.getElementById("game-container");
    const surpresaContainer = document.getElementById("surpresa-container");

    const photos = [
        "img/474189051_1033429415468167_6387317429863973651_n.jpg",
        "img/473723774_17882222271208327_2065523684935977448_n.jpg",
        "img/472048355_617425837503324_516876117531692537_n.jpg",
        "img/470923163_3794414180871963_2753553580648402687_n.jpg",
        "img/467649304_415580004818917_1079932351936179556_n.jpg",
        "img/464019174_1081996046756409_6680544427264349962_n.jpg",
        "img/463025982_849916200654507_1509599978034748669_n.jpg",
        "img/462677988_534750996164203_3496048606259040221_n.jpg",
        "img/459643540_551747993980602_4435490352238040430_n.jpg",
        "img/434469677_743551514591807_4776711535524114848_n.jpg",
        "img/474189051_1033429415468167_6387317429863973651_n.jpg",
        "img/473723774_17882222271208327_2065523684935977448_n.jpg",
        "img/472048355_617425837503324_516876117531692537_n.jpg",
        "img/470923163_3794414180871963_2753553580648402687_n.jpg",
        "img/467649304_415580004818917_1079932351936179556_n.jpg",
        "img/464019174_1081996046756409_6680544427264349962_n.jpg",
        "img/463025982_849916200654507_1509599978034748669_n.jpg",
        "img/462677988_534750996164203_3496048606259040221_n.jpg",
        "img/459643540_551747993980602_4435490352238040430_n.jpg",
        "img/434469677_743551514591807_4776711535524114848_n.jpg",
    ];

    let flippedCards = [];
    let matchedCards = [];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffle(photos);

    photos.forEach((photo, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;

        let img = document.createElement("img");
        img.src = photo;
        card.appendChild(img);

        card.addEventListener("click", function () {
            if (flippedCards.length < 2 && !card.classList.contains("flipped") && !matchedCards.includes(card)) {
                card.classList.add("flipped");
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    setTimeout(checkMatch, 1000);
                }
            }
        });

        grid.appendChild(card);
    });

    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (card1.querySelector("img").src === card2.querySelector("img").src) {
            matchedCards.push(card1, card2);
            flippedCards = [];

            if (matchedCards.length === photos.length) {
                setTimeout(() => {
                    gameContainer.style.display = "none";
                    surpresaContainer.style.display = "flex";
                }, 1000);
            }
        } else {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            flippedCards = [];
        }
    }
});
