function submitVotes(event) {
    event.preventDefault();
    
    const selectedTeachers = Array.from(document.querySelectorAll('input[name="teacher"]:checked')).map(input => input.value);
    if (selectedTeachers.length !== 2) {
        document.getElementById('thankYouMessage').textContent = 'Please select exactly two teachers.';
        document.getElementById('thankYouMessage').style.color = 'red';
        return;
    }

    const votes = JSON.parse(localStorage.getItem('votes')) || {};
    selectedTeachers.forEach(teacher => {
        votes[teacher] = (votes[teacher] || 0) + 1;
    });
    localStorage.setItem('votes', JSON.stringify(votes));
    localStorage.setItem('hasVoted', true);

    document.getElementById('thankYouMessage').textContent = 'Thank you for voting!';
    document.getElementById('thankYouMessage').style.color = 'green';
    document.getElementById('pollForm').reset();
}
