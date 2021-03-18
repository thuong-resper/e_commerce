import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Skeleton } from "@material-ui/lab";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import { AntTab, AntTabs } from "../../../Tab/Tab";
import SimpleAlerts from "../../../UI/Alerts/Alerts";
import Product from "../../Product/Product";
import SkeletonProduct from "../../Product/Skeleton/SkeletonProduct";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  demo2: {
    backgroundColor: "#2e1534",
  },
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
  skeleton: {
    height: "407px",
    marginTop: "20px",
    backgroundColor: "#fff",
  },
}));

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 769, itemsToShow: 4 },
  { width: 960, itemsToShow: 4 },
];

const SmartWatches = (props) => {
  const classes = useStyles();

  const { loading, error, products } = props;

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

  return (
    <div className="skeleton-p">
      {!loading ? (
        <Grid container spacing={1} direction="row">
          <div style={{ width: "100%", margin: "10px 0 10px 4px" }}>
            <Grid container direction="row" wrap="nowrap">
              {[...Array(3)].map((item, index) => (
                <Grid item key={index}>
                  <Box mr={1}>
                    <Skeleton
                      animation="pulse"
                      variant="rect"
                      height={40}
                      width={170}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </div>

          {[...Array(4)].map((item, index) => (
            <Grid item key={index} className="item-skeleton item-skeleton-4">
              <SkeletonProduct />
            </Grid>
          ))}
        </Grid>
      ) : error ? (
        <SimpleAlerts severity="error" message={error} />
      ) : (
        <div className="tab smart-section">
          <AppBar position="static" className="app-bar">
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="ant example"
            >
              <AntTab label="Apple" {...a11yProps(0)} />
              <AntTab label="Samsung" {...a11yProps(1)} />
              <AntTab label="Xiaomi" {...a11yProps(2)} />
              <AntTab label="Huawei" {...a11yProps(3)} />
              <AntTab label="Oppo" {...a11yProps(4)} />
            </AntTabs>
          </AppBar>
          {spinner ? (
            <Grid container spacing={1} direction="row">
              {[...Array(4)].map((item, index) => (
                <Grid
                  item
                  key={index}
                  className="item-skeleton item-skeleton-4"
                >
                  <Box mt={3}>
                    <SkeletonProduct />
                  </Box>
                </Grid>
              ))}
            </Grid>
          ) : (
            <div>
              <TabPanel value={value} index={0} className="tab-panel">
                <Link to="/man-watches" className="seemore seemore-dnone">
                  <span>
                    See more <strong> men's fashion watches</strong>
                  </span>
                </Link>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
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
              <TabPanel value={value} index={1} className="tab-panel">
                <Link to="/woman-watches" className={classes.link}>
                  <span className="seemore">
                    See more <strong> women's fashion watches</strong>
                  </span>
                </Link>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
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
              <TabPanel value={value} index={2} className="tab-panel">
                <Link to="/couple-watches" className={classes.link}>
                  <span className="seemore">
                    See more <strong> couple watches</strong>
                  </span>
                </Link>
                <Grid
                  container
                  direction="row"
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
    </div>
  );
};

export default SmartWatches;

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
