import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postStory } from "@/api/story/postStory";

import { QUERY_KEYS } from "@/constants/queryKeys";

export const usePostStoryMutation = () => {
  const queryClient = useQueryClient();

  const postStoryMutation = useMutation({
    mutationFn: postStory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.STORY_LIST] });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return postStoryMutation;
};
