import styled from "styled-components";

const PageLayout = styled.div`
  width: 85vw;
  margin: 0 auto;
  padding-top: 1rem;
  min-height: 100vh;
  color: white;
  min-height: calc(100dvh + 80px);

  @media screen and (min-width: 1020px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.gap || "80px"};
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export default PageLayout;
