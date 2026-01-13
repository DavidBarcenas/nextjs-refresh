import Post from "@/app/01-basics/components/post";

export default function BasicsPage() {
    return (
        <section>
            <h1 className="text-center text-2xl my-5">01 - Basics</h1>
            <Post author="David" body="Practice with Nextjs" />
            <Post author="Jhon" body="Hello World!" />
        </section>
    )
}