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
import { Link } from "react-router-dom";
import Product from "../../Product/Product";
import SimpleAlerts from "../../../UI/Alerts/Alerts";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 600, itemsToShow: 3 },
  { width: 769, itemsToShow: 4 },
  { width: 960, itemsToShow: 5 },
];

const ProductMan = (props) => {
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
    <div>
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

export default ProductMan;

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
