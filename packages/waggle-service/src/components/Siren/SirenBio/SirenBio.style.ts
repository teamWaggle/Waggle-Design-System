import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const titleStyle = css({
  color: Theme.color.text,
  fontWeight: 700,
  flexDirection: "column",
  gap: "10px",
});

export const buttonStyle = css({
  all: "unset",
  backgroundColor: Theme.color.brand_primary,
  padding: "6px 12px",
  fontWeight: 600,
  color: Theme.color.white,
  borderRadius: "4px",
  cursor: "pointer",
});
