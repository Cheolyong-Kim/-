import styled from "@emotion/styled";
import { css } from "@emotion/react";

const flexRow = css`
  display: flex;
  flex-direction: row;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const CommentWrap = styled.div`
  ${flexColumn};
  width: 1200px;
  margin-top: 20px;
`;

export const ReviewWrap = styled.div`
  ${flexColumn};
  align-items: start;
  width: 100%;
  margin-bottom: 35px;
`;

export const ReviewTitleWrap = styled.div`
  ${flexRow};
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const ReviewTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #404040;
`;

export const ReviewInputWrap = styled.div`
  width: 100%;
  padding-top: 5px;
  border: 1px solid #bbbbbb;
`;

export const ReviewInfoWrap = styled.div`
  ${flexRow};
  justify-content: space-between;
  align-items: center;
  width: 15%;
`;

export const ReviewInfoInput = styled.input`
  width: calc(100% / 2);
  height: 35px;
  margin-left: 20px;
  padding-left: 5px;
  border: none;
  border-bottom: 1px solid #bbbbbb;
  font-size: 16px;
  color: #404040;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bbbbbb;
  }
`;

export const ReviewContentsWrap = styled.div`
  ${flexColumn};
  width: 100%;
  position: relative;
`;

export const ReviewContents = styled.textarea`
  width: 100%;
  height: 161px;
  padding: 20px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #404040;
  resize: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #bbbbbb;
  }
`;

export const ReviewContentsLimit = styled.span`
  position: absolute;
  bottom: 15px;
  left: 20px;
  font-size: 16px;
  color: #bbbbbb;
`;

export const ReviewContentsSubmitBtn = styled.button`
  position: absolute;
  right: 0px;
  bottom: 0px;
  width: 70px;
  height: 40px;
  border: none;
  background: #fe7488;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

export const ReviewContentsCancleBtn = styled.button`
  position: absolute;
  right: 70px;
  bottom: 0;
  width: 70px;
  height: 40px;
  border: 1px solid #bbbbbb;
  background: white;
  font-size: 16px;
  color: #404040;
  cursor: pointer;
`;
