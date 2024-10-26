function toggleDetails(cardId, images) {
    const allDetailsCards = document.querySelectorAll('.details-card');
    allDetailsCards.forEach(card => {
        card.style.display = 'none';
    });


    const selectedCard = document.getElementById(cardId);
    if (selectedCard) {
        selectedCard.style.display = 'block';
        let currentDetailImageIndex = 0;

        const detailImageElement = selectedCard.querySelector('.details-image');


        setInterval(() => {
            currentDetailImageIndex = (currentDetailImageIndex + 1) % images.length;
            detailImageElement.style.backgroundImage = `url('${images[currentDetailImageIndex]}')`;
        }, 3000);
    }
}


function initImageCarousel() {
    const cards = document.querySelectorAll('.card');


    const cardImages = {
        'QuartoBasico': [
            '../Imagens/Quartos_e_Banheiros/01QuartoBasico.jpg',
            '../Imagens/Quartos_e_Banheiros/05banheirobasico.jpeg'
        ],
        'QuartoMaster': [
            '../Imagens/Quartos_e_Banheiros/Quarto Hotel Master.jpg',
            '../Imagens/Quartos_e_Banheiros/Banheiro-Master.jpeg',
            '../Imagens/ÁreadeEventos/Cinemax Master.jpeg'
        ],
        'QuartoDeluxe': [
            '../Imagens/Quartos_e_Banheiros/04QuartoDeluxe.jpg',
            '../Imagens/Quartos_e_Banheiros/Banheiro-Deluxe.jpeg',
            '../Imagens/ÁreadeEventos/Cinemax Deluxe.jpeg',
            '../Imagens/ÁreadeEventos/Piscina.jpeg'
        ]
    };


    cards.forEach(card => {
        let currentImageIndex = 0;
        const cardType = card.getAttribute('data-type');
        const images = cardImages[cardType];

        const imageElement = card.querySelector('.image');

        setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            imageElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        }, 4000);
    });
}


window.onload = function() {
    initImageCarousel();
};