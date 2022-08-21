import { Link } from "react-router-dom";
import * as S from "../../styles/style.js";

export const AdminHomepage = () => {
  return (
    <S.PageContainer>
      <S.ArticleContainer>
        <Link to="/admin/add-result">
          <S.Article>
            <span>Add Results</span>
          </S.Article>
        </Link>
        <Link to="/admin/users-payment">
          <S.Article>
            <span>Users Payment</span>
          </S.Article>
        </Link>
      </S.ArticleContainer>
    </S.PageContainer>
  );
};
