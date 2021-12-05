import { NextPage } from "next";
import App from "../App";
import { ResetCSS } from "../global/resetCSS";
import GithubProvider from "../providers/github-provider";

const Providers: NextPage = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;
