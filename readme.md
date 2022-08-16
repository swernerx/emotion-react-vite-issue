# Showcases an issue with Emotion / MUI vs. Vite in a Mono-Repo

When running in dev-mode it renders the following warning to the browser console:

```
emotion-react.browser.esm.js:398 You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.
```

It seems that both:

1. `emotion-react.cjs.dev.js`
2. `emotion-react.browser.esm.js`

are included into the browser bundles.

While 1. is bundled with the dependencies, 2. is loaded by the actual application as an ESM module.
