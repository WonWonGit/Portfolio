import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    hello:
      "Hi! I'm Suwon Baek from Korea. I am constantly driven to learn and improve my skills. With over 2 years of experience under my belt, I have a strong foundation in a variety of programming languages including JavaScript, Java, React, Spring Boot and other frameworks. I am passionate about building web applications that deliver a seamless and enjoyable user experience.",
    keyPoint: [
      {
        title: "Communication",
        titleColor: "#071d73",
        backgroudColor: "#ffa000",
        content: [
          "I place a high value on communication with my team members.",
          "Through this communication, I have the ability to quickly adapt to new work environments and situations.",
          "I prefer to quickly approach the results I want to achieve through dialogue, finding better ways to reach them through conversation.",
        ],
      },
      {
        title: "Positive",
        titleColor: "#e8c8e4",
        backgroudColor: "#79a0f9",
        content: [
          "I try to bring positive energy to my work and encourage my team members. ",
          "Even when facing difficult situations, I believe that good results will come from difficult processes.",
        ],
      },
      {
        title: "Planning",
        titleColor: "#5f8fec",
        backgroudColor: "#f4b1eb",
        content: [
          "I always make plans for what I will do on new projects and for the day before I start.",
          "I feel a sense of accomplishment when I set and achieve my plans.",
          "By making Plan A and Plan B, I can prepare in advance for unexpected situations and know what to do when they arise.",
        ],
      },
      {
        title: "Self study",
        titleColor: "#ffa000",
        backgroudColor: "#071d73",
        content: [
          "As a developer, I believe that it is important to have a constant attitude of learning and improving.",
          "While it is natural that I cannot remember every line of code,",
          "I consistently study and keep records in order to acquire new skills. ",
          "If you have time, I would appreciate if you could check out my blog.",
          "👉🏻 : https://medium.com/@bkn020612",
        ],
      },
    ],
    skills: [
      {
        title: "Backend",
        content: ["Java", "Spring boot", "JUnit"],
      },
      {
        title: "Frontend",
        content: [
          "ReactJS",
          "NextJS",
          "GatsbyJS",
          "Javascript",
          "HTML/CSS",
          "css-in-js",
        ],
      },
      {
        title: "Others",
        content: [
          "MySQL",
          "Redis",
          "Github",
          "StoryBook",
          "Recoil",
          "React-query",
          "Redux-toolkit",
        ],
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-image`,
      options: {
        backgroundColor: `none`,
        loading: "eager",
        quality: 100,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: true,
              backgroundColor: `none`,
              loading: `eager`,
              quality: 100,
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/projects/`,
      },
      __key: "projects",
    },
    "rehype-react",
  ],
  pathPrefix: "/Portfolio",
};

export default config;
