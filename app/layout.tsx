import "./globals.css";

export const metadata = {
  title: "NEXUS - Modern Infrastructure Framework",
  description: "Deploy instantly, scale infinitely, and monitor everything in real-time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#030712] text-slate-200 antialiased selection:bg-indigo-500/30">
        {children}
      </body>
    </html>
  );
}
