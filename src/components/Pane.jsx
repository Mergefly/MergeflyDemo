import React from "react";
import PropTypes from "prop-types";

function Pane(props) {
  const style = {};
  const size = props.size || 0;
  let classes = "layout-pane";

  style.height = `${size}${unit}`;
  style.width = `${size}${unit}`;
  unit = null;
  classes += " layout-pane-primary layout-pane-stretch";

  return (
    <div className={classes} style={style}>
      {props.children}
    </div>
  );
}

Pane.propTypes = {
  vertical: PropTypes.bool,
  primary: PropTypes.bool,
  size: PropTypes.number,
  percentage: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Pane.defaultProps = {
  vertical: false,
  primary: false,
  size: 0,
  percentage: false,
  children: [],
};

export default Pane;
