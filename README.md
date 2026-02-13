# Paper Tear

An interactive paper-tearing experience inspired by real notebook strips.

Live app (after GitHub Pages is enabled):  
`https://anushriyab.github.io/Paper-tear/`

## What It Does

- Simulates tearing strips across layered notebook sheets
- Progressive peel interaction with tear threshold behavior
- Detach/hold/release strip motion with falling piece effect
- Cardboard completion state when all sheets are fully torn
- Archive wall that stores completed/previous notebooks
- Warm autumn-inspired visual palette

## Controls

- Drag down on a strip to tear
- `TEAR ALL` for quick testing
- `다시 놓기 [reset]` to archive current notebook and start a new one

## Run Locally

This is a static app (no build step required).

### Option 1: Python

```bash
python3 -m http.server 8765
```

Then open:

`http://localhost:8765/index.html`

### Option 2: VS Code / Cursor Live Server

Open `index.html` with a local server extension and run.

## Project Structure

```text
.
├── index.html
└── src
    ├── tearProfiles.js
    └── TearNotebookAdvanced.jsx
```

- `index.html`: main app (UI, interactions, audio, transitions)
- `src/tearProfiles.js`: tear profile presets and defaults
- `src/TearNotebookAdvanced.jsx`: JSX scaffold for future modular refactor

## Deploy with GitHub Pages

1. Go to repo settings for `AnushriyaB/Paper-tear`
2. Open **Pages**
3. Under **Build and deployment**
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
4. Save and wait a few minutes

Site URL:

`https://anushriyab.github.io/Paper-tear/`

## Notes

- Audio uses the Web Audio API and starts on interaction.
- Best experience is desktop/laptop with mouse or trackpad.
