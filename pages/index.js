import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h2>Welcome to Fran_The_Dev&#39;s Netlify Identity Demo</h2>
      <div>
        <p>
          Netlify Identity service brings a full suite of authentication
          functionality, backed by the GoTrue API. This allows you to manage and
          authenticate users on your site or app, without requiring them to be
          users of Netlify or any other service. You can use this for gated
          content, site administration, and more. For a working example using
          Netlify Identity service with Git Gateway to manage users in Netlify
          CMS, try deploying this repository:
        </p>
      </div>
    </div>
  );
}
