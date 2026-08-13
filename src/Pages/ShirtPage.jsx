import React from "react"
import PageLayout from "../Header/PageLayout.jsx"
import { SHIRT_PRODUCTS } from "./ShirtProducts.js"

const ShirtPage = () => {
  return <PageLayout title="Shirt" products={SHIRT_PRODUCTS} />
}

export default ShirtPage