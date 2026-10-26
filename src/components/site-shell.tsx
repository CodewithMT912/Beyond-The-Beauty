"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { brandLogo, categories, navigation } from "@/data/homepage";
import { Icon } from "@/components/icons";

export function AnnouncementBar() {
  return (
    <div className="announcement">
      <p>Free Shipping on Orders Above 550 <span>✦</span> Discover Our New Collection</p>
    </div>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
    setOpenDropdown(null);
  }

  return (
    <>
      <header className="navbar">
        <div className="nav-inner page-width">
          <Link className="wordmark" href="/" aria-label="Beyond the Beauty home">
            <Image alt="Beyond the Beauty logo" className="brand-logo-image" height={40} src={brandLogo} width={40} />
            <span className="wordmark-copy">
              <span>Beyond the Beauty</span>
              <small>BEAUTY, THOUGHTFULLY CHOSEN</small>
            </span>
          </Link>
          <nav aria-label="Main navigation" className={`nav-links${menuOpen ? " nav-open" : ""}`}>
            {navigation.map((item) => {
              const hasDropdown = item === "Brands" || item === "Categories";
              return (
                <div className="nav-item" key={item}>
                  {hasDropdown ? (
                    <button
                      aria-expanded={openDropdown === item}
                      className="nav-link nav-dropdown-button"
                      onClick={() => setOpenDropdown(openDropdown === item ? null : item)}
                      type="button"
                    >
                      {item}<Icon name="chevron" />
                    </button>
                  ) : (
                    <a
                      className="nav-link"
                      href={item === "Home"
                        ? "/"
                        : item === "Policies & FAQs"
                          ? "/policies-faqs"
                          : `/${item.toLowerCase().replaceAll(" ", "-")}`}
                      onClick={closeMenu}
                    >
                      {item}
                    </a>
                  )}
                  {hasDropdown && openDropdown === item && (
                    <div className="nav-dropdown">
                      {(item === "Categories" ? categories.map(({ name }) => name) : [
                        "L'Oréal Paris", "Maybelline", "CeraVe", "The Ordinary", "MAC",
                      ]).map((entry) => (
                        <a href={item === "Categories" ? "/categories" : "/brands"} key={entry} onClick={closeMenu}>
                          {entry}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="nav-actions">
            <button
              aria-label="Search"
              className="icon-button"
              onClick={() => setSearchOpen(true)}
              type="button"
            ><Icon name="search" /></button>
            <a aria-label="My account" className="icon-button desktop-action" href="/account"><Icon name="user" /></a>
            <a aria-label="Wishlist" className="icon-button desktop-action" href="/wishlist"><Icon name="heart" /></a>
            <a aria-label="Shopping cart" className="icon-button cart-link" href="/cart"><Icon name="bag" /><span>0</span></a>
            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="icon-button menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
            ><Icon name={menuOpen ? "close" : "menu"} /></button>
          </div>
        </div>
      </header>
      {searchOpen && (
        <div className="search-overlay" onClick={() => setSearchOpen(false)} role="presentation">
          <section
            aria-labelledby="search-title"
            aria-modal="true"
            className="search-dialog"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Close search"
              className="icon-button search-close"
              onClick={() => setSearchOpen(false)}
              type="button"
            ><Icon name="close" /></button>
            <p className="eyebrow">Find your next favorite</p>
            <h2 id="search-title">What are you looking for?</h2>
            <form action="/search" className="search-form">
              <Icon name="search" />
              <input autoFocus name="q" placeholder="Search products, brands..." />
              <button className="button button-gold" type="submit">Search</button>
            </form>
          </section>
        </div>
      )}
    </>
  );
}

const footerColumns = [
  { title: "Shop", links: ["Skincare", "Makeup", "Hair Care", "Fragrances", "New Arrivals"] },
  { title: "Customer Care", links: ["Contact Us", "Shipping Policy", "Returns & Exchanges", "FAQs"] },
  { title: "My Account", links: ["Login / Register", "Order History", "Wishlist", "Track My Order"] },
];

function footerHref(label: string) {
  if (label === "Contact Us") return "/contact";
  if (label === "FAQs") return "/policies-faqs#faqs";
  if (label === "Shipping Policy") return "/policies-faqs#shipping";
  if (label === "Returns & Exchanges") return "/policies-faqs#returns";
  return `/${label.toLowerCase().replaceAll(" ", "-")}`;
}

export function Footer() {
  return (
    <footer className="footer">
      <div aria-hidden="true" className="footer-watermark">Beyond the Beauty</div>
      <div className="page-width footer-main">
        <div className="footer-brand">
          <Link className="footer-wordmark" href="/">
            <span className="footer-logo-badge">
              <Image alt="Beyond the Beauty logo" className="footer-logo-image" height={48} src={brandLogo} width={48} />
            </span>
            <span>Beyond the Beauty</span>
          </Link>
          <p>More than beauty. A little more you.</p>
          <div className="social-links" aria-label="Social media">
            {(["instagram", "facebook", "pinterest", "tiktok"] as const).map((icon) => (
              <a aria-label={icon} href="#" key={icon}><Icon name={icon} /></a>
            ))}
          </div>
        </div>
        {footerColumns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h2>{column.title}</h2>
            {column.links.map((link) => <a href={footerHref(link)} key={link}>{link}</a>)}
          </div>
        ))}
        <div className="footer-column footer-contact">
          <h2>Get in Touch</h2>
          <a href="tel:+920000000000">+92 000 0000000</a>
          <a href="mailto:support@example.com">support@example.com</a>
          <p>We&apos;re here to help you feel beautiful.</p>
        </div>
      </div>
      <div className="footer-bottom page-width">
        <p>© 2026 Beyond the Beauty. All rights reserved.</p>
        <div><a href="/policies-faqs#privacy">Privacy Policy</a><a href="/policies-faqs#terms">Terms &amp; Conditions</a></div>
      </div>
    </footer>
  );
}
