import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="Blog">
    <ul style={{ margin: 0, marginBlock: 0, padding: 0 }}>
      <PostLink title="Post 1" slug="justTesting" />
      <PostLink title="post 2" slug="testingAgain" />
    </ul>
  </Layout>
);

export default Blog;
