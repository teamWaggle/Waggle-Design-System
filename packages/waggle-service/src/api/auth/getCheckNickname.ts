import type { CommonResponseType } from "@/types/common";

import { axiosInstance } from "@/api/axiosInstance";
import { END_POINTS } from "@/constants/api";

export const getCheckNickname = async (nickname: string) => {
  const { data } = await axiosInstance.get<CommonResponseType>(END_POINTS.CHECK_NICKNAME(nickname));

  return data;
};
