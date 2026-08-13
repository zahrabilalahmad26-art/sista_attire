import React from "react"
import PageLayout from "../Header/PageLayout.jsx"
import { CASUAL_PRODUCTS } from "./CasualProducts.js"

const CasualPage = () => {
  return <PageLayout title="Casual" products={CASUAL_PRODUCTS} />
}

export default CasualPage