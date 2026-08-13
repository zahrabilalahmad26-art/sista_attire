import React from "react"
import PageLayout from "../Header/PageLayout.jsx"
import { SHALWARKAMEEZ_PRODUCTS } from "./ShalwarKameezProducts.js"

const ShalwarKameezPage = () => {
  return <PageLayout title="Shalwar & Kameez" products={SHALWARKAMEEZ_PRODUCTS} />
}

export default ShalwarKameezPage