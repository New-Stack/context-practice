import React, { FC } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  :hover {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  :hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheackCircle = styled.div<{
  done: boolean;
}>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid 38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div<{
  done: boolean;
}>`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

interface ItemType {
  done: boolean;
  text: string;
}

const TodoItem: FC<ItemType> = ({ done, text }) => {
  return (
    <TodoItemBlock>
      <CheackCircle done={done}>{done && <MdDone />}</CheackCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default TodoItem;
