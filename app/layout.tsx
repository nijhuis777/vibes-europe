// Root layout is minimal — the [lang] layout handles HTML, fonts, and chrome.
// This exists only to satisfy Next.js requirement for a root layout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
