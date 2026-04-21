import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logo-red.webp";

const FacebookIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);
const InstagramIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427C2.013 14.784 2 14.43 2 12s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.47 2.525c.636-.247 1.363-.416 2.427-.465C8.92 2.013 9.27 2 12.315 2zm0 1.623c-2.403 0-2.741.009-3.693.053-1.034.046-1.58.199-2.072.388a3.273 3.273 0 00-1.18 1.18 3.273 3.273 0 00-.388 2.072c-.046 1.034-.053 1.58-.053 3.693s.007 2.659.053 3.693c.046 1.034.199 1.58.388 2.072a3.273 3.273 0 001.18 1.18 3.273 3.273 0 002.072.388c1.034.046 1.58.053 3.693.053s2.659-.007 3.693-.053c1.034-.046 1.58-.199 2.072-.388a3.273 3.273 0 001.18-1.18 3.273 3.273 0 00.388-2.072c.046-1.034.053-1.58.053-3.693s-.007-2.659-.053-3.693c-.046-1.034-.199-1.58-.388-2.072a3.273 3.273 0 00-1.18-1.18 3.273 3.273 0 00-2.072-.388c-1.034-.046-1.58-.053-3.693-.053zM12 9.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm0-1.623a3.873 3.873 0 110 7.746 3.873 3.873 0 010-7.746zM20.25 7.5a.938.938 0 11-1.875 0 .938.938 0 011.875 0z"
      clipRule="evenodd"
    />
  </svg>
);
const XIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
  </svg>
);

const SocialIconLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-accent transition-colors"
  >
    {children}
  </a>
);
const FooterLink = ({ to, children }) => (
  <li className="text-sm">
    <Link to={to} className="text-gray-600 hover:text-accent transition-colors">
      {children}
    </Link>
  </li>
);

function Footer() {
  return (
    <footer className="bg-primary mx-auto pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-3">
            <Link to="/" className="inline-block mb-4">
              <img src={logoImage} alt="exaque profile" className="h-8 w-auto" />
            </Link>

            <div className="mb-4">
              <p className="font-semibold text-gray-800 text-sm">Alamat:</p>
              <p className="text-gray-600 text-sm">Bintaro Business Centre</p>
              <p className="text-gray-600 text-sm">
                Jl. RC Veteran No.1i, Bintaro Pesanggrahan
              </p>
              <p className="text-gray-600 text-sm">
                Jakarta Selatan, Indonesia 12330
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-gray-800 text-sm">Kontak:</p>
              {/* <a className="text-gray-600 text-sm hover:text-accent block">
                +6285775558787
              </a> */}
              <a
                href="mailto:info@exaque.com"
                className="text-gray-600 text-sm hover:text-accent block"
              >
                info@exaque.com
              </a>
            </div>

            {/* <div className="flex space-x-3">
              <SocialIconLink href="#">
                <FacebookIcon />
              </SocialIconLink>
              <SocialIconLink href="#">
                <InstagramIcon />
              </SocialIconLink>
              <SocialIconLink href="#">
                <XIcon />
              </SocialIconLink>
              <SocialIconLink href="#">
                <LinkedInIcon />
              </SocialIconLink>
              <SocialIconLink href="#">
                <YouTubeIcon />
              </SocialIconLink>
            </div> */}
          </div>

          {/* Menu */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-gray-800 mb-4">Menu</h4>
            <ul className="space-y-2">
              <FooterLink to="/">Halaman Utama</FooterLink>
              <FooterLink to="/qmatic-orchestra">Produk</FooterLink>
              <FooterLink to="/solusi">Solusi</FooterLink>
              <FooterLink to="/integrasi">Integrasi</FooterLink>
              {/* <FooterLink to="/kisah-pelanggan">Kisah Pelanggan</FooterLink> */}
            </ul>
          </div>

          {/* Informasi */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-gray-800 mb-4">Informasi</h4>
            <ul className="space-y-2">
              <FooterLink to="/tentang-exaque">Tentang Exaque</FooterLink>
              {/* <FooterLink to="/blog">Blog</FooterLink> */}
              <FooterLink to="/faq">FAQ</FooterLink>
            </ul>
          </div>

          {/* <div className="md:col-span-3 flex flex-col items-start md:items-end">
            <h4 className="font-semibold text-gray-800 mb-4">Tindakan Cepat</h4>
            <div className="flex gap-3">
              <Link
                to="/demo"
                className="px-5 py-2 text-sm bg-gray-100 text-gray-800 font-semibold rounded-full hover:bg-gray-200 transition-colors"
              >
                Permintaan Demo
              </Link>
              <Link
                to="/konsultasi"
                className="px-5 py-2 text-sm bg-accent text-white font-semibold rounded-full hover:bg-red-700 transition-colors"
              >
                Konsultasi
              </Link>
            </div>
          </div> */}
        </div>

        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} PT Exaque Mandiri Makmur.</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;