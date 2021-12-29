import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import PostView from './shared/conponents/PostView/PostView';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import PostLayout from './components/PostLayout/PostLayout';
import MainLayout from './components/MainLayout/MainLayout';
import Navbar from './components/Navbar/Navbar';
import PostList from './shared/conponents/PostList/PostList';

const App: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/', element: <Home /> },
      { path: '404', element: <ErrorPage /> },
    ],
  };
  const listRoute = {
    path: '/list',
    element: <PostList />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: '/list', element: <PostList /> },
      { path: '404', element: <ErrorPage /> },
    ],
  };

  const PostRoutes = {
    path: 'posts',
    element: <PostLayout />,
    children: [
      { path: '*', element: <Navigate to="/404" /> },
      { path: ':id', element: <PostView/> },
    ],
  };

  const Routing = useRoutes([mainRoutes, PostRoutes,listRoute]);

  return (
    <>
      {' '}
      <Navbar />
      {Routing}
    </>
  );
};

export default App;
