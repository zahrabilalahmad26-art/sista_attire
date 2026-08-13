import React from "react"
import PageLayout from "../Header/PageLayout.jsx"
import { SKIRT_PRODUCTS } from "./SkirtProducts.js"

const SkirtPage = () => {
  return <PageLayout title="Skirt" products={SKIRT_PRODUCTS} />
}

export default SkirtPage