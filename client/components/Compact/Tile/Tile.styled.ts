import { Image as ImageFunc } from "../../Basic/Image/Image";
import styled from "styled-components";

export const CarTile = styled.div`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  padding: 8px 16px;
`;

export const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  position: relative;
`;

export const Image = styled.img`
  border-radius: 16px;
  max-height: 200px;
  width: auto;
`;

export const ImageBadge = styled(ImageFunc)`
  align-items: center;
  bottom: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: absolute;
  right: -16px;
`;

export const Combined = styled.span`
  font-size: 10px;
`;

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;
