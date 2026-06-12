# @n8n-dev/n8n-nodes-journy

![journy Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-journy.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-journy)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing journy API integrations by hand.**

Every time you connect n8n to journy, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to journy took 5 minutes, not half a day?**

This node gives you **8+ resources** out of the box: **Users**, **Accounts**, **Track**, **Properties**, **Events**, and 3 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-journy
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-journy`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **journy API** → paste your API key
3. Drag the **journy** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Users</b> (3 operations)</summary>

- Post Link web activity to user
- Delete user
- Post Create or update user

</details>

<details>
<summary><b>Accounts</b> (4 operations)</summary>

- Delete account
- Post Create or update account
- Post Add users to an account
- Post Remove user from account

</details>

<details>
<summary><b>Track</b> (1 operations)</summary>

- Post Track event

</details>

<details>
<summary><b>Properties</b> (2 operations)</summary>

- Get account properties
- Get user properties

</details>

<details>
<summary><b>Events</b> (1 operations)</summary>

- Get events

</details>

<details>
<summary><b>Segments</b> (2 operations)</summary>

- Get account segments
- Get user segments

</details>

<details>
<summary><b>Websites</b> (1 operations)</summary>

- Get snippet for a website

</details>

<details>
<summary><b>Validation</b> (1 operations)</summary>

- Get Validate API key

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from journy docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official journy OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **journy** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the journy API updates, this node updates too.

---


## License

MIT © [kelvinzer0](https://github.com/n8n-code)
