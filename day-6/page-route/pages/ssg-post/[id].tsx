import { Post } from "../client-posts";

interface PostPageProps{
    post:Post
}

export default function SsgPost({post}: PostPageProps) {
    console.log("SsgPost Component Rendering", post);
    return (
        <div>
            <h1>Static Site Generation</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export async function getStaticProps(context: any) {
    const { id } = context.params as {id:string}
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    console.log(post)
    return { props: { post } }
}

export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const posts = await res.json()
    const paths = posts.map((post: Post) => ({
        params: { id: post.id.toString() },
    }))
    return { paths, fallback: false }
}

/* What happens?
getStaticPaths()
    Runs at build time
    Generates pages like:
getStaticProps()
    Fetches data at build time
revalidate: 10
    After 10 seconds
    If someone visits page
    Next.js regenerates page in background
    This is 👉 ISR (Incremental Static Regeneration)
*/