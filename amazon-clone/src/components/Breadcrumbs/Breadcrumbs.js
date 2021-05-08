import { Box } from "@material-ui/core";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";
import { StyledBreadcrumb } from "./styles";

function handleClick(e) {
  e.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CustomizedBreadcrumbs = ({ step1, step2, step3 }) => {
  return (
    <Box m="0 0.5rem">
      <Breadcrumbs aria-label="breadcrumb">
        {step1 ? (
          <StyledBreadcrumb
            component="a"
            href="#"
            label={step1}
            icon={<HomeIcon fontSize="small" />}
            onClick={handleClick}
          />
        ) : null}
        {step2 ? (
          <StyledBreadcrumb
            component="a"
            href="#"
            label={step2}
            onClick={handleClick}
          />
        ) : null}
        {step3 ? (
          <StyledBreadcrumb
            label={step3}
            deleteIcon={<ExpandMoreIcon />}
            onClick={handleClick}
            onDelete={handleClick}
          />
        ) : null}
      </Breadcrumbs>
    </Box>
  );
};

export default CustomizedBreadcrumbs;
