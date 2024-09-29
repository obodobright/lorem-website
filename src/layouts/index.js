import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const LandingLayouts = ({ children }) => {
  return (
    <section>
      <Header />
      <main role="main" className="w-full">
        {children}
      </main>
      {<Footer />}
    </section>
  );
};
