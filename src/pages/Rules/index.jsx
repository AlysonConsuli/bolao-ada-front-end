import * as S from "../../styles/style.js";

export const Rules = () => {
  return (
    <S.PageContainer>
      <S.Rules>
        <h1>Regras Bolão ADA</h1>
        <ul>
          <li>Se você acertar o placar exato do jogo, você ganha 10 pontos.</li>
          <li>
            Se você acertar o vencedor e apenas um dos placares, você ganha 7
            pontos.
          </li>
          <li>Se você acertar apenas o vencedor, você ganha 5 pontos.</li>
          <li>
            Se você errar o vencedor, mas acertar um dos placares, você ganha 2
            pontos.
          </li>
          <li>Se você errar tudo, você não pontua.</li>
          <li>
            O primeiro lugar receberá 65% do prêmio. <br />
            O segundo lugar receberá 25% do prêmio. <br />
            O terceiro lugar receberá 10% do prêmio. <br />
          </li>
          <li>Para gastar na Eletrônica ADA</li>
          <li>
            Em caso de empate, os jogadores dividem o prêmio relativo a posição!
          </li>
          <li>Para participar é preciso pagar 20 reais ao Alex.</li>
        </ul>
        <h2>Boa sorte !!!</h2>
      </S.Rules>
    </S.PageContainer>
  );
};
