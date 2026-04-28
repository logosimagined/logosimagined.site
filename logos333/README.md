# Logos Imagined Website

Simple multi-page static site for deployment on GitHub Pages with the custom domain `logosimagined.com`.

## Pages

- `index.html`
- `services.html`
- `about.html`
- `contact.html`
- `404.html`

## Local preview

Open `index.html` in a browser, or use any small static server.

## Deploy to GitHub Pages

1. Create a new GitHub repository named `website`.
2. Upload these files to the repository root.
3. In GitHub, open `Settings` -> `Pages`.
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Under `Custom domain`, enter `logosimagined.com`.
6. Ensure `Enforce HTTPS` is enabled after the certificate is issued.

## Cloudflare DNS

Set these DNS records in Cloudflare:

- Type: `A` | Name: `@` | Content: `185.199.108.153` | Proxy status: `DNS only`
- Type: `A` | Name: `@` | Content: `185.199.109.153` | Proxy status: `DNS only`
- Type: `A` | Name: `@` | Content: `185.199.110.153` | Proxy status: `DNS only`
- Type: `A` | Name: `@` | Content: `185.199.111.153` | Proxy status: `DNS only`
- Type: `CNAME` | Name: `www` | Content: `<your-github-username>.github.io` | Proxy status: `DNS only`

After GitHub Pages SSL finishes provisioning, you can switch the `www` CNAME and the apex records to proxied if you want Cloudflare in front.
