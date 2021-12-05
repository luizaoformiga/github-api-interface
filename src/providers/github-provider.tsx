import { NextPage } from "next";
import { AxiosResponse } from "axios";
import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

type Props = {
  id: number;
  avatar: string;
  login: any;
  name: string;
  html_url: string;
  blog: any;
  company: any;
  location: any;
  followers: number;
  following: number;
  public_gists: number;
  public_repos: number;
};

type OwnProps = {
  loading: false,
  user: {},
  repositories: [],
  starred: [],
}

export const GithubContext = createContext<any>({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider: NextPage = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: 0,
      avatar: "",
      login: [],
      name: "",
      html_url: "",
      blog: [],
      company: [],
      location: "",
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const getUser = (username: string) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`users/${username}`)
      .then((data: AxiosResponse<Props>) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data?.data.id,
            avatar: data?.data.avatar,
            login: data?.data.login,
            name: data?.data.name,
            html_url: data?.data.html_url,
            blog: data?.data.blog,
            company: data?.data.company,
            location: data?.data.location,
            followers: data?.data.followers,
            following: data?.data.following,
            public_gists: data?.data.public_gists,
            public_repos: data?.data.public_repos,
          },
        }));
      })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username: string) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getUserStarred = (username: string) => {
    api.get(`users/${username}/starred`).then((data: any) => {
      console.log("data: " + JSON.stringify(data));
      setGithubState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username: string): void => getUser(username), []),
    getUserRepos: useCallback(
      (username: string): void => getUserRepos(username),
      []
    ),
    getUserStarred: useCallback(
      (username: string): void => getUserStarred(username),
      []
    ),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
