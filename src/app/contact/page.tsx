import ContactForm from "@/components/ContactForm";
import {AiFillGithub, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";

const LINKS = [
  {icon : <AiFillGithub />, url : ''},
  {icon : <AiFillLinkedin />, url : ''},
  {icon : <AiFillYoutube />, url : ''},
]

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>inifo@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a href={link.url} key={index} target="_blank"
          className="text-5xl hover:text-yellow-400">{link.icon}</a>
        ))} 
      </ul>
      <h2 className="text-3xl font-bold my-8">Send me an email</h2>
      <ContactForm />
    </section>
  )
}
