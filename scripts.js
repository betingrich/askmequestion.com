document.addEventListener('DOMContentLoaded', function() {
    const profileForm = document.getElementById('profileForm');
    const questionForm = document.getElementById('questionForm');
    const shareProfile = document.getElementById('shareProfile');
    
    if (profileForm) {
        profileForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const profileData = {
                name: document.getElementById('name').value,
                username: document.getElementById('username').value,
                email: document.getElementById('email').value,
                bio: document.getElementById('bio').value
            };
            localStorage.setItem('profileData', JSON.stringify(profileData));
            window.location.href = 'profile.html';
        });
    }

    if (document.location.pathname.endsWith('profile.html')) {
        const profileData = JSON.parse(localStorage.getItem('profileData'));
        if (profileData) {
            document.getElementById('profileDetails').innerHTML = `
                <p>Name: ${profileData.name}</p>
                <p>Username: ${profileData.username}</p>
                <p>Email: ${profileData.email}</p>
                <p>Bio: ${profileData.bio}</p>
            `;
            const completion = calculateCompletion(profileData);
            document.getElementById('completionPercentage').textContent = completion;
            if (completion === 100) {
                document.getElementById('verified').style.display = 'block';
            }
        }

        shareProfile.addEventListener('click', function() {
            const link = `${window.location.origin}/question.html?username=${profileData.username}`;
            prompt('Share this link with your friends:', link);
        });
    }

    if (questionForm) {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const username = urlParams.get('username');
        document.getElementById('profileName').textContent = username;

        questionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const question = document.getElementById('question').value;
            alert(`Your question to ${username} has been sent!`);
            document.getElementById('thankYouMessage').style.display = 'block';
            questionForm.style.display = 'none';
        });
    }

    function calculateCompletion(profileData) {
        let fieldsCompleted = 0;
        Object.values(profileData).forEach(value => {
            if (value) fieldsCompleted++;
        });
        return (fieldsCompleted / Object.keys(profileData).length) * 100;
    }
});
