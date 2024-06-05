document.addEventListener('DOMContentLoaded', function() {
    const generateQuestionButton = document.getElementById('generateQuestionButton');
    const sendButton = document.getElementById('sendButton');
    const createYoursButton = document.getElementById('createYoursButton');
    const shareLinkContainer = document.getElementById('shareLinkContainer');
    const shareLink = document.getElementById('shareLink');
    const questionForm = document.getElementById('questionForm');

    const predefinedQuestions = [
        "What's your favorite memory with me?",
        "What do you think is my best quality?",
        "What's one thing you've always wanted to ask me?",
        "What's your favorite thing about me?",
        "What do you think I should improve on?"
    ];

    generateQuestionButton.addEventListener('click', function() {
        const randomQuestion = predefinedQuestions[Math.floor(Math.random() * predefinedQuestions.length)];
        document.getElementById('question').value = randomQuestion;
    });

    sendButton.addEventListener('click', function() {
        const question = document.getElementById('question').value;
        if (question.trim() === "") {
            alert("Please enter a question.");
            return;
        }

        const baseUrl = window.location.origin;
        const link = `${baseUrl}/answer.html?question=${encodeURIComponent(question)}`;
        shareLink.value = link;
        shareLinkContainer.style.display = 'block';
    });

    createYoursButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    // Animation button redirects to create yours section
    const animationButton = document.querySelector('.animation');
    animationButton.addEventListener('click', function() {
        window.location.href = '#createYoursButton';
    });
});
