

# Sign‑Up Form — Odin Project

A pixel‑perfect, mobile‑friendly sign‑up form that showcases **HTML5 semantic markup, modern CSS, and vanilla JavaScript form validation**.  
Built as part of [The Odin Project](https://www.theodinproject.com/) *Full‑Stack JavaScript* curriculum.

---

## ✨ Highlights

| Area | Topics demonstrated |
| --- | --- |
| **HTML5** | semantic elements, accessible labels, advanced form attributes (`required`, `minlength`, `pattern`, `novalidate`), external submit button via `form` attribute |
| **CSS3** | Flexbox layout, responsive units (`vw`, `vh`), `object-fit`, CSS reset, custom fonts with `@font-face`, hover & active states, **pseudo‑classes** (`:focus`, `:valid`, `:invalid`, `:is`), foundational knowledge of **pseudo‑elements** |
| **JavaScript (ES6)** | Constraint Validation API: `checkValidity()`, `reportValidity()`, `setCustomValidity()`, `ValidityState.tooShort`; real‑time validation on `input` events; regex‑based email validation |
| **Accessibility** | high‑contrast colour palette, meaningful error messages, keyboard‑friendly focus handling |
| **Performance & DX** | zero build‑step deployment, atomic Git commits, descriptive commit messages, fully documented README |

---

## 📚 What I Learned

### 1&nbsp;&nbsp;Constraint Validation API  
Leveraged browser‑native validation while delivering custom messages:

```js
if (!form.checkValidity()) {
  password.reportValidity();
  confirmPassword.reportValidity();
  email.reportValidity();
}
```

* **`setCustomValidity()`** integrates custom rules (password match) with native UI.  
* **`ValidityState.tooShort`** taps into built‑in length checks without extra code.

### 2&nbsp;&nbsp;CSS Pseudo‑Classes & Pseudo‑Elements  
* Real‑time field colouring with `:valid` / `:invalid`.  
* Unified selectors with `:is([type="password"], [type="email"])`.  
* Gained working knowledge of `::before`/`::after` for future decorative needs.

### 3&nbsp;&nbsp;Responsive Flexbox Layout  
Split‑screen hero (`left‑section`, `right‑section`) collapses gracefully on small screens, thanks to:

```css
body {
  display: flex;
  flex-wrap: wrap;
}
```

### 4&nbsp;&nbsp;Branding With Custom Fonts  
Embedded **Norse Bold** logo typeface via `@font-face`, paired with Google Fonts **Oswald** for body copy.

---

## 🚀 Getting Started

```bash
# clone repository
git clone https://github.com/aryanparmar/odin-form.git
cd odin-form

# open in browser
open index.html        # macOS (or simply double‑click the file on any OS)
```

No build tools required — it’s pure HTML/CSS/JS.

---
