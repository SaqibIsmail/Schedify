# Phase 0 — Frontend Mental Model (Notes)

These notes capture **everything we discussed in Phase 0**, including the points that caused confusion.
They are meant to be **short, simple, and intuitive**.

---

## 1. What the browser actually understands

The browser only understands **three things**:

* **HTML** → structure (what exists)
* **CSS** → appearance & layout (how it looks)
* **JavaScript (JS)** → behavior (what happens)

Everything else (React, TypeScript, JSX) is **converted into these three**.

---

## 2. HTML (Structure)

HTML answers one question:

> **“What is this thing?”**

Examples:

* This is a header
* This is navigation
* This is a button
* This is content

HTML forms a **tree structure** (parent → children).

HTML does **not**:

* control colors
* control spacing
* control behavior

---

## 3. CSS (Appearance & Layout)

CSS answers:

> **“How should this look and where should it go?”**

CSS:

* styles existing HTML
* controls spacing, size, layout, fonts, colors

Important rule:

* CSS **never creates elements**
* it only styles what HTML already created

---

## 4. JavaScript (Behavior)

JavaScript answers:

> **“What should happen when something changes?”**

Examples:

* button click
* showing/hiding content
* updating text
* reacting to user input

Without React:

* JavaScript must **manually update the HTML**
* you explicitly tell the browser what to change

This becomes hard to manage as apps grow.

---

## 5. The key problem before React

Without React, you must:

* update data
* find HTML elements
* manually keep UI in sync with data

This causes:

* bugs
* duplicated logic
* UI and data going out of sync

---

## 6. What React actually does (IMPORTANT)

React solves one core problem:

> **You should not manually update the UI.**

Instead:

* You update **data (state)**
* React updates the UI for you

React introduces this idea:

> **UI is a function of state**

Meaning:

* The screen is automatically calculated from data
* If data changes → React re-renders the UI

You never touch the DOM manually.

---

## 7. “UI is a function of state” (plain meaning)

In simple terms:

* State = data (numbers, text, lists, objects)
* UI = what the user sees

Rule:

> **Change the data → React updates the UI**

You describe:

* what the UI should look like
* not how to update it

---

## 8. JSX (Common confusion)

JSX is **NOT HTML**.

JSX is:

> **JavaScript syntax that looks like HTML**

Why JSX exists:

* Writing UI in plain JavaScript is unreadable
* JSX makes UI code readable

JSX:

* runs as JavaScript
* is converted to JavaScript before the browser sees it

---

## 9. JSX mental rules

Because JSX is JavaScript:

* You can use expressions: `{count}`, `{2 + 2}`
* You cannot use HTML logic (`if` attributes, etc.)

JSX is just a nicer way to write JavaScript UI code.

---

## 10. TypeScript (Big confusion cleared)

TypeScript is:

> **JavaScript + safety checks**

Important truths:

* TypeScript does **not** change runtime behavior
* Browsers do **not** run TypeScript

Flow:

```
TypeScript → JavaScript → Browser
```

TypeScript:

* checks your code before running
* removes types
* outputs plain JavaScript

---

## 11. Does TypeScript replace JavaScript?

❌ No

Correct mental model:

> **We write JavaScript and annotate it with TypeScript**

Logic stays the same.
Behavior stays the same.
Safety improves.

---

## 12. Full stack mental picture

```
You write:
React + JSX + TypeScript + CSS
        ↓
Converted to:
HTML + CSS + JavaScript
        ↓
Browser renders & runs it
```

Nothing magical.
Each layer adds value.

---

## 13. Phase 0 key takeaways

* Browser only understands HTML, CSS, JS
* React manages UI updates for you
* JSX is JavaScript, not HTML
* TypeScript prevents mistakes before runtime
* UI depends on data, not manual DOM updates

---

## 14. Why this matters for your project

Your scheduling app will:

* change data often
* re-render large UIs
* depend on correctness

React + TypeScript make this manageable and safe.

---

---

# Phase 1 — Project & File Structure (Notes)

## 1. Core principle: responsibility-based structure

Frontend projects are organized by **responsibility**, not by technology.

We do NOT separate files into:

* html /
* css /
* js /

Instead, we separate by **what the code is responsible for**.

Reason:

* Layouts and features change often
* Responsibilities stay stable

---

## 2. Pages vs Components

### Pages

* Represent **full screens** of the app
* Usually mapped to routes (URLs)
* Compose multiple components

Examples:

* Home page
* Employees page
* Schedule page

Rule of thumb:

> If it feels like a full screen, it is a Page.

---

### Components

* Small, reusable UI building blocks
* Used across many pages
* Focused on one responsibility

Examples:

* Button
* Navbar
* Card
* Modal

Rule of thumb:

> If it can be reused, it is a Component.

---

## 3. Where HTML lives in React

* We do not write multiple `.html` files
* HTML structure is written as **JSX**
* JSX lives inside **components and pages**

Pages are also components.

---

## 4. CSS structure

CSS is split into two main categories:

### Global styles

Used for:

* fonts
* background color
* resets
* design tokens (colors, spacing, fonts)

Affects the entire app.

---

### Component styles

Used for:

* specific components
* page-specific layouts

These styles are **scoped** to avoid conflicts.

---

## 5. JavaScript & logic placement

* JavaScript logic lives close to the UI it controls
* No early over-abstraction
* Keep logic readable and local

---

## 6. TypeScript in the structure

* TypeScript is not a separate folder
* It lives inside components and pages
* It provides safety at development time

---

## 7. Applying this to your project

Correct placement examples:

* Home page → Pages
* Navbar → Components
* Button → Components
* Design tokens → Styles

---

## Phase 1 key takeaways

* Organize by responsibility, not technology
* Pages = full screens
* Components = reusable UI
* JSX replaces raw HTML files
* CSS is split into global + component styles
* TypeScript adds safety inside files

---

---

# Phase 2 — Global Styles, Tokens Usage & Flexbox (Notes)

## 1. Design tokens (recap)

Design tokens are **named design decisions**.

Why they exist:

* avoid hard-coded values
* keep spacing, colors, fonts consistent
* change design in one place

Example:

```css
padding: var(--space-4); /* better than padding: 16px */
```

Tokens are defined in `:root` so they are **globally available**.

---

## 2. `globals.css` — what it is for

`globals.css` sets **baseline rules** for the entire app.

It does NOT style individual components.
It defines:

* default font
* background color
* text color
* box-sizing behavior
* link and form defaults
* focus styles (accessibility)

---

## 3. Important global selectors

### `:root`

* Top-level element
* Holds CSS variables (tokens)
* Makes tokens usable everywhere

---

### `*` (universal selector)

Applies to **every element**.

Used here for:

```css
box-sizing: border-box;
```

Meaning:

* width/height include padding & border
* layout math becomes predictable

---

### `html, body`

* Root page elements
* `height: 100%` allows full-height layouts later

---

### `body`

Sets global defaults:

* removes browser margin
* applies font from tokens
* applies background & text color

---

### `a` (links)

```css
a {
  color: inherit;
  text-decoration: none;
}
```

Meaning:

* links match surrounding text
* no default blue/underline

---

### Form elements (`button`, `input`, etc.)

```css
font: inherit;
```

Meaning:

* buttons and inputs use the same font as text

---

### `:focus-visible`

Styles keyboard focus only.

Why:

* accessibility
* clean, intentional focus ring

Uses token:

```css
box-shadow: var(--focus-ring);
```

---

## 4. `main.tsx` — app entry point

`main.tsx`:

* runs once
* loads global CSS
* mounts React into the real DOM

Important line:

```tsx
<App />
```

Meaning:

* render the root React component

Global CSS is imported here so it applies to **all components**.

---

## 5. `App.tsx` — root component

`App` is:

* a React component (function)
* the top of the component tree

Rule:

* Capitalized functions are components
* `<App />` means "render the App component"

Example:

```tsx
function App() {
  return <div>UI</div>;
}
```

---

## 6. JSX clarification (common confusion)

JSX is:

* JavaScript syntax
* looks like HTML
* not actually HTML

Rule:

* lowercase → real HTML (`div`)
* uppercase → React component (`App`, `Button`)

---

## 7. Padding, Margin, Gap (core CSS concept)

### Padding

* space **inside** an element
* used inside buttons, cards

### Margin

* space **outside** an element
* used between sections/components

### Gap

* space **between children** inside a layout container
* used with flex or grid

Rule of thumb:

* padding → inside
* margin → between components
* gap → between items in a layout

---

## 8. `display` — what it means

`display` defines the **layout mode** of a container.

Default:

* block → vertical stacking

Modern layouts use:

* `flex`
* `grid`

---

## 9. Flexbox (important)

`display: flex` means:

* parent controls layout of its children
* layout is along axes

Flex provides:

* main axis (row or column)
* cross axis (perpendicular)

Used for:

* navbars
* centering
* rows of items

---

## 10. Why flex is used for centering

Centering means:

* horizontal alignment
* vertical alignment

Flex gives both axes.

Example:

```css
display: flex;
justify-content: center; /* main axis */
align-items: center;     /* cross axis */
```

---

## 11. Why `justify-content` needs flex

Without flex or grid:

* there is no layout axis
* alignment rules have no meaning

So:

* no layout system → no alignment

---

## Phase 2 key takeaways

* Tokens remove guessing
* `globals.css` sets app-wide defaults
* `main.tsx` boots the app
* `App.tsx` is the root component
* Components are capitalized functions
* Flex = parent-controlled layout
* Gap is preferred for spacing items

---

---

# Phase 3 — Components, Props, CSS Modules & Flex (Notes)

## 1. React components recap

A React component is:

* a JavaScript / TypeScript function
* with a **capitalized name**
* that returns JSX (UI)

Example:

```tsx
function Button() {
  return <button>Click</button>;
}
```

Using it:

```tsx
<Button />
```

---

## 2. `type` in TypeScript (common confusion)

`type` is a **TypeScript keyword** used to describe the shape of data.

Example:

```ts
type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};
```

Meaning:

* `Props` is NOT a runtime object
* it exists only for **type checking before code runs**

`type` can be used for:

* component props
* function parameters
* API data shapes
* configuration objects

---

## 3. Function types like `() => void`

`() => void` means:

* this value is a function
* it takes **no parameters**
* it returns **nothing**

Functions can also return values:

```ts
() => number
() => string
```

In React event handlers, we usually return `void`.

---

## 4. `onClick` in React

`onClick` is:

* a **standard React prop** (not CSS)
* maps to the browser click event

Example:

```tsx
<button onClick={handleClick}>Save</button>
```

It receives a function to run when clicked.

---

## 5. HTML `type` attribute on `<button>`

`type` is a **standard HTML attribute**, not a CSS class.

Common values:

* `button` (default-safe)
* `submit` (submits a form)

Why we set it explicitly:

* prevents accidental form submission
* avoids a common bug

---

## 6. CSS Modules basics

In CSS Modules:

```tsx
import styles from "./Button.module.css";
```

* `styles` is an object
* keys = class names you wrote
* values = safe, generated class names

Example:

```tsx
className={styles.base}
```

---

## 7. What `.base` means

`.base` is:

* just a class name we chose
* shared styles for the component

It is **component-scoped**, not global.

---

## 8. `:active` pseudo-class

`:active` means:

* the element is currently being pressed

Used for:

* click feedback
* making buttons feel real

---

## 9. `transform` and `translateY`

```css
transform: translateY(1px);
```

Meaning:

* visually move element down by 1px
* does not affect layout

Used for subtle interaction feedback.

---

## 10. Template strings in JSX

This syntax:

```tsx
`${styles.base} ${className}`
```

Is a **JavaScript template string**.

* `` ` `` allows string interpolation
* `${}` injects variables

Used to combine class names dynamically.

---

## 11. Why Button imports CSS but Container doesn’t

* Button **owns its appearance** → imports its CSS
* Container is **layout-only** → receives `className`

This keeps layout flexible and reusable.

---

## Phase 3 key takeaways

* `type` defines data shape (TypeScript only)
* Props describe what a component accepts
* `() => void` means a function with no return
* `onClick` is behavior, not styling
* HTML attributes ≠ CSS classes
* CSS Modules scope styles safely
* Flexbox controls child layout

---

---

# Phase 3 — HTML Semantics & Structure (Notes)

## 1. What HTML is for (core idea)

HTML answers **one question only**:

> What is this thing?

HTML is **not** for:

* styling
* layout
* behavior

Those come later (CSS & JS).

---

## 2. Think in sections before writing code

Before writing JSX, decide:

* What sections does this page have?
* What is the purpose of each part?

Example mental structure:

* Header
* Main

  * Hero section
  * Features section

Structure first, code second.

---

## 3. Core semantic elements (used most often)

### `header`

Use when:

* content introduces a page or section
* contains branding or navigation

---

### `nav`

Use when:

* content is navigation links

Rule:

> If links help move around the app → `nav`

---

### `main`

* Represents main page content
* Use **once per page only**

---

### `section`

Use when:

* content is a logical topic group
* it could reasonably have a heading

Memory trick:

> If you can title it, it’s a section.

---

### `footer`

Use when:

* content closes a page or section
* meta information, links, copyright

---

## 4. Headings (`h1`–`h6`)

Rules:

* `h1` → page title (usually one)
* `h2` → section titles
* `h3` → subsections

Do not skip levels for styling.

Why:

* accessibility
* screen readers
* document structure

---

## 5. When to use `div`

`div` means:

> This has no semantic meaning.

Use `div` when:

* no semantic tag fits
* grouping is for layout or styling

Correct example:

```jsx
<div className="actions">
  <Button />
  <Button />
</div>
```

---

## 6. When NOT to use `div`

Avoid replacing semantic elements with `div`.

Bad:

```jsx
<div className="nav">...</div>
```

Better:

```jsx
<nav>...</nav>
```

---

## 7. Nesting rules (important)

Golden rule:

> Nest based on meaning, not appearance.

Good example:

```jsx
<header>
  <nav>...</nav>
</header>
```

Avoid unnecessary deep nesting.

---

## 8. Containers (layout vs meaning)

A Container:

* is NOT semantic
* exists for layout only

Pattern:

```jsx
<section>
  <Container>
    <h2>Title</h2>
  </Container>
</section>
```

Meaning:

* `section` → what it is
* `Container` → how it’s laid out

---

## 9. Do you need a new `div`?

Ask:

* Is this grouping meaningful?
* Or is it just spacing/layout?

Rules:

* grouping/layout → `div` is fine
* pure spacing → prefer CSS on parent

---

## 10. Writing HTML as JSX

JSX is HTML-like syntax inside JavaScript.

Differences:

* `className` instead of `class`
* `{}` for JavaScript expressions

Still think in **HTML semantics**, not React.

---

## 11. Memory checklist (use before coding)

Ask yourself:

1. What is the page title? → `h1`
2. What are the main sections? → `section`
3. Is there navigation? → `nav`
4. Is this semantic or layout-only?
5. Can I explain this structure in plain English?

If yes → your HTML is good.

---

## Phase 3 (HTML) key takeaways

* HTML = meaning
* CSS = layout & style
* Use semantic tags whenever possible
* Use `div` only when needed
* Containers are layout tools
* Structure first, styling later

---

(We will continue Phase 3 with CSS Modules next.)
