export default function Post({author, body}: {author: string, body: string}) {
    return <li>
        <p>{author}</p>
        <p>{body}</p>
    </li>
}