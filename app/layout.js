import "./globals.css";
import MainHeader from "../components/main-header/main-header";

export const metadata = {
  title: "BIJAY SHRESTHA",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/images/burger.jpg" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
