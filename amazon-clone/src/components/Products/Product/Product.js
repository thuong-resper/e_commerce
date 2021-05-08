import { Box, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { formatS } from "../../../shared/formatCurrency";
import ProductRating from "../../Rating/Rating";
import SkeletonProduct from "./Skeleton/SkeletonProduct";
import "./styles.css";

const Product = (props) => {
  const { product, loading } = props;

  //format price to display
  Number.prototype.format = formatS;
  const price = product.price.format(0, 3, ".", ",");
  const priceCompare = product.priceCompare.format(0, 3, ".", ",");

  return (
    <Grid item className="product-item">
      {loading ? (
        <SkeletonProduct />
      ) : (
        <li className="one-item">
          <div className="item">
            <Link to={`/product/${product._id}`} className="item-link">
              <div className="height-label"></div>
              <img
                data-original="https://cdn.tgdd.vn/Products/Images/7264/200840/citizen-an3610-55l-xanh-400x400.jpg"
                className="item-img"
                alt={product.name}
                src={product.image}
              />
              <h3 className="item-name">{product.name}</h3>
              <div className="pros">
                <span className="dotted lower">30 mm</span>
              </div>
              <div className="price">
                <strong>{price}₫</strong>
                <span>{priceCompare}₫</span>
                <i>
                  {(
                    -(
                      (product.priceCompare - product.price) /
                      product.priceCompare
                    ) * 100
                  ).toFixed() + "%"}
                </i>
              </div>
              <Box m="5px 10px 0">
                <ProductRating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </Box>
            </Link>
          </div>
        </li>
      )}
    </Grid>
  );
};

export default Product;
