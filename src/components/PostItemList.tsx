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
              <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
                <img className="object-cover rounded-xl" src={post.data.image.url.src} alt="" />
                <section>
                  <h3 className="text-3xl font-semibold leading-snug tracking-tight">{post.data.title}</h3>
                  <div className="flex gap-2 mt-3">
                    <span className="text-gray-400">
                      {post.data.author}
                    </span>
                    <span className="text-gray-400">• </span>
                    <time
                      className="text-gray-400"
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