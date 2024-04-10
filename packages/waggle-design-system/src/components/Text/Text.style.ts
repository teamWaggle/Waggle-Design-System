import { css } from "@emotion/react";

import type { TextProps } from "@/components/Text/Text";

import { Theme } from "@/styles/Theme";

export const textStyle = (size: Required<TextProps>["size"]) => {
  const style = {
    xLarge: css({
      fontSize: Theme.text.xLarge.fontSize,
      lineHeight: Theme.text.xLarge.lineHeight,
    }),
    large: css({
      fontSize: Theme.text.large.fontSize,
      lineHeight: Theme.text.large.lineHeight,
    }),
    // default text setting
    medium: css({
      fontSize: Theme.text.medium.fontSize,
      lineHeight: Theme.text.medium.lineHeight,
    }),
    small: css({
      fontSize: Theme.text.small.fontSize,
      lineHeight: Theme.text.small.lineHeight,
    }),
    xSmall: css({
      fontSize: Theme.text.xSmall.fontSize,
      lineHeight: Theme.text.xSmall.lineHeight,
    }),
  };

  return style[size];
};
