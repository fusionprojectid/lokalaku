# LokaLaku Trip Website

Where Every Journey Finds Its Soul

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Flokalaku.vercel.app&up_message=online&down_message=offline&label=lokalaku.vercel.app)](https://lokalaku.vercel.app/)

LokaLaku Trip is a static travel website for curated private tours and open trips across Indonesia. It highlights routes such as Bali, Bromo, Ijen, Dieng, Yogyakarta, Malang, Baluran, and Banyuwangi, with direct WhatsApp booking and a contact form.

Live site: [https://lokalaku.vercel.app/](https://lokalaku.vercel.app/)

## Features

- Responsive landing page with fixed navigation.
- English and Indonesian language switcher, with English as the default.
- Separate USD and Rupiah package prices per language.
- Tour package cards with modal detail popups and image slideshows.
- Auto-running team carousel.
- Trust/value strip and full footer with newsletter, contact, social links, and legal links.
- Legal/help pages:
  - `privacy-policy.html`
  - `terms-conditions.html`
  - `booking-help.html`
- Formspree contact and newsletter forms.
- WhatsApp booking links.
- YouTube destination video embed.
- Local Font Awesome assets with CDN support on legal pages.
- SEO and Open Graph metadata on the homepage.

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | HTML5, CSS3, JavaScript |
| Layout | Bootstrap 3 |
| Interaction | jQuery, Owl Carousel, Vegas.js, WOW.js |
| Icons | Font Awesome 6, inline SVG trust icons |
| Forms | Formspree |
| Hosting | Vercel |

## Project Structure

```text
.
|-- css/
|-- fonts/
|-- images/
|-- js/
|-- sprites-full/
|-- svgs/
|-- svgs-full/
|-- webfonts/
|-- index.html
|-- privacy-policy.html
|-- terms-conditions.html
|-- booking-help.html
|-- thank-you.html
|-- ads.txt
|-- favicon.webp
|-- apple-touch-icon.webp
|-- google6171d874c4417456.html
|-- README.md
`-- SECURITY.md
```

## Local Preview

Because this is a static website, you can open `index.html` directly in a browser. For a closer local preview, serve the folder with any static server.

Example with Node.js:

```bash
npx serve .
```

Or use the Live Server extension in Visual Studio Code.

## Important Files

- `index.html`: main homepage, package cards, modals, contact form, trust strip, footer.
- `css/style.css`: main custom styling and responsive rules.
- `js/custom.js`: language switcher, smooth scrolling, hero slideshow, team carousel, back-to-top behavior.
- `privacy-policy.html`, `terms-conditions.html`, `booking-help.html`: footer legal/help pages using the same header, footer, and translation logic as the homepage.

## Language System

The website defaults to English. The `EN / ID` switcher updates navigation, homepage content, package labels, prices, modal content, footer content, and the legal/help pages.

Package prices are stored in HTML as `data-price-en` and `data-price-id`, then rendered by `js/custom.js`.

## Contact

- Instagram: [@lokalaku_trip](https://www.instagram.com/lokalaku_trip/)
- WhatsApp: [+62 813-3142-1031](https://wa.me/6281331421031)
- Website contact form: [https://lokalaku.vercel.app/#contact](https://lokalaku.vercel.app/#contact)

## Maintenance Notes

- Keep local asset paths relative unless the asset must be external.
- When adding a new text section, also add its English and Indonesian text in `js/custom.js`.
- When adding a new package price, provide both `data-price-en` and `data-price-id`.
- Test the homepage and the three footer pages after changing shared header/footer code.
