import type { Metadata } from "next";
import { Abhaya_Libre, Noto_Serif_Sinhala } from "next/font/google";
import "./globals.css";

const abhayaLibre = Abhaya_Libre({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["sinhala", "latin"],
  variable: "--font-abhaya",
  display: "swap",
});

const notoSerifSinhala = Noto_Serif_Sinhala({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["sinhala", "latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "හෙළ කලා අභිමන් | ශ්‍රී ලාංකීය සාම්ප්‍රදායික සංස්කෘතික මහා මංගල්‍යය",
  description: "ශ්‍රී ලාංකීය අනන්‍යතාවය ලොවට විදහා දක්වන, පාරම්පරික නර්තන කලා කුසලතාවයන්ගෙන් සහ මනෝහර බෙර වාදනයන්ගෙන් සුසැදි අති උත්කර්ෂවත් සංස්කෘතික ප්‍රසංගය සඳහා ඔබට කෙරෙන ගෞරවනීය ආරාධනයයි.",
  keywords: ["හෙළ කලා අභිමන්", "සංස්කෘතික ප්‍රසංගය", "උඩරට නර්තනය", "පහතරට නර්තනය", "නෙළුම් පොකුණ", "ශ්‍රී ලංකා සංස්කෘතිය"],
  authors: [{ name: "ශ්‍රී ලංකා ජාතික සංස්කෘතික කලායතනය" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="si"
      className={`${abhayaLibre.variable} ${notoSerifSinhala.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-brown selection:bg-gold/30 selection:text-brown">
        {children}
      </body>
    </html>
  );
}
