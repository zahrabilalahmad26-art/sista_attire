import React from "react"
import PageLayout from "../Header/PageLayout.jsx"
import { SKIRTSHIRT_PRODUCTS } from "./SkirtShirtProducts.js"

const SkirtShirtPage = () => {
  return <PageLayout title="Skirt & Shirt" products={SKIRTSHIRT_PRODUCTS} />
}

export default SkirtShirtPage