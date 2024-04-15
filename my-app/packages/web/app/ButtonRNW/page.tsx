"use client";
import ButtonRNW from "@shared/ui/components/atoms/ButtonRNW";
import { saludo } from "@shared/utils/helpers";

export default function ButtonRNWPage() {
  return (
    <div>
      <h1>Welcome to Next.js with React Native for Web</h1>
      <ButtonRNW title="Click Me!" onPress={saludo} />
    </div>
  );
}
