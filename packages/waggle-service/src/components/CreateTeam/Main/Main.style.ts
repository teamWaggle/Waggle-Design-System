import { css } from "@emotion/react";

import { Theme } from "@/styles/Theme";

export const titleBoxStyle = css({
  display: "flex",
  alignItems: "center",
  marginTop: "52px",
  gap: "24px",
});

export const headingStyle = css({
  color: Theme.color.brand_primary,
  fontWeight: 600,
  width: "fit-content",
});

export const leftArrowIconStyle = css({
  cursor: "pointer",
});

export const imageBoxStyle = (isFile: boolean) =>
  css({
    display: "flex",
    backgroundColor: isFile ? "none" : Theme.color.brand_primary,
    width: "200px",
    height: "200px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    cursor: "pointer",
    objectFit: "cover",
  });

export const teamContentBox = css({
  marginTop: "40px",
  height: "225px",
});

export const textInputBoxStyle = css({
  marginLeft: "40px",
  maxWidth: "800px",
  height: "100%",
  width: "100%",
  flexDirection: "column",
});

export const colorTitleStyle = css({
  color: Theme.color.text,
  fontSize: "24px",
  fontWeight: 600,
  marginTop: "40px",
  marginBottom: "20px",
});

export const submitButtonStyle = css({
  width: "100px",
  height: "40px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "40px",
  marginLeft: "auto",
  border: "none",
  borderRadius: "4px",
  color: Theme.color.white,
  backgroundColor: Theme.color.brand_primary,
});