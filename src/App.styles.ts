import { Badge, IconButton, withStyles } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 5,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export const StyledIconButton = withStyles((theme) => ({
  root: {
    position: "fixed",
    right: "3rem",
    top: "3rem",
  },
}))(IconButton);
