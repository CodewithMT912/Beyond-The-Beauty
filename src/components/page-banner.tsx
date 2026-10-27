import Image from "next/image";
import Link from "next/link";

export type PageBannerBreadcrumb = {
  label: string;
  href?: string;
};

export function PageBanner({
  title,
  subtitle,
  breadcrumbs,
  eyebrow,
  description,
  className = "",
  action,
}: {
  title: string;
  subtitle: string;
  breadcrumbs: readonly PageBannerBreadcrumb[];
  eyebrow?: string;
  description?: string;
  className?: string;
  action?: { label: string; href: string };
}) {
  return (
    <header className={`page-banner ${className}`}>
      <Image
        alt=""
        className="page-banner-image"
        fill
        priority
        sizes="100vw"
        src="/hero-banner.png"
      />
      <div aria-hidden="true" className="page-banner-overlay" />
      <div className="page-width page-banner-content">
        {eyebrow && <p className="eyebrow page-banner-eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p className="page-banner-subtitle">{subtitle}</p>
        {description && <p className="page-banner-description">{description}</p>}
        {action && <Link className="button button-gold page-banner-action" href={action.href}>{action.label}</Link>}
        <nav aria-label="Breadcrumb" className="page-banner-breadcrumb">
          {breadcrumbs.map((item, index) => (
            <span className="page-banner-crumb" key={`${item.label}-${index}`}>
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}
