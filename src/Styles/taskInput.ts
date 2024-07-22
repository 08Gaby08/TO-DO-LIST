// src/styles/TaskInput.styles.ts
import { css } from '@emotion/react';

export const inputContainer = css`
  display: flex;
  margin-bottom: 20px;
`;

export const inputStyles = css`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const buttonStyles = css`
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
