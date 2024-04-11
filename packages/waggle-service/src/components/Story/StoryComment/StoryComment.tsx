import { useState, useRef, useCallback } from "react";

import { css } from "@emotion/react";

import HeartEmptyIcon from "@/assets/svg/ic-heart-empty.svg?react";

import { Flex, Box, Divider, Text } from "@/components/common";
import Comment from "@/components/Story/StoryComment/Comment";
import CommentInput from "@/components/Story/StoryComment/CommentInput";

import { useCommentQuery } from "@/hooks/api/comment/useCommentQuery";
import { useEditCommentMutation } from "@/hooks/api/comment/useEditCommentMutation";
import { usePostCommentMutation } from "@/hooks/api/comment/usePostCommentMutation";

import { getDefaultTextStyle } from "@/styles/getDefaultTextStyle";
import { Theme } from "@/styles/Theme";

interface StoryCommentParams {
  boardId: number;
  recommendCount: number;
}

const StoryComment = ({ boardId, recommendCount }: StoryCommentParams) => {
  const { commentData } = useCommentQuery(0, boardId);

  const { mutate: postCommentMutation } = usePostCommentMutation();
  const { mutate: editCommentMutation } = useEditCommentMutation();

  const [commentContent, setCommentContent] = useState("");
  const [mentionedMemberList] = useState<string[]>(["test"]);
  const [commentButtonText, setCommentButtonText] = useState("등록");
  const [commentId, setCommentId] = useState(0);

  const commentInputRef = useRef<HTMLInputElement>(null);

  const handleAddComment = () => {
    postCommentMutation(
      { content: commentContent, mentionedMemberList, boardId },
      {
        onSuccess: () => {
          setCommentContent("");
        },
      },
    );
  };

  const handleEditComment = () => {
    editCommentMutation(
      {
        content: commentContent,
        mentionedMemberList,
        commentId,
      },
      {
        onSuccess: () => {
          setCommentContent("");
          setCommentId(0);
        },
      },
    );
  };

  const handleEditClick = useCallback((content: string, commentId: number) => {
    if (!commentInputRef.current) return;

    commentInputRef.current.focus();
    setCommentContent(content);
    setCommentId(commentId);
    setCommentButtonText("수정");
  }, []);

  if (!commentData) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      <Divider length="309px" />

      {/* 코멘트 영역 */}
      <Box css={commentLayoutStyle}>
        {commentData.result.commentList.map((comment) => (
          <Comment
            key={comment.commentId}
            commentId={comment.commentId}
            content={comment.content}
            createdDate={comment.createdDate}
            member={comment.member}
            handleEditClick={handleEditClick}
          />
        ))}
      </Box>

      <Divider length="309px" />

      {/* 코멘트 작성 영역 */}
      <Flex styles={{ direction: "column", gap: "10px", padding: "15px 24px" }}>
        <Flex styles={{ align: "center", gap: "2px" }}>
          <HeartEmptyIcon />

          <Text size="small" css={getDefaultTextStyle(Theme.color.disabled_text, 600)}>
            {recommendCount}
          </Text>
        </Flex>

        <CommentInput
          width="260px"
          placeholder="댓글 작성"
          handleButtonClick={commentButtonText === "등록" ? handleAddComment : handleEditComment}
          content={commentContent}
          setContent={setCommentContent}
          commentInputRef={commentInputRef}
          commentButtonText={commentButtonText}
        />
      </Flex>
    </>
  );
};

export default StoryComment;

const commentLayoutStyle = css({
  width: "100%",
  overflow: "auto",
  height: "450px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px 0",
});
