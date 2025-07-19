import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

const getData = async (userId) => {
    const userResponse = await api.get(`users/${userId}`);
    const postResponse = await api.get(`posts?userId=${userId}`);

    const user = userResponse.data;
    const posts = postResponse.data;

    const combined = {
        ...user,
        posts: posts
    };

    return combined;
};

export default getData;