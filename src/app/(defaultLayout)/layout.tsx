import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default async function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen scroll-smooth bg-white">
      <section className="relative max-w-[800px] mx-auto px-2 lg:px-4 pb-4">
        <Navbar />
        {children}
        <Footer />
      </section>
    </main>
  );
}
