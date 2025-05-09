import { PostItemHoverOverlay } from "./PostItemHoverOverlay";

export default function PostItem(props: { posts: Record<string, any>[] }) {
  const posts = props.posts
  console.log(posts)
  return (
    <ul className="flex flex-col">
      {
        posts.map((post) => (
          <li>
            <a href={`/posts/${post.id}`} className="relative py-8 block">
              <PostItemHoverOverlay />
              <div className="grid md:grid-cols-[1fr_2fr] gap-5 md:gap-10 items-center">
                <img className=" object-contain rounded-lg min-w-40 min-h-40" src={post.data.image.url.src} alt="" />
                <section className="flex flex-col gap-4 w-full max-w-96">
                  <h3 className="text-2xl font-semibold leading-snug tracking-tight truncate">{post.data.title}{post.data.title}</h3>
                  <div className="flex flex-col gap-2 mt-3">
                    <time
                      className="text-gray-400 text-sm"
                      dateTime={post.data.pubDate.toISOString()}>
                      {post.data.pubDate.toDateString()}
                    </time>
                  </div>
                </section>
              </div>
            </a>
          </li>
        ))
      }
    </ul>

  )
}