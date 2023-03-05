import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import userProjectList from "../../hooks/useProjectList";
import {
  CardSummary,
  LeanMore,
  ProjectArrow,
  ProjectBackground,
  ProjectListCard,
  ProjectListContainer,
  ProjectListTitle,
  ProjectListView,
  ProjectWrap,
} from "./StyledProjectList";

interface FrontMatterType {
  idx: number;
  title: string;
  summary: string;
}

interface NodesType {
  frontmatter: FrontMatterType;
}

const ProjectList = () => {
  const [page, setPage] = useState(1);
  const [projcetData, setProjectData] = useState<NodesType[]>([]);
  const datas: NodesType[] = userProjectList();
  const limit = 3;
  const firstPage = 1;
  const lastPage = Math.ceil(datas.length / limit);
  const backgrounds = new Array(10);

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
    <ProjectWrap>
      <ProjectBackground>
        {[1, 2].map((index: number) => (
          <p>
            Here are my Projects * Here are my Projects * Here are my Projects *
            Here are my Projects * Here are my Projects * Here are my Projects *
            Here are my Projects * Here are my Projects * Here are my Projects *
            Here are my Projects * Here are my Projects * Here are my Projects
          </p>
        ))}
      </ProjectBackground>
      <ProjectListContainer>
        <ProjectArrow
          onClick={() => {
            page > firstPage ? setPage(page - 1) : null;
          }}
        >{`<`}</ProjectArrow>
        <ProjectListView>
          {/* <ProjectListDiv> */}
          {projcetData.length > 0 ? (
            projcetData.map((data: NodesType, index) => (
              <ProjectListCard key={index}>
                <ProjectListTitle>{data.frontmatter?.title}</ProjectListTitle>
                <CardSummary>{data.frontmatter.summary}</CardSummary>
                <LeanMore>
                  <Link to={`/projcet/${data.frontmatter.idx}`}>
                    Learn More
                  </Link>
                </LeanMore>
              </ProjectListCard>
            ))
          ) : (
            <></>
          )}
        </ProjectListView>
        <ProjectArrow
          onClick={() => {
            page < lastPage ? setPage(page + 1) : null;
          }}
        >{`>`}</ProjectArrow>
      </ProjectListContainer>
    </ProjectWrap>
  );
};

export default ProjectList;
