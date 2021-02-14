import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import { Skeleton } from "@material-ui/lab";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../../components/Products/Product/Product";
import ProductBanner from "../../components/Products/ProductBanner/ProductBanner";
import ProductRoute from "../../components/Products/ProductKind/ProductRoute";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { listProducts } from "../../store/actions/productActions";
import "./styles.css";

const HomePage = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  // It will be executed before rendering

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  const dispatch = useDispatch();
  //select the part of state (products list)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const [spinner, setSpinner] = useState(loading);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <Carousel
        autoPlay={false}
        animation="fade"
        navButtonsAlwaysVisible={true}
        navButtonsAlwaysInvisible={false}
      >
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
      </Carousel>
      <ProductRoute />
      <div className="headingtop"></div>
      {loading ? (
        <div className={classes.skeleton}>
          <Skeleton animation="pulse" variant="rect" height={200} />
          <Skeleton variant="text" animation="pulse" height={30} />
          <Skeleton
            animation="pulse"
            width="80%"
            height={20}
            style={{ marginBottom: 6 }}
          />
        </div>
      ) : error ? (
        <SimpleAlerts severity="error" message={error} />
      ) : (
        <div className="tab">
          <AppBar position="static" className="app-bar">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
            >
              <Tab label="Fashion Watches" {...a11yProps(0)} />
              <Tab label="Smart Watches" {...a11yProps(1)} />
              <Tab label="Watch Straps" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className="tab-panel">
            <Link to="/fashion-watches" className={classes.link}>
              <span className="seemore">
                See more <strong> fashion watches</strong>
              </span>
            </Link>
            <Grid
              container
              direction="row"
              justify="flex-start"
              style={{ width: "100%" }}
            >
              {products.map((product) => (
                <Product
                  product={product}
                  key={product._id}
                  loading={loading}
                />
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} className="tab-panel">
            <Link to="/smart-watches" className={classes.link}>
              <span className="seemore">
                See more <strong> smart watches</strong>
              </span>
            </Link>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="stretch"
              style={{ width: "100%" }}
            >
              {products.map((product) => (
                <Product
                  product={product}
                  key={product._id}
                  loading={loading}
                />
              ))}
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={2} className="tab-panel">
            <Link to="/watch-straps" className={classes.link}>
              <span className="seemore">
                See more <strong> watch straps</strong>
              </span>
            </Link>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="stretch"
              style={{ width: "100%" }}
            >
              {products.map((product) => (
                <Product
                  product={product}
                  key={product._id}
                  loading={loading}
                />
              ))}
            </Grid>
          </TabPanel>
        </div>
      )}
      <Grid container justify="space-between" spacing={3} className="top-10">
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/fashion-watches">
            <img
              alt="fashion-watch"
              src="https://cdn.tgdd.vn/2021/02/banner/tet380x215-380x165.jpg"
              className={classes.img}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/fashion-watches">
            <img
              alt="smart-watch"
              src="https://cdn.tgdd.vn/2021/02/banner/380x165-380x165.jpg"
              className={classes.img}
            />
          </Link>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/watch-strap">
            <img
              alt="fashion-watch"
              src="https://cdn.tgdd.vn/2021/01/banner/s6demdesk-380x165.png"
              className={classes.img}
            />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  link: {
    textDecoration: "none",
    color: "var(--primary)",
    position: "absolute",
    top: "15px",
    right: "3px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
}));
