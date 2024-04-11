import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const layoutStyle = css({
  flexDirection: "column",
  gap: "30px",
  marginTop: "80px",
  paddingLeft: "30px",
  width: "100%",
});

export const petCardBoxStyle = css({
  marginTop: "30px",
  flexDirection: "column",
  gap: "20px",
});

export const buttonStyle = css({
  width: "100px",
  height: "36px",
  backgroundColor: Theme.color.brand_primary,
  textAlign: "center",
  border: "none",
  outline: "none",
  color: Theme.color.white,
  fontWeight: 600,
  borderRadius: "4px",
  cursor: "pointer",
});
