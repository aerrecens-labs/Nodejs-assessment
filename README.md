# Task API — Node.js Coding Test

A small Node.js Task API used as a **10-minute live coding exercise** for backend candidates.

## Quick start

```bash
npm start
```

Server runs at `http://localhost:3000`.


## Time Limit

10 minutes

## Task

Implement task filtering in the Task API.

`GET /tasks` accepts an optional `status` query parameter:

- `all`
- `active`
- `completed`

### Requirements

- `all` returns every task.
- `active` returns only incomplete tasks.
- `completed` returns only completed tasks.
- Invalid or missing `status` should behave like `all` (or return a clear 400 — either is fine if consistent).
- Existing toggle behavior must continue working: `PATCH /tasks/:id/toggle`.

### Bonus

If you finish early, include a `count` field in the JSON response with the number of returned tasks.

## Rules

- Use Node.js (built-in `http` module is already used).
- Keep the existing project structure where practical.
- Do not install unnecessary dependencies.
- Focus on functionality and clean code.

## Run

```bash
npm start
```

Try:

```bash
curl "http://localhost:3000/tasks?status=active"
curl -X PATCH "http://localhost:3000/tasks/1/toggle"
```

## Evaluation

You will be evaluated on:

* Understanding of the existing Node.js code
* Correct filtering logic
* API behavior and edge cases
* Code quality
* Ability to work independently within the time limit

## What’s already implemented

- In-memory task store with mock data
- `GET /tasks` returns tasks (filter not wired yet)
- `PATCH /tasks/:id/toggle` toggles completion
- `GET /health` health check
- CORS headers for local testing

## API

| Method | Path | Description |
| ------ | ---- | ----------- |
| `GET` | `/tasks?status=all\|active\|completed` | List tasks (candidate implements filtering) |
| `PATCH` | `/tasks/:id/toggle` | Toggle task completion |
| `GET` | `/health` | Health check |

## Stack

- Node.js 18+
- Built-in `http` module (no Express)

## Project structure

```text
src/
  data.js       # mock tasks
  tasks.js      # store + filterTasks stub
  server.js     # process entry
  app/          # HTTP handler
  http/         # request and response helpers
  catalog/      # labels, teams, templates
  services/     # helpers around the in-memory store
  domain/       # priorities and task views
```

The exercise is still only `filterTasks` in `src/tasks.js`. The extra modules are supporting code and do not change the task endpoints.

## Interviewer notes

- Time box: **10 minutes**
- Core task: implement `filterTasks` in `src/tasks.js` for **all / active / completed**
- Optional bonus: include a `count` in the list response
- Do not share a solution with the candidate before or during the exercise
