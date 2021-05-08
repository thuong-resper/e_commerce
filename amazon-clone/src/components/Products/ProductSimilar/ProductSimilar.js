import { Grid } from "@material-ui/core";
import React from "react";
import SimpleAlerts from "../../UI/Alerts/Alerts";
import Circular from "../../UI/Circular/Circular";
import Product from "../Product/Product";

const ProductSimilar = ({ similarProducts, loading, error }) => {
  return (
    <>
      {loading ? (
        <Circular />
      ) : error ? (
        <SimpleAlerts severity="error" message={error} />
      ) : (
        <Grid container direction="row" alignItems="flex-start">
          {similarProducts.map((product, index) => (
            <Grid key={index} item xs={6} sm={4} md={2}>
              <Product product={product} key={product._id} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ProductSimilar;
