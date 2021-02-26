import { Button, Chip, Grid, makeStyles, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PaymentIcon from "@material-ui/icons/Payment";
import PhoneIcon from "@material-ui/icons/Phone";
import ReceiptIcon from "@material-ui/icons/Receipt";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItemsConfirm from "../../components/Cart/CartItemsConfirm";
import CheckoutSteps from "../../components/Checkout/CheckoutSteps";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { createOrder } from "../../store/actions/orderActions";

const PlaceOrderPage = ({ history }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, shippingAddress } = cart;
  const { address, city, country, phone, province } = shippingAddress;

  console.log(cart);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const { name, email } = userInfo;

  if (!cart.shippingAddress.address) {
    history.push("/shipping");
  } else if (!cart.paymentMethod) {
    history.push("/payment");
  }

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
  }, [history, success, order]);

  return (
    <React.Fragment>
      <Grid container direction="row" className={classes.layout}>
        <div className={classes.paper}>
          <CheckoutSteps step1 step2 step3 step4 />
        </div>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={8}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            className={classes.title}
          >
            <Grid item xs={8}>
              <Typography variant="body2" style={{ marginLeft: "19px" }}>
                {cartItems.reduce((acc, item) => acc + item.qty, 0)} ITEMS
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2" style={{ marginLeft: "-3px" }}>
                PRICE
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant="body2">QUANTITY</Typography>
            </Grid>
          </Grid>
          {cartItems.length === 0 ? (
            <div style={{ marginTop: "16px" }}>
              <SimpleAlerts
                severity="info"
                message="There are no items in this cart"
                title="Info"
                to="/"
                titleLink="CONTINUE SHOPPING"
              />
            </div>
          ) : (
            <div>
              {cartItems.map((item, index) => (
                <CartItemsConfirm item={item} key={item.product} />
              ))}
            </div>
          )}
        </Grid>

        {/*order detail*/}
        <Grid item xs={4} className={classes.orderDetail}>
          <div className={classes.summary_section}>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "500" }}
            >
              Shipping & Billing
            </Typography>
            <div className={classes.summary_section_content}>
              <div className={classes.checkout_summary}>
                <div className={classes.checkout_rows}>
                  <div className={classes.checkout_row}>
                    <div className={classes.checkout_summary_label}>
                      <LocationOnIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography
                        variant="body2"
                        style={{ fontWeight: "bold" }}
                      >
                        {name}
                      </Typography>
                    </div>
                    <div className={classes.checkout_summary_value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div className={classes.checkout_summary_label}>
                      <Chip
                        label="HOME"
                        size="small"
                        color="secondary"
                        style={{
                          fontWeight: "bold",
                          padding: "0 5px",
                          marginRight: "10px",
                        }}
                      />
                      <Typography variant="body2">
                        {address}, {province}, {city}, {country}
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div className={classes.checkout_summary_label}>
                      <ReceiptIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">
                        Bill to the same address
                      </Typography>
                    </div>
                    <div className={classes.checkout_summary_value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div className={classes.checkout_summary_label}>
                      <PhoneIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">{phone}</Typography>
                    </div>
                    <div className={classes.checkout_summary_value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div className={classes.checkout_summary_label}>
                      <EmailIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">{email}</Typography>
                    </div>
                    <div className={classes.checkout_summary_value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div className={classes.checkout_summary_label}>
                      <MonetizationOnIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">Tax Code</Typography>
                    </div>
                    <div className={classes.checkout_summary_value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div className={classes.checkout_summary_label}>
                      <PaymentIcon
                        color="primary"
                        style={{ fontSize: "1rem", marginRight: "5px" }}
                      />
                      <Typography variant="body2">
                        <strong>
                          Payment Method:{" "}
                          {cart.paymentMethod
                            ? cart.paymentMethod.paymentMethod
                            : null}
                        </strong>
                      </Typography>
                    </div>
                    <div className={classes.checkout_summary_value}>
                      <Typography variant="body2" color="primary">
                        Edit
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ fontWeight: "500" }}
            >
              Order Summary
            </Typography>
            <div className={classes.summary_section_content}>
              <div className={classes.checkout_summary}>
                <div className={classes.checkout_rows}>
                  <div className={classes.checkout_row}>
                    <div
                      className={classes.checkout_summary_label}
                      style={{ color: "var(--whiteThin)" }}
                    >
                      Subtotal (
                      {cartItems.reduce((acc, item) => acc + item.qty, 0)}{" "}
                      items)
                    </div>
                    <div className={classes.checkout_summary_value}>
                      $ {cart.itemsPrice}
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div
                      className={classes.checkout_summary_label}
                      style={{ color: "var(--whiteThin)" }}
                    >
                      Shipping Fee
                    </div>
                    <div className={classes.checkout_summary_value}>
                      $ {cart.shippingPrice}
                    </div>
                  </div>
                  <div className={classes.checkout_row}>
                    <div
                      className={classes.checkout_summary_label}
                      style={{ color: "var(--whiteThin)" }}
                    >
                      Tax
                    </div>
                    <div className={classes.checkout_summary_value}>
                      $ {cart.taxPrice}
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
                <div className={classes.checkout_order_total_title}>Total</div>
                <div className={classes.checkout_order_total_fee}>
                  $ {cart.totalPrice}
                  <small className={classes.checkout_order_total_fee_tip}>
                    VAT included, where applicable
                  </small>
                </div>
              </div>
            </div>
            {error && (
              <SimpleAlerts
                title="Error"
                severity="danger"
                message={error}
              ></SimpleAlerts>
            )}
            <Button
              variant="contained"
              color="secondary"
              className={classes.confirm_cart_button}
              disabled={cartItems.length === 0}
              onClick={placeOrderHandler}
            >
              Place Order
            </Button>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  layout: {
    width: "100%",
    display: "flex",
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  paper: {
    margin: "auto",
    width: "100%",
    maxWidth: "600px",
  },
  base: { padding: "0 8px" },
  root: {
    width: "100%",
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  orderDetail: {
    marginTop: theme.spacing(2),
  },
  location: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #eff0f5",
  },
  locationIcon: { color: "var(--whiteThin)" },
  summary_section: {
    borderRadius: 4,
    marginLeft: "16px",
    padding: "16px",
    backgroundColor: "#fff !important",
  },
  title: {
    backgroundColor: "#fff",
    padding: "0.5rem 0",
    marginTop: "1rem",
    borderRadius: 4,
  },
  summary_section_content: {
    paddingBottom: 16,
  },
  checkout_row: {
    display: "flex",
    marginBottom: 16,
    justifyContent: "space-between",
  },
  checkout_summary_label: {
    alignItems: "center",
    display: "flex",
  },
  checkout_summary_value: {
    fontSize: 16,
    textAlign: "right",
    color: "#202020",
    letterSpacing: "-.44px",
    verticalAlign: "middle",
  },
  voucher_input: {
    marginBottom: 8,
    width: "100%",
  },

  voucher_input_inner: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "4px",
    width: "100%",
  },
  voucher_input_col_9: {
    width: "73%",
  },
  voucher_input_type: { width: "100%" },
  voucher_input_button: {
    height: "100%",
    margin: 0,
    width: "100%",
  },
  confirm_cart_button: {
    height: "2.5rem",
    margin: 0,
    width: "100%",
    textTransform: "none",
  },
  voucher_input_col_3: {
    width: "25%",
  },
  checkout_order_row: {
    display: "table",
    width: "100%",
    marginBottom: "16px",
  },
  checkout_order_total_title: {
    display: "table-cell",
    fontSize: "14px",
    color: "#202020",
    lineHeight: "16px",
  },
  checkout_order_total_fee: {
    display: "table-cell",
    fontSize: "18px",
    color: "var(--secondary)",
    textAlign: "right",
  },
  checkout_order_total_fee_tip: {
    fontSize: "12px",
    color: "#424242",
    letterSpacing: "0",
    lineHeight: "16px",
    display: "block",
    textAlign: "right",
    marginTop: "5px",
  },
}));

export default PlaceOrderPage;
