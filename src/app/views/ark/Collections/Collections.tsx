import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ARKPage from "app/layouts/ARKPage";
import { AppTheme } from "app/theme/types";
import React from "react";

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
  },
}));

const Collections: React.FC<React.HTMLAttributes<HTMLDivElement>> = (
  props: any
) => {
  const { children, className, ...rest } = props;
  const classes = useStyles();

  return (
    <ARKPage {...rest}>
      <Container className={classes.root} maxWidth="lg">
        <span>Collections</span>
      </Container>
    </ARKPage>
  );
};

export default Collections;
