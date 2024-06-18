import styled from "styled-components";

export const LandingPage = styled.div`
  min-height: 80vh;
  background-color: "#242321";
  & #hero-text {
  }

  & #hero {
    /* width: 100%; */
  }
  .landingImg {
    width: 350px;
    height: 300px;
  }
`;

export const SectionOne = styled.div`
  background-color: white;
  min-height: 200px;
  margin-top: -100px;
  width: 90%;
  box-shadow: 0px 0px 20px #eb9647a5;
  border-radius: 70px;

  @media screen and (orientation: landscape) {
    margin: -0px;
    width: 100%;
    border-radius: 0;
    & #section-2-text-1 {
      font-size: var(--fontVeryBig);
    }
  }
  @media (max-width: 767px) {
  }
  @media screen and (max-width: 600px) {
    .landingImg {
      display: none;
    }
  }
  @media (max-width: 575px) {
  }
  @media (max-width: 425px) {
  }
`;

