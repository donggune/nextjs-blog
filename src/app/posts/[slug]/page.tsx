import { getFeaturedPosts, getPostData } from '@/app/service/posts';
import AdjacentPostCard from '@/components/AdjacentPostCard';
import PostContent from '@/components/PostContent';
import Image from 'next/image';
import React from 'react'

type Props = {
    params : {
        slug: string;
    }
}

export async function generateMetadata({params:{slug}}: Props) {
    const {title, description} = await getPostData(slug);
    return {
        title,
        description
    }
}

export default async function PostPage({params:{slug}}: Props) {
    // 1.전달된 slug 에 해당하는 포스트 데이터를 읽어와서
    // 2.데이터를 마크다운뷰어에 표기하면 됨

    const post = await getPostData(slug);
    const { title, path, next, prev} = post;

    return <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
        <Image src={`/images/posts/${post.path}.png`} alt={post.title} 
        className='w-full h-1/5 max-h-[500px]'
        width={760}
        height={420}/>
        <PostContent post={post} />
        <section className='flex shadow-md'>
            {prev && <AdjacentPostCard post={post} type="prev"/>}
            {next && <AdjacentPostCard post={post} type="next"/>}
        </section>
    </article>
}


export async function generateStaticParams() {
    const posts = await getFeaturedPosts();
    return posts.map((post) => ({
        slug: post.path,
    }));
}