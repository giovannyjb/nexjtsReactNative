"use client";
import { routes } from "@shared/utils/routes";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={routes.form.web}>
        <button>ir a form</button>
      </Link>
    </div>
  );
}
