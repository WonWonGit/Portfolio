import styled from "styled-components";

interface StyleType {
  backgroudColor: string;
  titleColor: string;
}

export const AboutMeWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fit, 250px);
  width: 80%;
  margin: 100px auto;
  gap: 20px;

  div:nth-child(1) {
    grid-column: 1 / span 2;
  }

  div:nth-child(4) {
    grid-area: 2/ 2 / 4 / -1;

    justify-content: flex-start;
    p {
      color: whitesmoke;
    }
  }

  ${(props) => props.theme.device?.tablet} {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-family: "Barbra";
  font-size: 3rem;
  padding-bottom: 25px;

  ${(props) => props.theme.device?.mobile} {
    font-size: 1.5rem;
  }
`;

export const GridDiv = styled.div<StyleType>`
  background-color: ${(props) => props.backgroudColor};
  ${Title} {
    color: ${(props) => props.titleColor};
  }
  padding: 40px;
  border-radius: 20px;
  box-shadow: 7px 10px 30px -1px rgb(0 0 0 / 14%);
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) => props.theme.device?.tablet} {
    &.none {
      display: none;
    }
  }
`;

export const GridContent = styled.div`
  font-size: 18px;

  ${(props) => props.theme.device?.tablet} {
    font-size: 14px;
  }

  p {
    line-height: 30px;

    ${(props) => props.theme.device?.tablet} {
      font-size: 14px;
    }
  }
  .link {
    font-size: 25px;
    padding-top: 20px;
    word-break: break-all;

    ${(props) => props.theme.device?.tablet} {
      font-size: 20px;
    }

    ${(props) => props.theme.device?.mobile} {
      font-size: 15px;
    }
  }
`;

export const GridTitleDiv = styled.div`
  position: relative;
  height: 400px;
  display: none;
  ${(props) => props.theme.device?.tablet} {
    display: block;
  }
`;

export const GridTitleCard = styled(GridDiv)`
  ${Title} {
    padding-bottom: 0;
  }
  padding: 20px 40px 40px 40px;
  position: absolute;
  width: 100%;

  &.none {
    opacity: 1;
    display: block;
  }

  &.none:nth-child(1) {
    bottom: 160px;
  }

  &.none:nth-child(2) {
    bottom: 80px;
  }

  &.none:last-child {
    bottom: 0;
  }
`;

export const AboutMeSub = styled.div`
  margin: 0 auto;
  width: 80%;
  line-height: 25px;
  margin-top: 40px;
  font-size: 20px;

  color: ${(props) => props.theme.colors?.fontColor};
`;
