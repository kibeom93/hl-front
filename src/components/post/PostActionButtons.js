import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PostActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

const ActionButton = styled.div`
  padding: 0.25rem 0.5 rem;
  boder-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
    padding-top: 0;
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const PostActionButtons = () => {
  return (
    <PostActionButtonsBlock>
      <ActionButton>수정</ActionButton>
      <ActionButton>삭제</ActionButton>
    </PostActionButtonsBlock>
  );
};

export default PostActionButtons;
