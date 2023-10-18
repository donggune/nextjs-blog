"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/app/service/contact";

type Form = {
    from: string;
    subject: string;
    message: string;
};


const DEFAULT_DATA = {
    from: "",
    subject: "",
    message: "",
};

export default function ContactForm() {
    const [form, setform] = useState<Form>(DEFAULT_DATA);

    const [banner, setBanner] = useState<BannerData | null>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setform((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        sendContactEmail(form)
        .then(() => {
            setBanner({ message: "성공했읍니다", state: "success" });
            setform(DEFAULT_DATA);
        })
        .catch(() => {
            setBanner({ message: "메일 보내기 실패함", state: "error" });
        })
        .finally(() => {
            setTimeout(() => {
                setBanner(null);
            }, 3000);
        });
    };

    return (
        <>
            {banner && <Banner banner={banner} />}
            <form onSubmit={onSubmit} className="w-full max-w-md flex flex-col gap-2 m-4 p-4 bg-slate-700 rounded-xl">
                <label htmlFor="from" className="font-semibold text-white">
                    Email
                </label>
                <input type="email" id="from" name="from" required autoFocus value={form.from} onChange={onChange} />

                <label htmlFor="subject" className="font-semibold text-white">
                    subject
                </label>
                <input type="text" id="subject" name="subject" required value={form.subject} onChange={onChange} />

                <label htmlFor="message" className="font-semibold text-white">
                    message
                </label>
                <textarea rows={10} id="message" name="message" required value={form.message} onChange={onChange} />

                <button className="text-black font-bold bg-yellow-400">Submit</button>
            </form>
        </>
    );
}
