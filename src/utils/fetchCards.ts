import axios from 'axios';

export async function fetchCards(query: string) {
  try {
    const resp = await axios.get(query);
    return resp.data;
  } catch (err) {
    console.log('Fetch error', err);
    return [];
  }
}
