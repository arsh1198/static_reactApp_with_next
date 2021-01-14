import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import nprogress from "nprogress";

Router.events.on("routeChangeStart", (url) => {
  console.log(url);
  nprogress.start();
});

Router.events.on("routeChangeComplete", () => nprogress.done());
Router.events.on("routerChangeError", () => nprogress.done());

const Layout = ({ children, title }) => (
  <div className="root">
    <Head></Head>
    <header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </header>
    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      header {
        width: 100%;
        display: flex;
        justify-content: space-around;
        padding: 1em;
        font-size: 1.2rem;
        background: indigo;
      }
      header a {
        color: white;
        text-decoration: none;
      }

      header a:hover {
        font-weight: bold;
        color: lightgray;
      }
      footer {
        padding: 1em;
      }
    `}</style>
    <style global jsx>{`
      body {
        margin: 0;
        font-size: 110%;
        background: #f0f0f0;
      }
    `}</style>
  </div>
);

export default Layout;
