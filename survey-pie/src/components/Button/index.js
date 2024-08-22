import styled from "styled-components";
import { PRIMARY, SECONDARY, TERTIARY } from "../../constants/color";

const colorMap = {
  PRIMARY,
  SECONDARY,
  TERTIARY,
};

const Button = styled.button`
  padding: 16px 24px;
  width: 200px;
  color: ${({ type = 'PRIMARY' }) => colorMap[type]?.BUTTON?.DEFAULT?.COLOR || '#000000'};
  background: ${({ type = 'PRIMARY' }) => colorMap[type]?.BUTTON?.DEFAULT?.BACKGROUND || '#FFFFFF'};
  border-radius: 4px;
  border: ${({ type = 'PRIMARY' }) =>
    type === "TERTIARY"
      ? `1px solid ${TERTIARY.BUTTON?.DEFAULT?.BORDER || '#000000'}`
      : "none"};
  font-weight: bold;

  &:hover {
    color: ${({ type = 'PRIMARY' }) => colorMap[type]?.BUTTON?.HOVER?.COLOR || '#000000'};
    background: ${({ type = 'PRIMARY' }) => colorMap[type]?.BUTTON?.HOVER?.BACKGROUND || '#FFFFFF'};
    border: ${({ type = 'PRIMARY' }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON?.HOVER?.BORDER || '#000000'}`
        : "none"};
  }

  &:active {
    color: ${({ type = 'PRIMARY' }) => colorMap[type]?.BUTTON?.PRESSED?.COLOR || '#000000'};
    background: ${({ type = 'PRIMARY' }) => colorMap[type]?.BUTTON?.PRESSED?.BACKGROUND || '#FFFFFF'};
    border: ${({ type = 'PRIMARY' }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON?.PRESSED?.BORDER || '#000000'}`
        : "none"};
  }

  &:disabled {
    color: ${({ type = 'PRIMARY' }) => colorMap[type]?.BUTTON?.DISABLED?.COLOR || '#CCCCCC'};
    background: ${({ type = 'PRIMARY' }) => colorMap[type]?.BUTTON?.DISABLED?.BACKGROUND || '#FFFFFF'};
    border: ${({ type = 'PRIMARY' }) =>
      type === "TERTIARY"
        ? `1px solid ${TERTIARY.BUTTON?.DISABLED?.BORDER || '#CCCCCC'}`
        : "none"};
  }
`;

export default Button;