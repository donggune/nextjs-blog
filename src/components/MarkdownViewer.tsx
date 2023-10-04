'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';


export default function MarkdownViewer({content}: {content : string}) {
    return (
        <ReactMarkdown className='prose max-w-none lg:prose-xl'
            remarkPlugins={[remarkGfm]}
            components={{
                
                img : (image) => (
                    <Image 
                    className='w-full max-h-60 object-cover'
                    src={image.src || ''} 
                    alt={image.alt || ''} 
                    width={500} 
                    height={350} />
                ),
              }}
        >{content}</ReactMarkdown>
    )
}