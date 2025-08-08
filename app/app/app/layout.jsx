export const metadata = { title: "Dubai & Abu Dhabi Family Planner" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{margin: 0, background: "#fafafa", color: "#111"}}>
        {children}
      </body>
    </html>
  );
}
