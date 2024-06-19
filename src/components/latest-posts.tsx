import { getLatestPosts } from "@/actions/api";
import PostCard from "./post-card";

const LatestPosts = async () => {
  const posts = await getLatestPosts();

  if (!posts) {
    return;
  }

  return (
    <section className="mt-20 px-8">
      <h2 className="text-2xl font-heading text-center">Latest Posts</h2>
      <div className="mt-8 grid grid-cols-3 gap-8 px-8 place-items-center">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard
              key={post._id}
              id={post._id}
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              username={post.user.username}
            ></PostCard>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </section>
  );
};

export default LatestPosts;
