import React from "react";
import ShopHeader from "../components/shop/ShopHeader";
import ShopCategories from "../components/shop/ShopCategories";
import ShopToolBar from "../components/shop/ShopToolBar";
import ShopProducts from "../components/shop/ShopProducts";

export default function ShopPage() {
  return (
    <>
      <ShopHeader />
      <ShopCategories />
      <ShopToolBar />
      <ShopProducts />
    </>
  );
}
