# PermLens

Permission transparency and privacy labeling for GitHub Apps.


## What is PermLens?

PermLens provides human-readable visibility into **GitHub App permissions** and the types of data an app may access, using **publicly available metadata**.

It generates a structured, privacy-label-style summary based on an app’s declared permissions, helping developers and reviewers better understand permission scope at a glance.

PermLens is an **informational transparency tool**, not a security scanner.


## What PermLens does

- Fetches declared GitHub App permissions via the GitHub API
- Explains permissions in clear, plain language
- Groups permissions into predefined data access categories
- Generates a structured privacy label with sensitivity levels

The output is designed to be predictable, auditable, and safe to consume programmatically.


## What PermLens does NOT do

PermLens does **not**:

- Inspect application source code or runtime behavior
- Scan repositories, workflows, or network activity
- Access private repositories or user data
- Act on behalf of users or organizations
- Guarantee security, safety, or compliance

PermLens reflects **what an app declares**, not what it actually does at runtime.


## How it works

1. Authenticates as a GitHub App using JWT
2. Fetches the app’s declared permissions from the GitHub API
3. Maps permissions to predefined data access categories
4. Generates a privacy label with category details and sensitivity level

Only public GitHub App metadata is used.


## API

### Get privacy label for a GitHub App

```http
GET /api/app/:slug/label
```

Example response:

```json
{
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
    "Based on public metadata only; no runtime inspection."
  ]
}
```


## Project status

PermLens is in **early development**.

Version **v0.1.0** provides:

- A stable backend API
- GitHub App authentication
- Core privacy label generation logic

APIs and schemas may evolve as the project matures.
A frontend interface is planned for a future release.


## Security and privacy

- Uses GitHub App authentication (JWT-based)
- Requests minimal, read-only access
- Uses public GitHub metadata only
- Does not store user, repository, or organization data


## Branding

The PermLens name, logo, and visual branding are **not** covered by the open-source license for this repository.

Use of the PermLens name or logo in a way that suggests endorsement, affiliation, or official status requires explicit permission from the project author.


## License

Released under the terms of [Apache License 2.0](LICENSE).