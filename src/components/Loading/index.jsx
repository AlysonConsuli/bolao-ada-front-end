import { ThreeDots } from "react-loader-spinner";
import * as S from "../../styles/style.js";

export const Loading = () => {
  return (
    <S.Loading>
      <ThreeDots color="#fff" height="100" width="100" ariaLabel="loading" />
    </S.Loading>
  );
};

export const LoadingHome = () => {
  return (
    <S.LoadingHome>
      <ThreeDots color="#fff" height="100" width="100" ariaLabel="loading" />
    </S.LoadingHome>
  );
};
