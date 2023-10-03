import React from 'react'
import PostsGrid from './PostsGrid'
import { getAllPosts, getFeaturedPosts } from '@/app/service/posts'

export default async function FeaturePosts() {
  // 1. 모든 포스트를 읽어와야 함
  const posts = await getFeaturedPosts();
  // 2. 모든 포스트 데이터를 보여줌
  return (
    <section className='my-4'>
      <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
      <PostsGrid posts={posts}/>
    </section>
  )
}
