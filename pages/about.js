import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Error from "./_error";

const USERNAME = "trugamr";

const About = ({ user, error }) => {
  return error ? (
    <Error status={error}></Error>
  ) : (
    <div>
      <Layout title="About">
        <p>{user.login}</p>
        <img src={user.avatar_url} alt="Avatar" height="200px" />
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
  const { user, error } = await fetchUser(USERNAME);

  return {
    props: {
      user,
      error,
    },
  };
}

export default About;
