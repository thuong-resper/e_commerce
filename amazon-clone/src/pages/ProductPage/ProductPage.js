import {
  Avatar,
  Box,


  Grid,
  InputLabel,

  NativeSelect,
  Paper,

  TextField
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RemoveIcon from "@material-ui/icons/Remove";
import ShareIcon from "@material-ui/icons/Share";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import CustomizedBreadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Product from "../../components/Products/Product/Product";
import ProductColor from "../../components/Products/ProductColor/ProductColor";
import ProductPromotion from "../../components/Products/ProductPromotions/ProductPromotion";
import ProductRating from "../../components/Rating/Rating";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";
import {
  createProductReview,
  listProductDetails
} from "../../store/actions/productActions";
import { useStyles } from "./styles";
import styles from "./styles.module.css";

const ProductPage = ({ history, match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  console.log(product);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    success: successProductReview,
    loading: loadingProductReview,
    error: errorProductReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
    }
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
  }, [dispatch, match, successProductReview, product._id]);

  const max = product.countInStock;
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    const base = Math.abs(e.target.value);

    if (base >= max) {
      setQty(qty - qty + parseInt(max));
    } else {
      setQty(qty - qty + parseInt(base));
    }
  };
  const increment = () => {
    if (qty < max) {
      setQty(qty + 1);
    }
  };
  const decrement = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(match.params.id, {
        rating,
        comment,
      })
    );
  };

  const propImageZoom = {
    width: 400,
    height: 250,
    zoomWidth: 500,
  };

  return (
    <div>
      {loading ? (
        <SimpleBackdrop click={true} />
      ) : error ? (
        <SimpleAlerts severity="error" message={error} />
      ) : (
        <div>
          {/* Product section */}
          <Grid
            container
            spacing={3}
            direction="row"
            className={classes.background}
          >
            <Grid item xs={12}>
              <CustomizedBreadcrumbs />
            </Grid>
            <Grid item xs={12} sm={6}>
              <img alt="d" className={classes.media} src={product.image} />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
              >
                <Grid item xs={12} style={{ margin: "0 0.5rem" }}>
                  <Typography variant="h5" gutterBottom>
                    {product.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.rating}>
                  <ProductRating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                  <div>
                    <IconButton aria-label="share" color="primary">
                      <ShareIcon />
                    </IconButton>
                    <IconButton aria-label="favorite" color="primary">
                      <FavoriteBorderIcon />
                    </IconButton>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={classes.productBrand}
                  style={{ margin: "0 0.5rem" }}
                >
                  <span>Brand:</span>
                  <Link
                    to={`/collections/vendors?q=${product.brand}`}
                    className={classes.brandLink}
                  >
                    No brand
                  </Link>
                  <div className={classes.brandDivider}></div>
                  <Link
                    to={`/collections/vendors?q=${product.brand}`}
                    className={classes.brandLink}
                  >
                    <div style={{ width: 200, whiteSpace: "nowrap" }}>
                      <Box
                        component="div"
                        my={2}
                        textOverflow="ellipsis"
                        overflow="hidden"
                        bgcolor="background.paper"
                      >
                        More options {product.brand}
                      </Box>
                    </div>
                  </Link>
                </Grid>
                <Grid
                  item
                  xs={12}
                  className={classes.priceDetail}
                  style={{ margin: "0 0.5rem" }}
                >
                  <Typography variant="h4" color="secondary">
                    {product.price}
                    <abbr
                      style={{ textDecoration: "underline", margin: "0 5px" }}
                    >
                      đ
                    </abbr>
                  </Typography>
                  <Typography variant="body2">
                    <span>
                      <span className={classes.priceCompare}>
                        ${product.priceCompare}
                      </span>
                      <span>
                        {(
                          -(
                            (product.priceCompare - product.price) /
                            product.price
                          ) * 100
                        ).toFixed() + "%"}
                      </span>
                    </span>
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ paddingLeft: "0.5rem" }}>
                  {/*promotions */}
                  {product.promotions ? (
                    <ProductPromotion product={product} />
                  ) : null}

                  {/*select quantity */}
                  {
                    <Grid item xs={12} className={classes.table}>
                      <Grid item xs={3}>
                        Quantity
                      </Grid>
                      <Grid item xs={9} className={classes.root}>
                        <IconButton
                          onClick={decrement}
                          disabled={qty === 1 || qty === 0}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <TextField
                          type="number"
                          value={qty}
                          className={styles.inputField}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <IconButton onClick={increment} disabled={qty === max}>
                          <AddIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  }

                  {/*product color*/}
                  {product.colors ? <ProductColor product={product} /> : null}

                  {/*product size*/}

                  {/*product quantity*/}

                  {/*product add to cart*/}
                  <Grid item xs={12} className={classes.button}>
                    <Button
                      variant="contained"
                      className={classes.orderButton}
                      disabled={product.countInStock === 0}
                    >
                      Buy Now
                    </Button>
                    <Button
                      onClick={addToCartHandler}
                      variant="contained"
                      color="primary"
                      className={classes.orderButton}
                      disabled={product.countInStock === 0 || qty === 0}
                    >
                      Add To Card
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            {/* delivery */}
            {/* <Grid item xs={4}>
              delivery
            </Grid> */}
          </Grid>

          {/* reviews section */}

          {/* related products */}

          <Grid
            container
            spacing={3}
            direction="row"
            className={classes.background}
          >
            <Grid item xs={12} style={{ margin: "0 0.5rem" }}>
              <Typography variant="h5">
                Compare with similar products
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ margin: "0 0.5rem" }}>
              <Grid
                container
                direction="row"
                spacing={3}
                justify="space-between"
              >
                {[...Array(6)].map((item, index) => (
                  <Grid item key={index} md={2} sx={6} sm={4}>
                    <Box mr={1}>
                      <Product
                        product={product}
                        key={product._id}
                        loading={loading}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            direction="row"
            className={classes.background}
          >
            <Grid item xs={12} sm={12} md={9} style={{ margin: "0.5rem" }}>
              <Box>
                <Typography variant="h5">Reviews</Typography>
              </Box>
              {product.reviews
                ? product.reviews.length === 0 && (
                    <Box mt={1}>
                      <SimpleAlerts title="Message" message="No Reviews" />
                    </Box>
                  )
                : null}
              {product.reviews
                ? product.reviews.map((review) => (
                    <Box m="0.5rem 0" key={review._id}>
                      <Paper
                        style={{ padding: "10px 20px" }}
                        variant="outlined"
                      >
                        <Grid container wrap="nowrap" spacing={2}>
                          <Grid item>
                            <Avatar alt="Remy Sharp" src="" />
                          </Grid>
                          <Grid item xs>
                            <Typography variant="subtitle2">
                              {review.name}
                            </Typography>
                            <ProductRating value={review.rating} />
                            <Box mt="0.5rem" mb="0.5rem">
                              <p>{review.comment}</p>
                            </Box>
                            <p style={{ textAlign: "left", color: "gray" }}>
                              {review.createdAt.substring(0, 10)}
                            </p>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Box>
                  ))
                : null}
              <Box mt={2}>
                <Typography variant="subtitle1">
                  Write a Customer Review
                </Typography>
              </Box>
              {successProductReview && (
                <Box mt={2}>
                  <SimpleAlerts
                    message="Review submitted successfully"
                    title="Message"
                  />
                </Box>
              )}
              {/* skeleton */}
              {/* {loadingProductReview && <SimpleBackdrop />} */}
              {errorProductReview && (
                <Box mt={2}>
                  <SimpleAlerts
                    severity="error"
                    message={errorProductReview}
                    title="Error"
                  />
                </Box>
              )}
              {userInfo ? (
                <Box mt={1}>
                  <form
                    onSubmit={submitHandler}
                    className={classes.formControl}
                  >
                    <InputLabel shrink htmlFor="age-native-label-placeholder">
                      Rating
                    </InputLabel>
                    <NativeSelect
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      inputProps={{
                        name: "age",
                        id: "age-native-label-placeholder",
                      }}
                      style={{ width: "100%", marginBottom: "1rem" }}
                    >
                      <option value={0}>Select...</option>
                      <option value={1}>1 - Poor</option>
                      <option value={2}>2 - Fair</option>
                      <option value={3}>3 - Good</option>
                      <option value={4}>4 - Very Good</option>
                      <option value={5}>5 - Excellent</option>
                    </NativeSelect>
                    <Box mt={1}>
                      <TextField
                        id="outlined-full-width"
                        label="Comment"
                        placeholder="Write your comment..."
                        fullWidth
                        rows={4}
                        multiline
                        margin="normal"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      />
                    </Box>
                    <Box mt={1} mb={2}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={loadingProductReview}
                      >
                        SUMMIT
                      </Button>
                    </Box>
                  </form>
                </Box>
              ) : (
                <SimpleAlerts
                  title="Message"
                  message="Please sign in to write a review"
                  titleLink="Login"
                  to="/login"
                />
              )}
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default ProductPage;

// show promotion
