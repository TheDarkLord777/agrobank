import styled from "styled-components";

const theme = {
  buttons: {
    primary: { background: "#00CD69", color: "#FFFFFF" },
    secondary: { background: "#FFFFFF", color: "#FFFFFF" },
    orange: { background: "#FE9A38", color: "#FFFFFF" },
    red: { background: "#E03137", color: "#FFFFFF" },
    plain: { background: "#E7F7EF", color: "#00CD69" },
    whiteBorder: { background: "#000000", color: "#FFFFFF" },
    warning: {
      background: "#FFEBD7",
      color: "#FE9A38",
    },
  },
  buttonSizes: {
    small: { height: "32px" },
    medium: { height: "48px" },
    large: { height: "56px" },
  },
  fontFamily: {
    bold: { fontFamily: "ALSBold,sans-serif" },
    medium: { fontFamily: "ALSMedium,sans-serif" },
    regular: { fontFamily: "ALSRegular,sans-serif" },
  },
};

export const ButtonStyled = styled.button<{
  size?: keyof typeof theme.buttonSizes;
  $variant?: keyof typeof theme.buttons;
  $font?: keyof typeof theme.fontFamily;
  width?: string;
}>`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || "205px"};
  cursor: pointer;
  border-radius: 12px;
  background-color: ${(props) =>
    theme.buttons[props.$variant || "primary"].background};
  height: ${(props) => theme.buttonSizes[props.size || "medium"].height};
  color: ${(props) => theme.buttons[props.$variant || "primary"].color};
  border: none;
  font-family: ${(props) => theme.fontFamily[props.$font || "bold"].fontFamily};
  font-size: 16px;
  transition-duration: 0.4s;

  &:hover {
    background-color: ${(props) =>
      props.$variant === "primary" || props.$variant === "plain"
        ? "#45a049"
        : theme.buttons[props.$variant || "primary"].background};
    color: ${(props) =>
      props.$variant === "primary" || props.$variant === "plain"
        ? "white"
        : theme.buttons[props.$variant || "primary"].color};
  }
  ${(props) =>
    props.$variant === "warning" &&
    `
    &:hover {
      background-color: #FFD700;
      color: black;
    }
  `}
`;

ButtonStyled.defaultProps = {
  $variant: "primary",
};
