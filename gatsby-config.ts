import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    hello: {
      en: "Hi! I'm Suwon Baek from Korea. I am constantly driven to learn and improve my skills. With over 2 years of experience under my belt, I have a strong foundation in a variety of programming languages including JavaScript, Java, React, Spring Boot and other frameworks. I am passionate about building web applications that deliver a seamless and enjoyable user experience.",
      jp: "こんにちは！私は韓国出身のSuwon Baekです。常に学びとスキルアップに取り組んでいます。2年以上の経験を持ち、JavaScript、Java、React、Spring Bootなどの様々なプログラミング言語に強固な基盤を持っています。シームレスで楽しいユーザーエクスペリエンスを提供するウェブアプリケーションの構築に情熱を持っています。",
    },
    keyPoint: [
      {
        title: "Communication",
        titleColor: "#071d73",
        backgroudColor: "#ffa000",
        content: {
          en: "I place a high value on communication with my team members. Through this communication, I have the ability to quickly adapt to new work environments and situations. I prefer to quickly approach the results I want to achieve through dialogue, finding better ways to reach them through conversation.",
          jp: "私はチームメンバーとのコミュニケーションを非常に重要視しています。このコミュニケーションを通じて、新しい仕事環境や状況に迅速に適応する能力を持っています。 私は対話を通じて、私が達成したい結果に迅速にアプローチすることを好みます。会話を通じて、より良い方法を見つけてそれらに到達することができます。",
        },
      },
      {
        title: "Positive",
        titleColor: "#e8c8e4",
        backgroudColor: "#79a0f9",
        content: {
          en: "I try to bring positive energy to my work and encourage my team members. Even when facing difficult situations, I believe that good results will come from difficult processes.",
          jp: "私は職場にポジティブなエネルギーをもたらし、チームメンバーを励まそうと努めています。困難な状況に直面しても、その難しいプロセスから良い結果が生まれると信じています。",
        },
      },
      {
        title: "Planning",
        titleColor: "#5f8fec",
        backgroudColor: "#f4b1eb",
        content: {
          en: "I always make plans for what I will do on new projects and for the day before I start. I feel a sense of accomplishment when I set and achieve my plans. By making Plan A and Plan B, I can prepare in advance for unexpected situations and know what to do when they arise.",
          jp: "新しいプロジェクトや始める前の日に、私は常に何をするかの計画を立てます。計画を設定し、達成すると達成感を感じます。Plan AとPlan Bを立てることで、予期せぬ状況に事前に準備し、それらが発生した場合に何をするかを知ることができます。",
        },
      },
      {
        title: "Self study",
        titleColor: "#ffa000",
        backgroudColor: "#071d73",
        content: {
          en: "As a developer, I believe that it is important to have a constant attitude of learning and improving. While it is natural that I cannot remember every line of code, I consistently study and keep records in order to acquire new skills. If you have time, I would appreciate if you could check out my blog.",
          jp: "開発者として、常に学びと向上の姿勢を持つことが重要だと考えています。すべてのコードを覚えられるわけではありませんが、新しいスキルを習得するために、一貫して学び続け、記録を取り続けています。もし時間があれば、私のブログも見ていただけると嬉しいです。",
        },
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
