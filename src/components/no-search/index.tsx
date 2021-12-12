import { NextPage } from "next";
import * as S from "./styled";

export const NoSearch: NextPage = () => {
  return (
    <S.Wrapper>
      <h1>Nenhum usuario pesquisado</h1>
    </S.Wrapper>
  );
};
