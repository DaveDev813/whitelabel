import React from "react";
import Typography from "@material-ui/core/Typography";

interface LaunchTitleProps {
  subtitle?: string;
}

const LaunchTitle: React.FC<LaunchTitleProps> = ({ subtitle }) => {
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        REGASCO
      </Typography>
      <Typography
        style={{ marginTop: "12px" }}
        align="center"
        color="textSecondary"
        component="p"
      >
        {subtitle}
      </Typography>
    </React.Fragment>
  );
};

export default LaunchTitle;
