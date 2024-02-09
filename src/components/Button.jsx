import { styled } from "styled-components";

export const NewAccountBtn = styled.button`
  cursor: pointer;
  background: none;
  line-height: inherit;
  color: #f0b322;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    color: #f0920e;
  }
`;

export const SignInBtn = styled.button`
  cursor: pointer;
  background: none;
  line-height: inherit;
  &:focus {
    outline: none;
  }
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
  &:hover {
    color: #f0920e;
  }
`;
