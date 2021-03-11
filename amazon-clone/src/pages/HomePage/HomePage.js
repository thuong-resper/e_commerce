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
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Product from "../../components/Products/Product/Product";
import ProductBanner from "../../components/Products/ProductBanner/ProductBanner";
import ProductRoute from "../../components/Products/ProductKind/ProductRoute";
import ProductMan from "../../components/Products/ProductSection/ProductMan/ProductMan";
import SmartWatches from "../../components/Products/ProductSection/SmartWatch/SmartWatches";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import WatchNews from "../../components/WatchNews/WatchNews";
import { listProducts } from "../../store/actions/productActions";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 769, itemsToShow: 4 },
  { width: 960, itemsToShow: 5 },
];

const HomePage = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //select the part of state (products list)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const [value, setValue] = useState(0);
  const [spinner, setSpinner] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // set show skeleton when switching tabs (value change)
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
    return () => {
      return setSpinner(true);
    };
  }, [value]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className={classes.banner}>
      <Carousel pagination={false}>
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
        <ProductBanner />
      </Carousel>

      <ProductRoute />

      {/*top ten*/}

      <div className="headingtop"></div>
      {loading ? (
        <div className={classes.skeleton}>
          <Skeleton animation="pulse" variant="rect" height={300} />
          <Skeleton variant="text" animation="pulse" height={30} width="80%" />
          <Skeleton
            animation="pulse"
            width="60%"
            height={20}
            style={{ marginBottom: 20 }}
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
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Fashion Watches" {...a11yProps(0)} />
              <Tab label="Smart Watches" {...a11yProps(1)} />
              <Tab label="Watch Straps" {...a11yProps(2)} />
            </Tabs>
          </AppBar>

          {spinner ? (
            <div className={classes.skeleton}>
              <Skeleton animation="pulse" variant="rect" height={300} />
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
              <Skeleton
                animation="pulse"
                width="60%"
                height={20}
                style={{ marginBottom: 20 }}
              />
            </div>
          ) : (
            <div>
              <TabPanel value={value} index={0} className="tab-panel">
                <Link to="/fashion-watches" className="seemore">
                  <span>
                    See more <strong> fashion watches</strong>
                  </span>
                </Link>
                <Grid container justify="flex-start" style={{ width: "100%" }}>
                  <Carousel
                    breakPoints={breakPoints}
                    pagination={false}
                    enableSwipe={false}
                  >
                    {products.map((product) => (
                      <Product
                        product={product}
                        key={product._id}
                        loading={loading}
                      />
                    ))}
                  </Carousel>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1} className="tab-panel">
                <Link to="/smart-watches" className={classes.link}>
                  <span className="seemore">
                    See more <strong> smart watches</strong>
                  </span>
                </Link>
                <Grid container justify="flex-start" style={{ width: "100%" }}>
                  <Carousel
                    breakPoints={breakPoints}
                    pagination={false}
                    enableSwipe={false}
                  >
                    {products.map((product) => (
                      <Product
                        product={product}
                        key={product._id}
                        loading={loading}
                      />
                    ))}
                  </Carousel>
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
                  justify="space-between"
                  alignItems="stretch"
                  style={{ width: "100%" }}
                >
                  <Carousel
                    breakPoints={breakPoints}
                    pagination={false}
                    enableSwipe={false}
                  >
                    {products.map((product) => (
                      <Product
                        product={product}
                        key={product._id}
                        loading={loading}
                      />
                    ))}
                  </Carousel>
                </Grid>
              </TabPanel>
            </div>
          )}
        </div>
      )}

      {/*promotion*/}

      <Grid container justify="space-between" spacing={3} className="top-15">
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

      {/* man watch */}

      <Grid container justify="space-between" className="top-15 rp1">
        <Grid item xs className="background-img">
          <Link to="">
            <div className="df df1"></div>
          </Link>
        </Grid>
        <Grid item xs>
          <ProductMan products={products} loading={loading} error={error} />
        </Grid>
      </Grid>
      <Grid container justify="space-between" className="top-15 rp1">
        <Grid item xs className="background-img">
          <Link to="">
            <div className="df df2"></div>
          </Link>
        </Grid>
        <Grid item xs>
          <SmartWatches products={products} loading={loading} error={error} />
        </Grid>
      </Grid>

      {/* smart watch */}

      {/* <Grid container justify="space-between" className="top-15">
        <Grid
          item
          xs
          style={{ width: "239px", marginRight: "10px", maxWidth: "239px" }}
        >
          <Link to="" style={{ width: "100%", height: "auto" }}>
            <div className="background-img df df2"></div>
          </Link>
        </Grid>
        <Grid item xs>
          <SmartWatches products={products} loading={loading} error={error} />
        </Grid>
      </Grid> */}

      {/* watch straps */}

      {/*top ten*/}

      <div
        className="accessories"
        style={{
          backgroundImage:
            "url(https://cdn.tgdd.vn/v2015/Content/event/20-10/title-dayda-min.png)",
          height: "67px",
          lineHeight: "67px",
          position: "relative",
        }}
      >
        <Link
          to="/watch-accessories"
          className={classes.link}
          style={{
            position: "absolute",
            top: "24px",
            right: "0",
            lineHeight: "35px",
            backgroundColor: "#fff",
          }}
        >
          <span className="seemore" style={{ fontSize: "1rem" }}>
            See more <strong> watch accessories</strong>
          </span>
        </Link>
      </div>
      {loading ? (
        <div className={classes.skeleton}>
          <Skeleton animation="pulse" variant="rect" height={300} />
          <Skeleton variant="text" animation="pulse" height={30} width="80%" />
          <Skeleton
            animation="pulse"
            width="60%"
            height={20}
            style={{ marginBottom: 20 }}
          />
        </div>
      ) : error ? (
        <SimpleAlerts severity="error" message={error} />
      ) : (
        <div className="tab">
          {spinner ? (
            <div className={classes.skeleton}>
              <Skeleton animation="pulse" variant="rect" height={300} />
              <Skeleton
                variant="text"
                animation="pulse"
                height={30}
                width="80%"
              />
              <Skeleton
                animation="pulse"
                width="60%"
                height={20}
                style={{ marginBottom: 20 }}
              />
            </div>
          ) : (
            <Grid container justify="flex-start" style={{ width: "100%" }}>
              <Carousel
                breakPoints={breakPoints}
                pagination={false}
                enableSwipe={false}
              >
                {products.map((product) => (
                  <Product
                    product={product}
                    key={product._id}
                    loading={loading}
                  />
                ))}
              </Carousel>
            </Grid>
          )}
        </div>
      )}

      {/* watch news*/}
      <div className="top-15">
        <WatchNews products={products} loading={loading} error={error} />
      </div>
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
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  skeleton: {
    height: "407px",
    marginTop: "20px",
    backgroundColor: "#fff",
  },
}));
