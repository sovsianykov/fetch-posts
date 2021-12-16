import React, { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchPosts } from './store/ActionСreators';
import { RootState } from './store/store';
import PostList from './shared/conponents/PostList/PostList';

function App() {
  return (
    <div>
      <Navbar />
      <PostList />
    </div>
  );
}

export default App;
