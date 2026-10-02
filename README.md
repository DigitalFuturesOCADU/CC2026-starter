# CC2026 Starter

A clean starting point for a phone sketch in Creation & Computation 2026. Write it in
VSCodium, sync it with GitHub Desktop, and publish it with GitHub Pages so every phone can
open it from one address.

- `index.html` loads p5.js 2.x, p5.sound and p5-phone, then your code. You rarely change it.
- `sketch.js` is your sketch. It starts with the pattern every phone sketch uses: lock the
  gestures, ask for the sensors on a tap, read nothing until the flag says yes.
- `.vscode/extensions.json` asks VSCodium to install Live Server.
- `package.json` and `scripts/phone.mjs` are the phone command, `npm run phone`. Leave them as
  they are.
- `.nojekyll` tells GitHub Pages to publish the files exactly as they are.

The full steps are on Canvas: **Setting Up Your Tools**, then **Git, GitHub and Pages**.

## Use it

1. Click **Use this template**, then **Create a new repository**. Keep it **Public**.
2. In the new repository: **Settings › Pages**. Source: **Deploy from a branch**. Branch:
   **main**, folder **/ (root)**. Click **Save**. GitHub never copies this setting from a
   template, so every new copy needs it once.
3. In GitHub Desktop: **File › Clone Repository**, pick the new repository, and keep it in
   `Documents/GitHub`.
4. In GitHub Desktop: **Repository › Open in VSCodium** (set VSCodium as the editor under
   **Settings › Integrations** the first time).
5. In VSCodium, open `index.html` and click **Go Live** to see it on your laptop.
6. Change `sketch.js`. In GitHub Desktop, write a summary, click **Commit to main**, then
   **Push origin**.
7. About a minute later, open `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/` on your
   phone. On a laptop, that page shows a QR code for it.

## See it on your phone without pushing

`npm run phone` opens a temporary HTTPS address for this folder and prints a QR code. Tilt,
shake, sound and the flashlight work on the phone, and every save shows up when you reload.
It is for quick tests. For your group and the play test, use the Pages address.

It needs two installs, once. There is nothing to install with npm.

- **Node.js**, the LTS version from [nodejs.org](https://nodejs.org/).
- **cloudflared**. Mac: `brew install cloudflared`. Windows:
  `winget install --id Cloudflare.cloudflared`.

Then, each time:

1. In VSCodium, open a terminal (**Terminal › New Terminal**) and run `npm run phone`. If
   Live Server is running (**Go Live**, port 5500), it uses that. If not, it starts its own
   preview server for this folder.
2. Scan the QR code. Save a change, then reload on the phone. Press `Ctrl+C` to stop. The
   address changes next time.

Anyone with the address can open it while it runs.

## Working as a group

- One person makes the repository from the template, then adds the others under
  **Settings › Collaborators**. Everyone clones it with GitHub Desktop.
- Each person writes their functions in their own file (for example `ana.js`) and adds a
  `<script>` line for it in `index.html`, before `sketch.js`. Two people rarely change the
  same lines, so conflicts stay rare.
- **Fetch origin** and **Pull** before you start. Commit small. Push often.
- Put `// written by: name` above every function. The brief asks for it.

## If the address shows a 404

Pages is not on yet, or the first publish is still running. Check step 2, then open the
**Actions** tab and wait for the green tick.
