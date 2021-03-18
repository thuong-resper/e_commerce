import { Button } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const SeeMoreButtonMobile = (props) => {
  const { title, titleAfterClick, isActive, toggleClass, link } = props;

  return (
    <div>
      {isActive ? (
        <Link to={link}>
          <Button
            onClick={toggleClass}
            variant="outlined"
            color="primary"
            className="button-show-more"
            endIcon={<ChevronRightIcon />}
          >
            {titleAfterClick}
          </Button>
        </Link>
      ) : (
        <Button
          onClick={toggleClass}
          variant="outlined"
          color="primary"
          className="button-show-more"
          endIcon={<ExpandMoreIcon />}
        >
          {title}
        </Button>
      )}
    </div>
  );
};

export default SeeMoreButtonMobile;
