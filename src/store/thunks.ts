import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Author, Post } from './models';


export const fetchPosts  = createAsyncThunk(
  'posts/fetchPosts',
  async  function(page:number) {
    const response = await axios.get<Post[]>(
      `https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=6`
    );
    return response.data;
  } 
)
export const fetchAuthors  = createAsyncThunk(
  'authors/fetchAuthors',
  async  function() {
    const response = await axios.get<Author[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
    return response.data;
  }
)

export const deletePosts = createAsyncThunk(
  'posts/deletePosts',
  async  function(id: number) {
     await axios.delete<Post[]>(
      `https://jsonplaceholder.typicode.com/posts/${id}_`
    );
    return id;
  }
)