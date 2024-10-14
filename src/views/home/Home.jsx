import PageLayout from "./../../components/common/PageLayout";
import profile from "../../assets/img/profile.png";
import {
  LandingSubtitle,
  LandingTitle,
  Marker,
  ProfilePicture,
} from "./style/components";
import { Column } from "../../components/common/Column";
import Row from "../../components/common/Row";
import { SocialMediaButton } from "../../components/common/button";
import { texts } from "../../utils/texts";
import useMediaQuery from "../../hooks/useMediaQuery";

const Home = ({ setSelectedPage, language, selectedPage }) => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <PageLayout>
      <ProfilePicture src={profile} />
      <Column>
        <LandingTitle>Cristhian Cintra</LandingTitle>
        <Row align={"center"} justify={"center"}>
          <Marker />
          <LandingSubtitle>{texts[language].landing}</LandingSubtitle>
          <Marker />
        </Row>
        <Row>
          <SocialMediaButton
            height={"50px"}
            width={"50px"}
            rounded={"50%"}
            href="https://github.com/CintraB"
          >
            <i
              className={`fa-brands fa-github`}
              style={{
                fontSize: "20px",
              }}
            ></i>
          </SocialMediaButton>
          <SocialMediaButton
            height={"50px"}
            width={"50px"}
            rounded={"50%"}
            href="https://github.com/CintraB"
          >
            <i
              className={`fa-brands fa-linkedin`}
              style={{
                fontSize: "20px",
              }}
            ></i>
          </SocialMediaButton>
          <SocialMediaButton
            height={"50px"}
            width={"50px"}
            rounded={"50%"}
            href="https://api.whatsapp.com/send?phone=5535991631298"
          >
            <i className="fa-brands fa-whatsapp" style={{ fontSize: "20px" }} />
          </SocialMediaButton>
        </Row>
      </Column>
    </PageLayout>
  );
};

export default Home;
