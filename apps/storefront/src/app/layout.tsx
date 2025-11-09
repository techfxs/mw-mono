import "./global.css";
import { Header } from "@mw-mono/header";
import { Footer } from "@mw-mono/footer";

export const metadata = {
  title: "Storefront - MW Store",
  description: "Your premier online shopping destination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex flex-col min-h-screen'>
        <Header title='Storefront' />
        <main className='flex-grow'>{children}</main>
        <Footer companyName='MW Store' />
      </body>
    </html>
  );
}
