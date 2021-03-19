import { Button, Grid, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../../components/Cart/CartList";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { addToCart } from "../../store/actions/cartActions";
import { useStyles } from "./styles";
import styles from "./styles.module.css";

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  const { address, city, country, province } = shippingAddress;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  const classes = useStyles();

  return (
    <div>
      {cartItems.length === 0 ? (
        <Grid container justify="space-between" alignItems="flex-start">
          <SimpleAlerts
            severity="info"
            message="There are no items in this cart"
            title="Info"
            to="/"
            titleLink="CONTINUE SHOPPING"
          />
        </Grid>
      ) : (
        <div>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={8}>
              {cartItems.map((item, index) => (
                <CartList item={item} key={item.product} />
              ))}
            </Grid>
            {/*order detail*/}
            <Grid item xs={12} md={4}>
              <div className={styles.wrapper_cart_page}>
                <Typography className={classes.locationLabel} gutterBottom>
                  Location
                </Typography>
                <div className={classes.location}>
                  <RoomOutlinedIcon className={classes.locationIcon} />
                  <Typography variant="body2">
                    {address}, {province}, {city}, {country}
                  </Typography>
                </div>
                <div className={classes.summary_section}>
                  <div className={classes.summary_section_heading}>
                    Order Summary
                  </div>
                  <div className={classes.summary_section_content}>
                    <div className={classes.checkout_summary}>
                      <div className={classes.checkout_rows}>
                        <div className={classes.checkout_row}>
                          <div className={classes.checkout_summary_label}>
                            Subtotal (
                            {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                            items)
                          </div>
                          <div className={classes.checkout_summary_value}>
                            $
                            {cartItems
                              .reduce(
                                (acc, item) => acc + item.qty * item.price,
                                0
                              )
                              .toFixed(2)}
                          </div>
                        </div>
                        <div className={classes.checkout_row}>
                          <div className={classes.checkout_summary_label}>
                            Shipping Fee
                          </div>
                          <div className={classes.checkout_summary_value}>
                            $
                            {cartItems
                              .reduce(
                                (acc, item) => acc + item.qty * item.price,
                                0
                              )
                              .toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={classes.voucher_input}>
                      <div className={classes.voucher_input_inner}>
                        <div className={classes.voucher_input_col_9}>
                          <TextField
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            className={classes.voucher_input_type}
                          />
                        </div>
                        <div className={classes.voucher_input_col_3}>
                          <Button
                            variant="contained"
                            color="primary"
                            className={classes.voucher_input_button}
                          >
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classes.checkout_order_total}>
                    <div className={classes.checkout_order_row}>
                      <div className={classes.checkout_order_total_title}>
                        Total
                      </div>
                      <div className={classes.checkout_order_total_fee}>
                        $
                        {cartItems
                          .reduce((acc, item) => acc + item.qty * item.price, 0)
                          .toFixed(2)}
                        <small className={classes.checkout_order_total_fee_tip}>
                          VAT included, where applicable
                        </small>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.confirm_cart_button}
                    disabled={cartItems.length === 0}
                    onClick={checkoutHandler}
                  >
                    CONFIRM CART
                  </Button>
                </div>
              </div>{" "}
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default CartPage;
