import type { ReactNode } from "react";
import { ViewTransition } from "react";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import Intro from "@/components/Intro";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

type PageShellProps = {
  children: ReactNode;
  intro?: boolean;
};

export default function PageShell({ children, intro = false }: PageShellProps) {
  return (
    <>
      {intro && <Intro />}
      <ScrollProgress />
      <SmoothScroll />
      <Header />
      <ViewTransition enter="page-in" exit="page-out" update="none">
        <main>{children}</main>
        <Footer />
      </ViewTransition>
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
