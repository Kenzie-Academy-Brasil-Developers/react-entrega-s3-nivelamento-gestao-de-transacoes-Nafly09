import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 26vh;
  margin-top: 16px;
`;

export const StyledTextField = styled(TextField)`
  && {
    border-color: var(--white);
    /* background-color: var(--lightBlue); */
    color: var(--lightGrey);
  }
`;
