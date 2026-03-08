import './globals.css';
import Footer from '../app/components/Footer';
import NavBar from '../app/components/NavBar';

export const metadata = {
  title: "White Rabbit Co. — Gothic Clothing & Dark Fashion",
  description:
    "White Rabbit Co. is a gothic clothing brand offering dark, alternative fashion. Explore apparel inspired by occult aesthetics, romantic goth, and modern underground style.",
  keywords: [
    "gothic clothing",
    "dark fashion",
    "alternative apparel",
    "occult style",
    "goth streetwear",
    "romantic goth",
    "alt fashion brand",
    "White Rabbit Co",
  ],
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>      
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}``