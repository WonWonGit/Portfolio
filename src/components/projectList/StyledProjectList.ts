import styled from "styled-components";

export const ProjectWrap = styled.div`
  width: 100%;
  margin-top: 100px;
  height: 100vh;
  position: relative;
`;

export const ProjectBackground = styled.div`
  height: 50%;
  font-size: 3rem;
  position: relative;
  overflow: hidden;
  font-family: "Barbra";
  color: ${(props) => props.theme?.colors.pointColor};

  p {
    position: absolute;
    width: 2000px;
  }

  p:first-child {
    transform: translateX(-20%);
    top: 50px;
  }

  p:nth-child(2) {
    transform: translateX(-20%);
    top: 200px;
  }

  p:nth-child(3) {
    transform: translateX(-40%);
    top: 100px;
  }
`;

export const ProjectListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background: white;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  height: 50%;
`;

export const ProjectListCard = styled.div`
  width: 250px;
  height: 80%;
  border: 1px solid;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
  display: flex;
  &:hover {
    background: #404040;
    border: 1px solid #404040;
    color: #f5f5f5;
    transition: 0.6s;
  }
`;

export const ProjectListView = styled.div`
  width: 60%;
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

export const LeanMore = styled.div`
  text-align: end;
  cursor: pointer;
`;

export const CardSummary = styled.div`
  flex: 1;
  padding-top: 50px;
  line-height: 20px;
`;

export const ProjectListTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProjectArrow = styled.div`
  font-family: "Barbra";
  font-size: 5rem;
  font-weight: 600;
  margin: 0 auto;

  :hover {
    cursor: pointer;
    color: #404040;
    transition: 0.3s;
  }
`;
