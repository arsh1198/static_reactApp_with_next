import { useRouter } from "next/router";
import Layout from "../components/Layout";

const Post = () => {
  const router = useRouter();
  const { title } = router.query;
  return (
    <Layout title={title}>
      <p style={{ textAlign: "center", paddingLeft: 40, paddingRight: 40 }}>
        Sit laborum dolore est excepteur eu sint sit sunt. Non nostrud aliqua
        cupidatat et est nostrud nulla exercitation non esse ad. Esse qui in ex
        dolore amet fugiat consequat. Anim sit aute ullamco dolore dolore tempor
        in. Ullamco consectetur in amet reprehenderit. Lorem do sit adipisicing
        incididunt eiusmod nisi elit. Nostrud velit in nostrud ea excepteur
        consectetur quis id ad anim esse elit nulla.
      </p>
    </Layout>
  );
};

export default Post;
