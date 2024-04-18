"use client";
import React from "react";

import Form from "@shared/ui/components/molecules/Form";
import Link from "next/link";
import { routes } from "@shared/utils/routes";

const HomePage: React.FC = () => (
  <>
    <h1 className=" mb-5 w-">Form Page</h1>

    <Form />

    <Link className=" mt-5" href={routes.home.web}>
      <button>ir a home</button>
    </Link>
  </>
);

export default HomePage;
