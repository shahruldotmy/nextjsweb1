export const metadata = {
  title: "MSPulse Clone",
  description: "Modern dashboard clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
