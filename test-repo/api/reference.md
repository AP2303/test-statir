---
title: API Reference
description: REST API reference for the Statir backend service.
date: 2026-01-20
---

# API Reference

The Statir backend exposes a JSON REST API. All endpoints require a valid Keycloak bearer token unless noted otherwise.

## Base URL

```
https://api.statir.osir.com
```

---

## Authentication

Include the token in the `Authorization` header:

```http
Authorization: Bearer <your-access-token>
```

Tokens are obtained via the Keycloak OIDC flow. The frontend handles this automatically; use the token from your browser session for manual API calls.

---

## Endpoints

### `POST /api/publish`

Clone a Git repository and deploy a static site.

**Request body**

```json
{
  "repoUrl": "https://github.com/you/my-repo.git",
  "projectName": "my-docs",
  "theme": "classic",
  "token": "ghp_optional_private_repo_token"
}
```

| Field | Required | Description |
|-------|----------|-------------|
| `repoUrl` | ✅ | Full HTTPS URL of the Git repository |
| `projectName` | ✅ | Unique site identifier (lowercase, hyphens allowed) |
| `theme` | ✅ | Layout to use: `classic`, `sidebar`, `cleanpack`, or `bare` |
| `token` | ❌ | Personal access token for private repositories |

**Response `202 Accepted`**

```json
{
  "projectName": "my-docs",
  "publicUrl": "https://my-docs.statica.osir.com",
  "markdownPages": 5,
  "generatedFiles": 12,
  "siteTitle": "My Docs"
}
```

---

### `GET /api/projects`

List all sites owned by the authenticated user.

**Response `200 OK`**

```json
[
  {
    "projectName": "my-docs",
    "publicUrl": "https://my-docs.statica.osir.com",
    "status": "ready",
    "createdAt": "2026-01-20T14:32:00Z"
  }
]
```

---

### `DELETE /api/projects/{projectName}`

Permanently delete a deployed site and its S3 bucket.

**Path parameter**

| Parameter | Description |
|-----------|-------------|
| `projectName` | The unique name of the project to delete |

**Response `204 No Content`**

---

### `POST /api/projects/{projectName}/republish`

Re-clone the repository and rebuild the site using the latest commit.

**Response `202 Accepted`** — same shape as `POST /api/publish`.

---

## Error responses

All errors follow a consistent shape:

```json
{
  "error": "PROJECT_NOT_FOUND",
  "message": "No project named 'my-docs' found for this user.",
  "status": 404
}
```

| HTTP status | Meaning |
|-------------|---------|
| `400` | Invalid request payload |
| `401` | Missing or expired access token |
| `403` | You do not own this project |
| `404` | Project not found |
| `409` | A project with this name already exists |
| `500` | Internal server error |

