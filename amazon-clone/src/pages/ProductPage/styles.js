import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: "#fff",
    borderRadius: 4,
    marginBottom: "1.5rem",
  },
  brandLink: {
    margin: "0 5px",
    textDecoration: "none",
    fontSize: "12px",
  },
  brandDivider: {
    height: 15,
    width: 1,
    background: "#9e9e9e",
  },
  priceCompare: {
    textDecoration: "line-through",
    color: "#9e9e9e",
    whiteSpace: "nowrap",
    fontSize: 14,
    marginRight: theme.spacing(0.5),
  },

  formControl: {
    minWidth: 120,
    width: "100%",
  },
}));
