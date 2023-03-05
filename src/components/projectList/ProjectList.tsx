import { graphql } from "gatsby";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useIntoView } from "../../hooks/useIntoView";
import userProjectList from "../../hooks/useProjectList";
import useScrollFadeIn from "../../hooks/useScrollFadeIn";

const ProjectWrap = styled.div`
  width: 100%;
  margin: 100px 0;
  height: 100vh;
  position: relative;
`;

const ProjectBackground = styled.div`
  height: 150px;
  font-size: 3rem;
  position: relative;
  overflow: hidden;
  font-family: "Barbra";
  color: ${(props) => props.theme?.colors.pointColor};

  p {
    position: absolute;
    width: 2000px;
  }

  p:nth-child(2) {
    transform: translateX(-10%);
    top: 50px;
  }

  p:nth-child(3) {
    transform: translateX(-20%);
    top: 100px;
  }
`;

const ProjectListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background: white;
  transform: translateY(-10%);
  height: 500px;
  display: flex;
  align-items: center;
`;

const ProjectListCard = styled.div`
  width: 250px;
  height: 80%;
  border: 1px solid;
  padding: 20px;

  &:hover {
    background: ${(props) => props.theme?.colors.fontColor};
    border: 1px solid ${(props) => props.theme?.colors.fontColor};
    color: ${(props) => props.theme?.colors.background};
    transition: 0.6s;
  }
`;

const ProjectListView = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  ${ProjectListCard}:nth-child(2) {
    border-left: 0px;
    border-right: 0px;
  }
`;

const ProjectListTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const ProjectListDiv = styled.div`
  width: 1500px;
  height: 80%;
  display: flex;
`;

interface FrontMatterType {
  idx: number;
  title: string;
}

interface NodesType {
  frontmatter: FrontMatterType;
}

const ProjectList = () => {
  const ScrollIntoView = useIntoView();
  const [page, setPage] = useState(1);
  const [projcetData, setProjectData] = useState<NodesType[]>([]);
  const datas: NodesType[] = userProjectList();
  const limit = 3;
  const firstPage = 1;
  const lastPage = Math.ceil(datas.length / limit);

  const pagination = () => {
    const offset = (page - 1) * limit;
    const data = datas.slice(offset, offset + limit);
    setProjectData(data);
  };

  useEffect(() => {
    console.log(datas);
    pagination();
  }, [page]);

  return (
    <ProjectWrap {...ScrollIntoView}>
      <ProjectBackground>
        <p>
          Here are my Projects * Here are my Projects * Here are my Projects *
          Here are my Projects
        </p>
        <p>
          Here are my Projects * Here are my Projects * Here are my Projects *
          Here are my Projects
        </p>
        <p>
          Here are my Projects * Here are my Projects * Here are my Projects *
          Here are my Projects * Here are my Projects
        </p>
      </ProjectBackground>
      <ProjectListContainer>
        <button
          onClick={() => {
            page > firstPage ? setPage(page - 1) : null;
          }}
        >
          pre
        </button>
        <ProjectListView>
          {/* <ProjectListDiv> */}
          {projcetData.length > 0 ? (
            projcetData.map((data: NodesType, index) => (
              <ProjectListCard key={index}>
                <ProjectListTitle>{data.frontmatter?.title}</ProjectListTitle>
              </ProjectListCard>
            ))
          ) : (
            <></>
          )}
        </ProjectListView>
        <button
          onClick={() => {
            page < lastPage ? setPage(page + 1) : null;
          }}
        >
          next
        </button>
      </ProjectListContainer>
    </ProjectWrap>
  );
};

export default ProjectList;
