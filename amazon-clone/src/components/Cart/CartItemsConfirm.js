import { Button, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import RemoveIcon from "@material-ui/icons/Remove";
import clsx from "clsx";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addToCart, removeFromCart } from "../../store/actions/cartActions";
import AlertDialogSlide from "../UI/Modal/CustomModal";
import { useStyles } from "./styles";
import styles from "./styles.module.css";

const CartItemsConfirm = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { item } = props;

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
    history.push("/cart");
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        marginTop: "1rem",
        alignItems: "center",
        borderRadius: "4px",
      }}
    >
      <div className={styles.contentItem}>
        <Grid item xs={2} className={styles.Img}>
          <Link to={`/product/${item.product}`}>
            <img alt="d" className={classes.media} src={item.image} />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            <Link to={`/product/${item.product}`}>{item.name}</Link>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <div className={classes.price}>
            <Typography variant="h6" color="secondary">
              <abbr
                style={{
                  textDecoration: "underline dotted",
                }}
              >
                USD
              </abbr>
              {item.price}
            </Typography>
            <Typography variant="body2">
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    verticalAlign: "middle",
                    fontSize: "12px",
                    textDecoration: "line-through",
                    margin: "5px 0",
                    color: "var(--defaultTextColor)",
                  }}
                >
                  {item.priceCompare} USD
                </span>
                <i>
                  {(
                    -((item.priceCompare - item.price) / item.priceCompare) *
                    100
                  ).toFixed() + "%"}
                </i>
              </span>
            </Typography>
            <div className={classes.iconButton}>
              <AlertDialogSlide
                title="Info"
                iconAnchor={<DeleteOutlineIcon />}
                component={
                  <Typography>
                    Are you sure want to delete {item.name}
                  </Typography>
                }
                confirmButton={
                  <div>
                    <Button
                      color="primary"
                      onClick={() => handleDelete(item.product)}
                    >
                      Agree
                    </Button>
                  </div>
                }
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <Typography
            component="h6"
            variant="subtitle1"
            style={{ marginLeft: "3px" }}
          >
            Qty: <strong>{item.qty}</strong>
          </Typography>
        </Grid>
      </div>
    </div>
  );
};

export default CartItemsConfirm;
