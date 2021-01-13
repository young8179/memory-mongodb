import axios from 'axios';

const url = "http://localhost:5000/api/v2/posts";

export const fetchPosts = () =>{
    return axios.get(url)
            
}

export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const likePost = (id, likePost) => axios.patch(`${url}/${id}/likePost`, likePost);

export const deletePost = (id) => axios.delete(`${url}/${id}`)