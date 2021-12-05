import { NextPage } from "next";
import * as S from "./styled";

const NoSearch: NextPage = () => {
  return (
    <S.Wrapper>
      <h1>Nenhum usuario pesquisado</h1>
    </S.Wrapper>
  );
};

export default NoSearch;
