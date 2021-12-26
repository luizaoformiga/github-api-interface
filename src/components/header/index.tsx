import { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import { NextComponentType } from "next";

export const Header: NextComponentType = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState("");

  const submitGetUser = (): void => {
    if (!usernameForSearch) return undefined;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          value={usernameForSearch}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsernameForSearch(
              (prevState) => (prevState = event.target.value)
            )
          }
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

