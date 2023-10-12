'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import Banner, { BannerData } from './Banner';

type Form = {
    from : string;
    subject : string;
    message : string;
}

export default function ContactForm() {
    const [form, setform] = useState<Form>({
        from: '', subject: '', message: ''
    });

    const [banner, setBanner] = useState<BannerData | null>(null);

    const onChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setform(prev => ({...prev, [name]: value}));
    }

    const onSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
        setBanner({message:"성공했읍니다", state:"success"});
        setTimeout(() => {
            setBanner(null);
        }, 3000);
    }
  return (
    <>
        {
            banner && <Banner banner={banner}/>
        }
        <form onSubmit={onSubmit}
<<<<<<< HEAD
        className='w-full max-w-md flex flex-col gap-2 m-4 p-4 bg-slate-700 rounded-xl text-white'>
            <label htmlFor='from' className='font-semibold'>Email</label>
            <input type='email' id='from' name='from' required autoFocus value={form.from} onChange={onChange}/>

            <label htmlFor='subject' className='font-semibold'>subject</label>
            <input type='text' id='subject' name='subject' required value={form.subject} onChange={onChange}/>

            <label htmlFor='message' className='font-semibold'>message</label>
            <textarea 
            className="text-black"
=======
        className='w-full max-w-md flex flex-col gap-2 m-4 p-4 bg-slate-700 rounded-xl'>
            <label htmlFor='from' className='font-semibold text-white'>Email</label>
            <input type='email' id='from' name='from' required autoFocus value={form.from} onChange={onChange}/>

            <label htmlFor='subject' className='font-semibold text-white'>subject</label>
            <input type='text' id='subject' name='subject' required value={form.subject} onChange={onChange}/>

            <label htmlFor='message' className='font-semibold text-white'>message</label>
            <textarea             
>>>>>>> 77faa7d36b9f0ef2130a09c1ea85258f87003ded
            rows={10} id='message' name='message' required value={form.message} onChange={onChange}/>

            <button>Submit</button>
        </form>
    </>
  )
}
