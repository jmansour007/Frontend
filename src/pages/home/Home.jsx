"use client"

import React, { memo } from "react"
import HomePage from "../landing/HomePage"

// Home page is identical to landing page as requested
const Home = memo(() => {
  return <HomePage />;
});

Home.displayName = 'Home';

export default Home;
