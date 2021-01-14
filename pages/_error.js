import Layout from "../components/Layout";

const Error = ({ status }) => {
  return (
    <Layout title="Error!">
      <p>Cannot fetch User Details : status {status} </p>
    </Layout>
  );
};

export default Error;
