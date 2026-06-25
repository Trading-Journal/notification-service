# notification-service

Email, push, and in-app alert delivery

## Metadata
| Field | Value |
|-------|-------|
| Team  | platform |
| Stack | Node.js 22 / Express |
| Port  | 8093 |

## Running locally

```bash
docker build -t notification-service .
docker run -p 8093:8093 notification-service
```

Health: <http://localhost:8093/actuator/health/live>

test
