# Cloudflare Pages Configuration

## Build Settings
- **Framework preset**: Vite
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty)

## Environment Variables
- `NODE_ENV`: `production`

## Custom Headers (Optional)
You can add these in Cloudflare Pages dashboard under Settings > Functions:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
```
