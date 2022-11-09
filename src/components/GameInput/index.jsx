import { useState } from "react";
import * as S from "../../styles/style.js";

export const GameInput = ({ onChange, value, disabled }) => {
  const [focused, setFocused] = useState(false);

  return (
    <S.GameInput>
      <input
        type="number"
        name="score"
        required
        max="99"
        min="0"
        step="1"
        onChange={onChange}
        value={value}
        disabled={disabled}
        onBlur={() => setFocused(true)}
        focused={focused.toString()}
        autoComplete="off"
      />
    </S.GameInput>
  );
};
