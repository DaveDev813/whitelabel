import React from "react";
import Typography from "@material-ui/core/Typography";

interface LaunchTitleProps {
  subtitle?: string;
}
const LaunchTitle: React.FC<LaunchTitleProps> = ({ subtitle }) => {
  return (
    <div style={{ textAlign: "center", width: "80%" }}>
      <Typography component="h1" variant="h5">
        COMPANY NAME
      </Typography>
      {subtitle && (
        <Typography
          style={{ marginTop: "12px" }}
          align="center"
          color="textSecondary"
          component="p"
        >
          {subtitle}
        </Typography>
      )}
    </div>
  );
};

export default LaunchTitle;
