import { fetchAnimeDetails, createAnimeReview } from './api.js';
import { displayResults, showLoading } from './ui.js';

document.getElementById('search-button').addEventListener('click', async () => {
    const title = document.getElementById('search-input').value;
    if (title.trim() === '') {
        alert('Please enter a title to search for.');
        return;
    }

    showLoading();
    const result = await fetchAnimeDetails(title);
    displayResults(result);
});


async function submitReview(animeId, review) {
    const result = await createAnimeReview(animeId, review);
    if (result) {
        alert('Review submitted successfully!');
    } else {
        alert('Failed to submit review.');
    }
}