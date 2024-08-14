export function displayResults(result) {
    const resultsContainer = document.getElementById('results');
    const loadingIndicator = document.getElementById('loading');
    loadingIndicator.style.display = 'none';
    resultsContainer.innerHTML = '';

    if (!result) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    const div = document.createElement('div');
    div.classList.add('result-item');
    div.innerHTML = `
        <h2>${result.title.romaji}</h2>
        <p>${result.description}</p>
        <p><strong>Episodes:</strong> ${result.episodes}</p>
    `;
    resultsContainer.appendChild(div);
}

export function showLoading() {
    document.getElementById('loading').style.display = 'block';
}