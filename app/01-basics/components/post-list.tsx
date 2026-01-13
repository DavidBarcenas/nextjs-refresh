import Post from "@/app/01-basics/components/post";

const list = [
    {author: "Dave", body: "Practice with Nextjs"},
    {author: "Jhon", body: "Hello World!"}
]

export default function PostList() {
    return <ul>
        {
            list.map(post =>
                <Post author={post.author} body={post.body} key={post.author} />
            )
        }
    </ul>
}