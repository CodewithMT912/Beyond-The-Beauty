"use client";

import { useState } from "react";
import type { Product } from "@/data/homepage";
import { Icon } from "@/components/icons";

export function ProductCard({
  product,
  isNew = false,
}: {
  product: Product;
  isNew?: boolean;
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [added, setAdded] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  return (
    <article className="product-card">
      <div className="product-photo">
        <div
          className="product-image"
          role="img"
          aria-label={product.imageAlt}
          style={{ backgroundImage: `url("${product.image}")` }}
        />
        {(isNew ? product.badge : product.discount) && (
          <span className="product-badge">
            {isNew ? product.badge : `-${product.discount}`}
          </span>
        )}
        <button
          aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
          className={`icon-button product-heart${isSaved ? " is-saved" : ""}`}
          onClick={() => setIsSaved(!isSaved)}
          type="button"
        >
          <Icon name="heart" />
        </button>
        <button
          aria-label={`Quick view ${product.name}`}
          className="icon-button quick-view"
          onClick={() => setQuickViewOpen(true)}
          type="button"
        >
          <Icon name="eye" />
        </button>
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p className="product-brand">{product.brand}</p>
        <div className="price-line">
          <strong>Rs. {product.price.toLocaleString("en-PK")}</strong>
          {product.oldPrice && (
            <del>Rs. {product.oldPrice.toLocaleString("en-PK")}</del>
          )}
        </div>
        <p className="rating">
          <span aria-label={`${product.rating} out of 5 stars`}>★★★★★</span>
          <small>({product.rating})</small>
        </p>
        <button
          className={`button button-gold add-button${added ? " added" : ""}`}
          onClick={() => setAdded(!added)}
          type="button"
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
      {quickViewOpen && (
        <div
          className="quick-modal-backdrop"
          onClick={() => setQuickViewOpen(false)}
          role="presentation"
        >
          <section
            aria-label={`Quick view: ${product.name}`}
            aria-modal="true"
            className="quick-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Close quick view"
              className="icon-button quick-modal-close"
              onClick={() => setQuickViewOpen(false)}
              type="button"
            >
              <Icon name="close" />
            </button>
            <div
              className="quick-modal-image"
              role="img"
              aria-label={product.imageAlt}
              style={{ backgroundImage: `url("${product.image}")` }}
            />
            <div className="quick-modal-details">
              <p className="eyebrow">{product.brand}</p>
              <h2>{product.name}</h2>
              <p className="rating">
                <span aria-label={`${product.rating} out of 5 stars`}>★★★★★</span>
                <small>({product.rating})</small>
              </p>
              <div className="price-line">
                <strong>Rs. {product.price.toLocaleString("en-PK")}</strong>
                {product.oldPrice && (
                  <del>Rs. {product.oldPrice.toLocaleString("en-PK")}</del>
                )}
              </div>
              <button
                className="button button-gold quick-modal-add"
                onClick={() => {
                  setAdded(true);
                  setQuickViewOpen(false);
                }}
                type="button"
              >
                Add to Cart
              </button>
            </div>
          </section>
        </div>
      )}
    </article>
  );
}
