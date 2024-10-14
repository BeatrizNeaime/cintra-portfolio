import styled from "styled-components";
import pt from "../../../assets/img/svg/pt.svg";
import en from "../../../assets/img/svg/en.svg";

const LanguageFlag = styled.img`
  cursor: pointer;
  height: 15px;
`;

const Language = ({ language, setLanguage }) => {
  return (
    <LanguageFlag
      src={language === "en" ? en : pt}
      alt={language === "pt" ? "Português" : "English"}
      onClick={() => setLanguage(language === "en" ? "pt" : "en")}
    />
  );
};

export default Language;
