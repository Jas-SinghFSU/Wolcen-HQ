import React from "react";
import { Layout } from "antd";
import { Row, Col } from "antd";

import NewFeed from "./NewsFeed/NewsFeed";
import TopBuilds from "./TopBuilds/TopBuilds";

import "./style.css";

const { Content } = Layout;

const HomePageLabel = () => {
  return (
    <div className="wolcenTextContainer">
      <span className="wolcenTextLabel">
        Wolcen<span className="wolcenSubtextLabel">HQ</span>
      </span>
      <div className="wolcenSubtextValue">
        A{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wolcengame.com/"
        >
          Wolcen
        </a>{" "}
        Resource
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Layout className="homePageLayout">
      <Content className="searchBuilds">
        <HomePageLabel />
        <NewFeed />
        <TopBuilds />
      </Content>
    </Layout>
  );
};

export default Home;
