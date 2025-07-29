# LMS Backend

This is a minimal Express + TypeScript backend implementing a subset of the APIs described in `LMS_Blueprint.md`.

## Development

```bash
npm install
npm start
```

The server exposes the following endpoints:
- `GET /api/courses`
- `GET /api/courses/:id`
- `POST /api/courses`
- `GET /api/plugins`
- `POST /api/plugins`
