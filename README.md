# Canvas-Quickswitch

Canvas Quickswitch is a small userscript that adds a button to all Canvas assignment submission pages.  
Clicking the button takes you directly to the assignment's main page (the non-submission view) for that same assignment.

I go through the gradebook to view my assignments quite a lot, and it's always annoyed me that clicking the assignment oesnn't bring you to its actual page. This fixes that, or at least, makes the route more direct.

---

## How it works

Once installed in your browser (via the Violentmonkey extension), the script automatically runs on Canvas submission URLs that match:

- `https://*.instructure.com/courses/*/assignments/*/submissions/*`

On those pages, Canvas Quickswitch:

1. Insertsn button near the top-right of the page (labelled `To Assignment ->`).
2. When clicked, it removes the `/submissions/...` portion from the URL (which will bring you to the page you want).

No data is sent anywhere; it's all ran locally in your browser.

---

## Requirements

To use Canvas-Quickswitch, you need:

1. **A Chromium-based browser**
2. **Violentmonkey** – a userscript manager extension (see below for link)
3. Access to a **Canvas** site. (Duh)

---

## Violentmonkey Installation

1. Open the Violentmonkey extension page in the Chrome Web Store:  
   https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag

2. Click **Add to <your browser>** and confirm the installation.

3. After installation, you should see the Violentmonkey icon in your browser’s extensions area (usually in the top-right corner).

### 2. Install the Canvas Quickswitch userscript

You can install the script directly from this repository.

1. Go to the **raw** script URL in your browser:

   - https://raw.githubusercontent.com/Kingofhollows099/Canvas-Quickswitch/main/script.user.js  
     (You can also reach this by opening `script.user.js` in the repo and clicking the “Raw” button.)

2. When the page loads, Violentmonkey should automatically detect the userscript and open an **“Install userscript”** dialog.

<img width="1367" height="298" alt="image" src="https://github.com/user-attachments/assets/e4de0561-9934-4c42-8c44-3934a68ecf22" />


3. Review the script details and click **Install**.

4. Open the Violentmonkey dashboard (by clicking the extension icon → “Dashboard”) to check that **Canvas Quickswitch** is listed and enabled.

<img width="426" height="180" alt="{88D92121-9A80-4DE9-9224-308E01DB404B}" src="https://github.com/user-attachments/assets/9018b0bc-cccc-44ad-acd3-6cee378ac479" />

<img width="993" height="243" alt="{076EC06E-6A29-47DB-B4A9-0CB5C3ED480C}" src="https://github.com/user-attachments/assets/aa945742-4895-4d6d-b602-f19ae45db367" />

### 3. Verify it on Canvas

1. Log into Canvas
2. Navigate to a course, then go to an assignment submission page (Go to grades, then click any assignment).  
   - The URL should look like:  
     `https://your-school.instructure.com/courses/12345/assignments/67890/submissions/1234567`

3. If you see a "To Assignment ->" button in the top-right, you’re all set.

---

## Troubleshooting

**The button does not appear on submission pages**

- Make sure you are on a URL that matches the pattern:  
  `https://*.instructure.com/courses/*/assignments/*/submissions/*`
- Open the Violentmonkey dashboard and confirm:
  - The **Canvas Quickswitch** script is installed.
  - The script is **enabled**.

**The button appears, but nothing happens when I click it**

- Check that the URL in the address bar actually contains `/submissions/…`.  
  The script works by removing this segment from the URL; if it is missing or the structure is very different, the redirect may not work as expected.
- Try another assignment submission page to confirm whether it is a one-off Canvas customization issue.

---

## Limitations

- Script is currently written for Canvas instances on `*.instructure.com`.  
  If your Canvas is hosted at a different domain, you may need to adjust the `@match` pattern in `script.user.js`.
- Tested with Vivaldi. Other browsers will probably work as long as they're Chromium-based, but I can't guarentee.

---

## Contributing

If you have suggestions, bug reports, or feature ideas:

- Please feel free to open an issue or pull request on the GitHub repository:  
  https://github.com/Kingofhollows099/Canvas-Quickswitch
