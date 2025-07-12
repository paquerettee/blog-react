---
id: 8
title: "Configuring Environment Variables in Vite"
date: "2025-07-07"
author: "DevOps Dan"
---

# Configuring Environment Variables in Vite

Environment variables let you customize behavior without hardcoding sensitive values.

- Use `.env` files in your root directory
- Prefix variables with `VITE_` to expose them to the client
- Easily switch between dev and prod settings

```bash
VITE_API_KEY=your_api_key_here
```
