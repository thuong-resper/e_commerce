import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import "./styles.css";

const Product = (props) => {
  const { product, loading } = props;
  const classes = useStyles();

  return (
    <Grid item className="product-item">
      {loading ? (
        <div>
          <Skeleton animation="pulse" variant="rect" height={200} />
          <Skeleton variant="text" animation="pulse" height={30} />
          <Skeleton
            animation="pulse"
            width="80%"
            height={20}
            style={{ marginBottom: 6 }}
          />
        </div>
      ) : (
        <li className="one-item">
          <div className="item">
            <Link to={`/product/${product._id}`} className="item-link">
              <div className="height-label"></div>
              <img
                data-original="https://cdn.tgdd.vn/Products/Images/7264/200840/citizen-an3610-55l-xanh-400x400.jpg"
                className="item-img"
                alt={product.name}
                // src={product.image}
                src="https://cdn.tgdd.vn/Products/Images/7264/218120/mvw-mp005-01-nam-1-400x400.jpg"
              />
              <h3 className="item-name">{product.name}</h3>
              <div className="pros">
                <span className="dotted lower">30 mm</span>
              </div>
              <div className="price">
                <strong>{product.price}₫</strong>
                <span>{product.priceCompare}₫</span>
                <i>
                  {(
                    -(
                      (product.priceCompare - product.price) /
                      product.priceCompare
                    ) * 100
                  ).toFixed() + "%"}
                </i>
              </div>
            </Link>
          </div>
        </li>
      )}
    </Grid>
  );
};

export default Product;
