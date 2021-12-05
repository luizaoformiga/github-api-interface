import { NextPage } from "next";
import Layout from "../components/layout";
import NoSearch from "../components/no-search";
import Profile from "../components/profile";
import Repositories from "../components/repositories";
import useGithub from "../hooks/github-hooks";

const Home: NextPage = () => {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default Home;