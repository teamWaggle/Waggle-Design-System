import { useNavigate } from "react-router-dom";

import { Flex, Heading, Text } from "@/components/common";
import SirenCard from "@/components/Siren/SirenCard/SirenCard";

import { PATH } from "@/constants/path";

import { useSirenRepresentativeQuery } from "@/hooks/api/siren/useSirenRepresentativeQuery";

import { buttonStyle, titleStyle } from "@/components/Siren/SirenBio/SirenBio.style";

const SirenBio = () => {
  const { sirenRepresentativeListData } = useSirenRepresentativeQuery();

  const navigate = useNavigate();

  return (
    <Flex tag="section" styles={{ gap: "50px" }}>
      <Flex styles={{ direction: "column", gap: "28px" }}>
        <Flex css={titleStyle}>
          <Heading>위급한 일이 생겼나요?</Heading>
          <Heading>Waggle 견주들과</Heading>
          <Heading>함께 문제를 해결해요</Heading>
        </Flex>

        <button css={buttonStyle} onClick={() => navigate(PATH.SIREN_CREATE)}>
          <Text size="xLarge">글 작성하기</Text>
        </button>
      </Flex>

      <Flex styles={{ gap: "12px" }}>
        {sirenRepresentativeListData.result.sirenList.map((sirenInfo) => (
          <SirenCard key={sirenInfo.boardId} sirenInfo={sirenInfo} />
        ))}
      </Flex>
    </Flex>
  );
};

export default SirenBio;
