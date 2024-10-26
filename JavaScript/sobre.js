function toggleInfo(index) {
    const infoSection = document.getElementById('info');
    const infoImage = document.getElementById('info-image');
    const infoDescription = document.getElementById('info-description');


    const data = [{
            image: '../Imagens/SobreHotel/AntonioLuiz.jpg',
            description: 'Antônio Luiz: É descrito como o "coração do hotel", sempre pronto para receber os hóspedes com um sorriso. Ele é responsável pelo atendimento ao cliente, garantindo que todos se sintam acolhidos e confortáveis durante a estadia. Seu papel é fundamental para criar uma atmosfera amigável e calorosa no hotel. .'
        },
        {
            image: '../Imagens/SobreHotel/BrenoJosé.jpg',
            description: 'Breno José: é o "visionário criativo". Ele traz as ideias inovadoras e criativas para o hotel, ajudando a moldar a experiência que os hóspedes terão. Sua capacidade de sonhar e pensar fora da caixa é essencial para criar um ambiente único e atraente para os visitantes.'
        },
        {
            image: '../Imagens/SobreHotel/JoãoBastos.jpg',
            description: 'João Bastos: Ele é o responsável pelas finanças do hotel. João teve a ideia inicial de construir o hotel, mostrando-se um líder visionário e prático, preocupado com a viabilidade financeira do projeto e a administração das economias dos amigos. Seu papel é crucial para garantir que o hotel tenha os recursos necessários para funcionar e prosperar.'
        },
        {
            image: '../Imagens/SobreHotel/Gui.jpg',
            description: 'Guilherme Kaique: Ele é o responsável por gerenciar as operações do hotel. Guilherme cuida de todos os aspectos práticos do dia a dia, garantindo que tudo funcione perfeitamente. Seu papel é vital para a eficiência do hotel e para a satisfação dos hóspedes, pois ele supervisiona a equipe e as atividades..'
        },
    ];


    infoImage.src = data[index - 1].image;
    infoDescription.textContent = data[index - 1].description;


    infoSection.style.display = 'block';
}

function closeInfo() {
    const infoSection = document.getElementById('info');
    infoSection.style.display = 'none';
}
let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(showNextSlide, 9000);