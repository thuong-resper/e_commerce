import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  background: { backgroundColor: "#fff", borderRadius: 4 },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    width: "100%", // 16:9
    height: "100%", // 16:9
    maxHeight: "20rem",
  },
  rating: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productBrand: {
    display: "flex",
    alignItems: "center",
  },
  brandLink: {
    margin: "0 5px",
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
  priceDetail: {
    padding: "20px 0",
    margin: "13px 0",
    borderTop: "1px solid #9e9e9e14",
  },
  button: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
  },
  orderButton: {
    minWidth: "10rem",
    margin: theme.spacing(2),
  },
  table: {
    display: "flex",
    alignItems: "center",
    borderTop: "1px solid #9e9e9e14",
    padding: "1.5rem 0",
  },
  input: {
    webkitAppearance: "none",
  },
}));
