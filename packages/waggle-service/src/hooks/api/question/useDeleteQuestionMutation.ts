import { toast } from "react-toastify";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteQuestion } from "@/api/question/deleteQuestion";

export const useDeleteQuestionMutation = () => {
  const queryClient = useQueryClient();

  const deleteQuestionMutation = useMutation({
    mutationFn: deleteQuestion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["questionList"],
      });
    },
    onError: () => {
      toast.error("오류가 발생했습니다. 잠시 후 다시 시도해주세요");
    },
  });

  return deleteQuestionMutation;
};
