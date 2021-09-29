import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledTextField = styled(TextField)`
  && {
    border-color: var(--white);
    background-color: var(--lightBlue);
    color: var(--lightGrey);
  }
`;
