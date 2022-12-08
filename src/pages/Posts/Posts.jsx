/* @format */

import React from 'react';
import CreatePost from './CreatePost';
import PostList from './PostList';

const Posts = () => {
  return (
    <div className='p-5'>
      <CreatePost />
      <PostList />
    </div>
  );
};

export default Posts;
