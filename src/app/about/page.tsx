import Hero from "@/components/Hero";

const TITLE_CLASS = "text-lg font-bold my-2";

export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg text-center p-10 m-4">
        <h2 className={TITLE_CLASS}>나는 !</h2>
        <p>하이 반갑읍니다. <br />만들어보자 뭐든</p>

        <h2 className={TITLE_CLASS}>Career</h2>
        <p>이런것들을 했소이다</p>

        <h2 className={TITLE_CLASS}>Skill</h2>
        <p>next.js</p>
      </section>
    </>
  )
}
