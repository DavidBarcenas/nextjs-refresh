export default function Post({author, body}: {author: string, body: string}) {
    return <div>
        <p>{author}</p>
        <p>{body}</p>
    </div>
}