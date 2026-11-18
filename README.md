# Clinic website demo

A single static site that renders a personalised website demo for each clinic or hospital,
with its own colour theme, copy and WhatsApp appointment booking.

## Links

Each clinic has its own URL:

| Clinic | URL |
|---|---|
| Care Medical Clinic | `/?clinic=care-medical` |
| Jeevan Health Care | `/?clinic=jeevan` |
| Orthostar Hospital | `/?clinic=orthostar` |
| Sunder Lal Hospital | `/?clinic=sunder-lal` |

- `/` with no parameter shows a neutral "Private demo" page.
- `/?all=1` lists every demo.

## Add or edit a clinic

Everything lives in `config.js`. A clinic entry only needs what differs from `CLINIC_DEFAULTS`:
name, phone (`91` + 10 digits), area, theme colours, images, and any copy or services to override.

## Run locally

Open `index.html?clinic=care-medical` in a browser (internet needed for fonts, styles and maps).

## Deploy

Static files only, no build step:

```bash
npx vercel --prod
```

## Notes

- Pages are `noindex` and carry a "demo, not the official website" banner.
- Photos are free stock photos from [Pexels](https://www.pexels.com/license/). Doctor photos are
  labelled "Sample photo"; real doctor names and photos go in only with the clinic's permission.
