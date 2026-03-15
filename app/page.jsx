import StylesHero from "./components/Hero";
import Sale from "./components/Sale";
import Preview from "./components/Preview";
import ReviewsSection from "./components/ReviewsSection";

export const metadata = {
  title: "Home | White Rabbit Co.",
  description: "Welcome to White Rabbit Co. - gothic and alternative dark fashion for those who refuse to blend in.",
};

export default function Home() {
 return (
    <>
    <StylesHero/>
    <Preview/>
    <Sale/>
    <ReviewsSection />
 
    </>);
}
