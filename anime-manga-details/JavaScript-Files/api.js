const apiUrl = 'https://graphql.anilist.co';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwYjRiMmRlZmM2ZDMyYzY3NDgwZTBhZmMxOTQ0M2E3NDc3YjM2YjRkN2E4NjMzZjMwNmVhNjAwNzMzYmU3MWEzOGJiY2YzZjcxOTEyZWJkIn0.eyJhdWQiOiIyMDA4MyIsImp0aSI6ImQwYjRiMmRlZmM2ZDMyYzY3NDgwZTBhZmMxOTQ0M2E3NDc3YjM2YjRkN2E4NjMzZjMwNmVhNjAwNzMzYmU3MWEzOGJiY2YzZjcxOTEyZWJkIiwiaWF0IjoxNzIxODIwNzQyLCJuYmYiOjE3MjE4MjA3NDIsImV4cCI6MTc1MzM1Njc0Miwic3ViIjoiNjg0NzEzNSIsInNjb3BlcyI6W119.NBNG1XU4KbBKbWT5ts8bRGWPmidwGQk6l2s5mYSpgD27b484nYAFq-xLzIE8CFuSPgVIPgkgX1GoYIcsq5NIPx5Es4_fNfJjcM0_rVawNP4Tb_0a-2dqea-nQ5hqSzG9n1ujjU2iaiQPbD8qU57zE2GTkHF-N4Q3mR0so2WttFHKpMxXv3xZprE8EvZ11cRQZ5j4PtsEXG621SC9icAXmTV9sDnkT9BOZCYAcpv6JM4OcZakL9qnKmDXx8xM0xeYiAOiGkassb3Z7O15Jg2zpm8MPyWWK1XmhJx_F5tSD04Mu8UZ7mB_TvIb_LsfctbRwyJfL1JVJxGpb-3f82T5fYJgvfREHqbQE70abpfYcqOOAjZSMQk6bNMsLGGOXSAqTCllWBnFHhVh-o58Mx1HG6uCbHLR4HHU5MFsDR4TvA63obUpczp7h6U3EtNMycWuWSZl7Wp9aYtW6ukjceNed7t9hhCXeaeL77KT_G5WN0g-fAY6efG5d0M1WyoO9IhuxpaWHbozYfaw-dkETq5G0Vm9w_atnOsjNtd3wtF_gWx8Lg1eLQi-OSdxWOdgM2BIqT9l75SkWj5mjdGFGJ8pGKqqgj8s70bGmqwaxjGlcXOvYDIIzll9nvJGexFWrd3r7fi5y9nfE1HlZiMSdazYjEO1YRb-Wm6-pxg1UcOU4zU'; 

export async function fetchAnimeDetails(title) {
    const query = `
        query ($search: String) {
            Media(search: $search, type: ANIME) {
                id
                title {
                    romaji
                    english
                }
                description
                episodes
            }
        }`;

    const variables = { search: title };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ${eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwYjRiMmRlZmM2ZDMyYzY3NDgwZTBhZmMxOTQ0M2E3NDc3YjM2YjRkN2E4NjMzZjMwNmVhNjAwNzMzYmU3MWEzOGJiY2YzZjcxOTEyZWJkIn0.eyJhdWQiOiIyMDA4MyIsImp0aSI6ImQwYjRiMmRlZmM2ZDMyYzY3NDgwZTBhZmMxOTQ0M2E3NDc3YjM2YjRkN2E4NjMzZjMwNmVhNjAwNzMzYmU3MWEzOGJiY2YzZjcxOTEyZWJkIiwiaWF0IjoxNzIxODIwNzQyLCJuYmYiOjE3MjE4MjA3NDIsImV4cCI6MTc1MzM1Njc0Miwic3ViIjoiNjg0NzEzNSIsInNjb3BlcyI6W119.NBNG1XU4KbBKbWT5ts8bRGWPmidwGQk6l2s5mYSpgD27b484nYAFq-xLzIE8CFuSPgVIPgkgX1GoYIcsq5NIPx5Es4_fNfJjcM0_rVawNP4Tb_0a-2dqea-nQ5hqSzG9n1ujjU2iaiQPbD8qU57zE2GTkHF-N4Q3mR0so2WttFHKpMxXv3xZprE8EvZ11cRQZ5j4PtsEXG621SC9icAXmTV9sDnkT9BOZCYAcpv6JM4OcZakL9qnKmDXx8xM0xeYiAOiGkassb3Z7O15Jg2zpm8MPyWWK1XmhJx_F5tSD04Mu8UZ7mB_TvIb_LsfctbRwyJfL1JVJxGpb-3f82T5fYJgvfREHqbQE70abpfYcqOOAjZSMQk6bNMsLGGOXSAqTCllWBnFHhVh-o58Mx1HG6uCbHLR4HHU5MFsDR4TvA63obUpczp7h6U3EtNMycWuWSZl7Wp9aYtW6ukjceNed7t9hhCXeaeL77KT_G5WN0g-fAY6efG5d0M1WyoO9IhuxpaWHbozYfaw-dkETq5G0Vm9w_atnOsjNtd3wtF_gWx8Lg1eLQi-OSdxWOdgM2BIqT9l75SkWj5mjdGFGJ8pGKqqgj8s70bGmqwaxjGlcXOvYDIIzll9nvJGexFWrd3r7fi5y9nfE1HlZiMSdazYjEO1YRb-Wm6-pxg1UcOU4zU}'
            },
            body: JSON.stringify({
                query,
                variables
            })
        });
        const data = await response.json();
        return data.data.Media;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export async function createAnimeReview(animeId, review) {
    const mutation = `
        mutation ($id: Int, $review: String) {
            SaveReview(id: $id, review: $review) {
                id
                review
            }
        }`;

    const variables = { id: animeId, review: review };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ${eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQwYjRiMmRlZmM2ZDMyYzY3NDgwZTBhZmMxOTQ0M2E3NDc3YjM2YjRkN2E4NjMzZjMwNmVhNjAwNzMzYmU3MWEzOGJiY2YzZjcxOTEyZWJkIn0.eyJhdWQiOiIyMDA4MyIsImp0aSI6ImQwYjRiMmRlZmM2ZDMyYzY3NDgwZTBhZmMxOTQ0M2E3NDc3YjM2YjRkN2E4NjMzZjMwNmVhNjAwNzMzYmU3MWEzOGJiY2YzZjcxOTEyZWJkIiwiaWF0IjoxNzIxODIwNzQyLCJuYmYiOjE3MjE4MjA3NDIsImV4cCI6MTc1MzM1Njc0Miwic3ViIjoiNjg0NzEzNSIsInNjb3BlcyI6W119.NBNG1XU4KbBKbWT5ts8bRGWPmidwGQk6l2s5mYSpgD27b484nYAFq-xLzIE8CFuSPgVIPgkgX1GoYIcsq5NIPx5Es4_fNfJjcM0_rVawNP4Tb_0a-2dqea-nQ5hqSzG9n1ujjU2iaiQPbD8qU57zE2GTkHF-N4Q3mR0so2WttFHKpMxXv3xZprE8EvZ11cRQZ5j4PtsEXG621SC9icAXmTV9sDnkT9BOZCYAcpv6JM4OcZakL9qnKmDXx8xM0xeYiAOiGkassb3Z7O15Jg2zpm8MPyWWK1XmhJx_F5tSD04Mu8UZ7mB_TvIb_LsfctbRwyJfL1JVJxGpb-3f82T5fYJgvfREHqbQE70abpfYcqOOAjZSMQk6bNMsLGGOXSAqTCllWBnFHhVh-o58Mx1HG6uCbHLR4HHU5MFsDR4TvA63obUpczp7h6U3EtNMycWuWSZl7Wp9aYtW6ukjceNed7t9hhCXeaeL77KT_G5WN0g-fAY6efG5d0M1WyoO9IhuxpaWHbozYfaw-dkETq5G0Vm9w_atnOsjNtd3wtF_gWx8Lg1eLQi-OSdxWOdgM2BIqT9l75SkWj5mjdGFGJ8pGKqqgj8s70bGmqwaxjGlcXOvYDIIzll9nvJGexFWrd3r7fi5y9nfE1HlZiMSdazYjEO1YRb-Wm6-pxg1UcOU4zU}'
            },
            body: JSON.stringify({
                query: mutation,
                variables
            })
        });
        const data = await response.json();
        return data.data.SaveReview;
    } catch (error) {
        console.error('Error creating review:', error);
        return null;
    }
}