import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Error from "./_error";

const userName = "turbonater";

const About = ({ user, error }) => {
  const [data, setData] = useState(user.login);
  const [avatar, setAvatar] = useState(user.avatar_url);
  useEffect(() => {
    fetchUser(userName).then(({ user }) => {
      setData(user.login);
      setAvatar(user.avatar_url);
    });
  }, []);

  return error ? (
    <Error status={error}></Error>
  ) : (
    <div>
      <Layout title="About">
        <p>{data}</p>
        <img src={avatar} alt="Avatar" height="200px" />
      </Layout>
    </div>
  );
};

const fetchUser = async (userName) => {
  const res = await fetch(`https://api.github.com/users/${userName}`);
  const user = await res.json();
  const error = res.status > 200 ? res.status : false;
  return { user, error };
};

export async function getStaticProps() {
  const { user, error } = await fetchUser(userName);

  return {
    props: {
      user,
      error,
    },
  };
}

export default About;
