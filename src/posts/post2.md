---
id: 2
title: "Understanding useEffect"
date: "2025-07-02"
author: "Jane Dev"
---

# Understanding useEffect

The `useEffect` hook lets you perform side effects in function components. It's commonly used for data fetching, subscriptions, and manually changing the DOM.

```tsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```
