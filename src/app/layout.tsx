import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { FloatingActions } from "@/components/FloatingActions";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jevol.com.ua"),
  title: "JEVOL — обладнання для техогляду в Україні",
  description:
    "Офіційний представник JEVOL в Україні: гальмівні стенди, газоаналізатори, димоміри, реглоскопи для техогляду СТО.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={`${manrope.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
