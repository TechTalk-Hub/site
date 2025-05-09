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
                <section className="flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold leading-snug tracking-tight">{post.data.title}</h3>
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