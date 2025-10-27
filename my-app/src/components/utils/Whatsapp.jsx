import React from 'react';

// WhatsAppButton.jsx
// Tailwind-based, production-ready React component.
// Props:
//  - phone: string (required) e.g. "+919876543210" or "919876543210"
//  - message: string (optional) default: "Hello"
//  - size: "sm" | "md" | "lg" (optional)
//  - variant: "solid" | "outline" (optional)
//  - className: string (optional) extra Tailwind classes
//  - newTab: boolean (optional) open in new tab (default: true)
// Usage:
//  import WhatsAppButton from './WhatsAppButton';
//  <WhatsAppButton phone="+919876543210" message="Hi there!" />

export default function WhatsAppButton({
  phone="8433298342",
  message = 'Hello!',
  size = 'md',
  variant = 'solid',
  className = '',
  newTab = true,
  ariaLabel,
}) {
  if (!phone) {
    console.warn('WhatsAppButton: `phone` prop is required (e.g. +919876543210)');
  }

  // Normalize phone: remove +, spaces, dashes, parentheses
  const normalizedPhone = phone ? phone.replace(/[^0-9]/g, '') : '';

  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const variants = {
    solid: 'bg-green-600 hover:bg-green-700 text-white',
    outline: 'border border-green-600 hover:bg-green-50 text-green-700',
  };

  const btnClasses = [
    'inline-flex items-center gap-3 font-medium rounded-2xl shadow-sm',
    sizes[size] ?? sizes.md,
    variants[variant] ?? variants.solid,
    className,
  ].join(' ');

  const encodedMessage = encodeURIComponent(message);

  // wa.me link (recommended) — works on mobile and web
  const href = normalizedPhone
    ? `https://wa.me/${normalizedPhone}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;

  const handleClick = (e) => {
    // allow default anchor behavior for ctrl/cmd clicks
    // but for SPA apps you may want to prevent default and call window.open
    if (!newTab) return;
    e.preventDefault();
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      aria-label={ariaLabel ?? `Chat on WhatsApp${phone ? ` with ${phone}` : ''}`}
      rel="noopener noreferrer"
      className={btnClasses}
      role="button"
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 flex-shrink-0"
        aria-hidden="true"
      >
        <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.373 0 .02 5.6.02 12.5c0 2.2.58 4.24 1.59 6.02L0 24l5.7-1.48A12.24 12.24 0 0012 25c6.627 0 11.98-5.6 11.98-12.5 0-3.34-1.29-6.48-3.46-8.02zM12 22.3c-1.6 0-3.16-.42-4.53-1.21l-.32-.19-3.38.88.9-3.28-.21-.34A9.69 9.69 0 012.3 12.5C2.3 7 6.52 3 12 3c2.93 0 5.56 1.2 7.46 3.3A10.3 10.3 0 0122.3 12.5C22.3 17.96 18.08 22.3 12 22.3z" />
        <path d="M17.1 14.14c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15s-.77.97-.95 1.17c-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.5-.9-.79-1.5-1.77-1.68-2.07-.18-.3-.02-.46.13-.61.13-.12.3-.33.45-.5.15-.17.2-.3.3-.5.1-.2 0-.38-.02-.53-.02-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.38-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.2 3.05.15.2 2.07 3.35 5.02 4.7 2.95 1.35 2.95.9 3.48.84.53-.06 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.2-.57-.35z" />
      </svg>

      <span>WhatsApp</span>
    </a>
  );
}
