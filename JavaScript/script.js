document.addEventListener("DOMContentLoaded", function() {
    const feedbackCards = document.querySelectorAll('.feedback-card');
    let currentIndex = 0;
    const totalCards = feedbackCards.length;

    function showNextFeedback() {

        feedbackCards[currentIndex].classList.remove('active');


        currentIndex = (currentIndex + 1) % totalCards;


        feedbackCards[currentIndex].classList.add('active');
    }


    feedbackCards[currentIndex].classList.add('active');


    setInterval(showNextFeedback, 3000);
});