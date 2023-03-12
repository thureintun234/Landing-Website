import axios from 'axios';
const baseUrl = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
