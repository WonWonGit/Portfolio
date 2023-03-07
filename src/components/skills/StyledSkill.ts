import styled from "styled-components";

export const SkillsWrap = styled.div`
  width: 80%;
  margin: 100px auto;
`;

export const SkillsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 30px;

  ${(props) => props.theme?.device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SkillsTitle = styled.div`
  font-size: 4rem;
  font-family: "Barbra";
  color: ${(props) => props.theme?.colors.pointColor};
  position: relative;

  div {
    position: absolute;
    z-index: 1;
  }

  img {
    height: 200px;
    width: 200px;
    position: absolute;
    right: 20%;
    top: 10%;
    right: 20%;
    top: 10%;
    transform: rotate(-45deg);
  }
`;

export const SkillsCard = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid ${(props) => props.theme?.colors.fontColor};
  border-radius: 15px;
  color: ${(props) => props.theme?.colors.fontColor};

  ${(props) => props.theme?.device.mobile} {
    height: 350px;
  }
`;

export const SkillCardTitle = styled.div`
  font-size: 20px;
  padding-bottom: 10px;
  font-weight: 600;
`;

export const SkillsCardBody = styled.div`
  display: flex;
  height: 150px;
  flex-wrap: wrap;
  flex-direction: column;
  p {
    padding: 10px 0;
  }

  ${(props) => props.theme?.device.mobile} {
    flex-wrap: nowrap;
  }
`;
