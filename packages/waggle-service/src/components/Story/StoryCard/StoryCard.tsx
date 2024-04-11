import MediaIcon from "@/assets/svg/ic-many-media.svg?react";

import { Flex } from "@/components/common";
import StoryDetailModal from "@/components/Story/StoryDetailModal/StoryDetailModal";

import { useStoryQuery } from "@/hooks/api/story/useStoryQuery";
import useModal from "@/hooks/useModal";

import type { StoryListInfoType } from "@/types/story";

import { imgStyle, iconStyle } from "@/components/Story/StoryCard/StoryCard.style";

const StoryCard = ({ boardId, thumbnail }: StoryListInfoType) => {
  const modal = useModal();

  const { storyData } = useStoryQuery(boardId);

  const storyDetailOpen = () => {
    modal.openModal({
      key: `StoryDetail${boardId}`,
      component: () => (
        <StoryDetailModal
          boardId={storyData.result.boardId}
          content={storyData.result.content}
          hashtagList={storyData.result.hashtagList}
          mediaList={storyData.result.mediaList}
          member={storyData.result.member}
          createdDate={storyData.result.createdDate}
          recommendCount={storyData.result.recommendCount}
        />
      ),
    });
  };

  return (
    <Flex
      styles={{ align: "center", width: "252px", height: "252px", position: "relative" }}
      onClick={storyDetailOpen}
    >
      <img src={thumbnail} alt="profileImg" css={imgStyle} />
      <MediaIcon css={iconStyle} />
    </Flex>
  );
};

export default StoryCard;
