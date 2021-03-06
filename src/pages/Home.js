import React from "react";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import FeaturedProducts from "../components/Products/FeaturedProducts";
import Products from "./Products";
export default function Home() {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          our products
        </Link>
      </Hero>
      <FeaturedProducts/>
    </>
  )
}
