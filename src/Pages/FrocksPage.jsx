
import React from "react"
import PageLayout from "../Header/PageLayout.jsx"
import { FROCKS_PRODUCTS } from "./FrocksProducts.js"

const FrocksPage = () => {
  return <PageLayout title="Frocks" products={FROCKS_PRODUCTS} />
}

export default FrocksPage