import { Grid } from "@material-ui/core";
import React from "react";
import SimpleBackdrop from "../../Backdrop/Backdrop";
import Product from "../Product/Product";

const ProductSimilar = ({ similarProducts }) => {
  return (
    <Grid container direction="row" alignItems="flex-start">
      {similarProducts === undefined ? (
        <SimpleBackdrop />
      ) : (
        similarProducts.map((product, index) => (
          <Grid key={index} item xs={6} sm={4} md={2}>
            <Product product={product} key={product._id} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ProductSimilar;
