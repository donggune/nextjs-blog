import { getPostData } from '@/app/service/posts';
import MarkdownViewer from '@/components/MarkdownViewer';
import Image from 'next/image';
import React from 'react'
import {AiTwotoneCalendar} from 'react-icons/ai';

type Props = {
    params : {
        slug: string;
    }
}

export default async function PostPage({params:{slug}}: Props) {
    // 1.전달된 slug 에 해당하는 포스트 데이터를 읽어와서
    // 2.데이터를 마크다운뷰어에 표기하면 됨

    const {title, description, date, path, content} = await getPostData(slug);

    return <article className='rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4'>
        <Image src={`/images/posts/${path}.png`} alt={title} 
        className='w-full h-1/5 max-h-[500px]'
        width={760}
        height={420}/>
        <section className='flex flex-col p-4'>
            <div className='flex items-center self-end text-sky-600'>
                <AiTwotoneCalendar />
                <p className='font-semibold ml-2'>{date.toString()}</p>
            </div>            
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-xl font-bold'>{description}</p>
            <div className='w-44 border-2 border-sky-600 mt-4 mb-8'/>
            <MarkdownViewer content={content}/>
        </section>
        
    </article>
}
