function calculateResults() {
    const votes = JSON.parse(localStorage.getItem('votes')) || {};
    const resultsTable = document.getElementById('resultsTable');
    resultsTable.innerHTML = '';
    
    const sortedResults = Object.entries(votes).sort((a, b) => b[1] - a[1]);
    const labels = [];
    const data = [];
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F7DC6F', '#AF7AC5', '#48C9B0', '#F1948A'];

    sortedResults.forEach(([teacher, voteCount], index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${teacher}</td><td>${voteCount}</td>`;
        resultsTable.appendChild(row);
        labels.push(teacher);
        data.push(voteCount);
    });

    renderChart(labels, data, colors);
}

function renderChart(labels, data, colors) {
    const ctx = document.getElementById('votesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Votes',
                data: data,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: true,
                        autoSkip: false
                    }
                },
                y: {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1
                    }
                }
            }
        }
    });
}

function resetVotes() {
    if (confirm("Are you sure you want to reset all results? This will clear the stored votes.")) {
        localStorage.removeItem('votes');
        localStorage.removeItem('hasVoted');
        location.reload();
    }
}

function resetChart() {
    // Clear the results table and chart by reloading the page.
    location.reload();
}

document.addEventListener('DOMContentLoaded', calculateResults);