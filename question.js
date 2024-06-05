document.addEventListener('DOMContentLoaded', function() {
    const questionForm = document.getElementById('questionForm');
    const generateLinkButton = document.getElementById('generateLinkButton');
    
    // Function to share the link via various social media platforms
    function shareLink(platform) {
        const url = window.location.href;
        let shareUrl = '';
        
        switch(platform) {
            case 'whatsapp':
                shareUrl = `whatsapp://send?text=${encodeURIComponent(url)}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
                break;
            // Add more cases for other social media platforms
        }
        
        window.open(shareUrl, '_blank');
    }
    
    // Event listener for sharing via social media icons
    document.getElementById('whatsapp').addEventListener('click', function() {
        shareLink('whatsapp');
    });
    
    document.getElementById('facebook').addEventListener('click', function() {
        shareLink('facebook');
    });
    
    document.getElementById('twitter').addEventListener('click', function() {
        shareLink('twitter');
    });

    // Event listener for question submission
    questionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const question = document.getElementById('question').value;
        if (question.trim() === "") {
            alert("Please enter a question.");
            return;
        }

        // Here you can send the question to the author via an API or backend service
        alert("Question sent to the author: " + question);

        // Optionally, you can redirect the user to a confirmation page
        // window.location.href = "confirmation.html";
    });

    // Event listener for generating own link
    generateLinkButton.addEventListener('click', function() {
        // Redirect the user to a page where they can generate their own link
        window.location.href = "generate-link.html";
    });
});

