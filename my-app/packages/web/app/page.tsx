"use client";
import { routes } from "@shared/utils/routes";
import Navigate from "@shared/utils/routes/navigate";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Navigate to={routes.form.web} />
    </div>
  );
}
