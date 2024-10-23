import { Column } from "../../components/common/Column";
import PageLayout from "../../components/common/PageLayout";
import Row from "../../components/common/Row";
import SectionTitle from "../../components/common/SectionTitle";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import { AboutImage } from "./style/components";
import placeholder from "../../assets/img/placeholder.png";

const About = ({ setSelectedPage, language, selectedPage }) => {
  const desktop = useMediaQuery("(min-width: 1024px)");

  return (
    <PageLayout>
      <Column gap={"1.5rem"}>
        <SectionTitle title={texts[language].about.title} />
        <Row>
          <Column width={desktop ? "50%" : ""}>
            <p>{texts[language].about.description}</p>
          </Column>
          {desktop && (
            <Column width={desktop ? "50%" : ""}>
              <AboutImage src={placeholder} />
            </Column>
          )}
        </Row>
      </Column>
    </PageLayout>
  );
};

export default About;
