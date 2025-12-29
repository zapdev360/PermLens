<p align="center">
  <img src="frontend/public/favicon.svg" alt="PermLens logo" width="140" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/issues/zapdev360/PermLens?style=for-the-badge" alt="Repo issues" >
  <img src="https://img.shields.io/github/license/zapdev360/PermLens?style=for-the-badge" alt="Repo license" >
</p>


# PermLens 🔍

Permission transparency and privacy labeling for GitHub Apps.

PermLens helps developers and reviewers understand what data a GitHub App *declares* access to, using publicly available metadata.


## ℹ What is PermLens?

PermLens provides human-readable visibility into **GitHub App permissions** and the types of data an app may access.

It generates a structured, privacy-label-style summary based on an app’s declared permissions, helping users reason about permission scope at a glance.

PermLens is an **informational transparency tool**, not a security scanner.


## ✅ What PermLens does

- Resolves GitHub Apps by marketplace slug (when available)
- Fetches declared GitHub App permissions via the GitHub API
- Explains permissions in clear, plain language
- Groups permissions into predefined data access categories
- Generates a structured privacy label with sensitivity levels
- Presents results through a web-based frontend interface

The output is designed to be predictable, stable, auditable, and safe to consume programmatically.


## 🚫 What PermLens does NOT do

PermLens does **not**:

- Inspect application source code or runtime behavior
- Monitor network activity or data exfiltration
- Scan repositories, workflows, or secrets
- Access private repositories or user data
- Act on behalf of users or organizations
- Guarantee security, safety, or compliance

PermLens reflects **what an app declares**, not what it actually does at runtime.


## ❓ How it works

1. Attempts to resolve a GitHub App by its marketplace slug
2. Fetches the app’s declared permissions using the GitHub API
3. Maps permissions to predefined data access categories
4. Computes an overall sensitivity level
5. Returns a privacy-label-style summary

If an app cannot be resolved by slug, PermLens safely falls back to
its own declared permissions. In this case, PermLens authenticates
as a GitHub App using JWT to fetch its metadata and explicitly
reports the resolution status in the response.

Only public GitHub App metadata is used.


## ⚙ API

### Get privacy label for a GitHub App

```http
GET /api/app/:slug/label
```

Example response:

```json
{
  "resolved": true,
  "label": {
    "data_categories": [
      {
        "key": "repository_metadata",
        "label": "Repository metadata",
        "sensitivity": "low",
        "description": "Basic information about repositories without access to file contents."
      }
    ],
    "overall_sensitivity": "low",
    "permissions": [
      {
        "name": "metadata",
        "access": "read"
      }
    ],
    "notes": [
      "Derived from declared GitHub App permissions.",
      "Based on public GitHub metadata only; no runtime or code inspection."
    ]
  }
}
```


## 🚧 Project status

PermLens is in **early development**.

Version **v0.2.0** introduces:

- A public web-based frontend
- GitHub App resolution by marketplace slug
- Expanded permission taxonomy
- Explicit resolution status in API responses
- Transparent fallback behavior for unresolved apps
- Clear sensitivity labeling and improved privacy label presentation

APIs and schemas may evolve as the project matures.


## 🔐 Security and privacy

- Uses GitHub App authentication (JWT-based) where applicable
- Requests minimal, read-only access
- Based on public GitHub metadata only
- Does not store user, repository, or organization data


## 🏷️ Branding

The PermLens name, logo, and visual branding are **not** covered by the open-source license for this repository.

Use of the PermLens name or logo in a way that suggests endorsement, affiliation, or official status requires explicit permission from the project author.


## ⚖️ License

Released under the terms of [Apache License 2.0](LICENSE).