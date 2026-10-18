export const teams = [
  {
    "id": "platform",
    "name": "Platform",
    "mission": "Owns shared services and the task API.",
    "capacity": 4,
    "timezone": "America/New_York"
  },
  {
    "id": "product",
    "name": "Product",
    "mission": "Shapes the candidate workflow and interview tools.",
    "capacity": 5,
    "timezone": "America/Chicago"
  },
  {
    "id": "recruiting",
    "name": "Recruiting",
    "mission": "Coordinates screens and take-home reviews.",
    "capacity": 6,
    "timezone": "Europe/London"
  },
  {
    "id": "reliability",
    "name": "Reliability",
    "mission": "Watches health checks and request latency.",
    "capacity": 7,
    "timezone": "Asia/Kolkata"
  },
  {
    "id": "design-systems",
    "name": "Design Systems",
    "mission": "Keeps interface patterns consistent.",
    "capacity": 8,
    "timezone": "America/New_York"
  },
  {
    "id": "data",
    "name": "Data",
    "mission": "Summarizes completion and priority trends.",
    "capacity": 4,
    "timezone": "America/Chicago"
  },
  {
    "id": "security",
    "name": "Security",
    "mission": "Reviews access policy and request handling.",
    "capacity": 5,
    "timezone": "Europe/London"
  },
  {
    "id": "support",
    "name": "Support",
    "mission": "Turns incoming questions into tracked work.",
    "capacity": 6,
    "timezone": "Asia/Kolkata"
  }
];

export function teamById(id) {
  return teams.find((item) => item.id === id) ?? null;
}
