export const metadata = {
  title: 'Hi - Autonomous Agent',
  description: 'Built and deployed autonomously',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
