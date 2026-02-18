import { Post } from "../client-posts"


interface PostPageProps{
    post:Post
}

export default function SsrPost({post}: PostPageProps) {
    console.log("SsrPost Component Rendering", post);
    return (
        <div>
            <h1>Server Side Rendering</h1>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export async function getServerSideProps(context: any) {
    const { id } = context.params as {id:string}
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    console.log(post)
    return { props: { post } }
}

/* What happens?
Runs on every request
Good for:
    Auth pages
    Dashboard
    Frequently changing data
*/