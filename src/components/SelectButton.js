import { makeStyles } from "@mui/styles";
// import React from "react";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectButton: {},
  });

  const classes = useStyles();

  return (
    <span
      onClick={onClick}
      className={classes.selectbutton}
      style={{
        border: "1px solid black",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Sofia Sans",
        cursor: "pointer",
        backgroundColor: selected ? "goldenrod" : "",
        color: selected ? "whitesmoke" : "",
        fontWeight: selected ? 700 : 500,
        "&:hover": {
          backgroundColor: "#03a9f4",
          color: "white",
        },
        width: "22%",
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;
