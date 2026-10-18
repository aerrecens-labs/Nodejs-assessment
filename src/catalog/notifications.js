export const notificationTemplates = [
  {
    "id": 1,
    "channel": "email",
    "moment": "created",
    "subject": "Task created",
    "body": "A task was created. Open the board to review title, priority, and owner. Channel: email."
  },
  {
    "id": 2,
    "channel": "email",
    "moment": "completed",
    "subject": "Task completed",
    "body": "A task was completed. Open the board to review title, priority, and owner. Channel: email."
  },
  {
    "id": 3,
    "channel": "email",
    "moment": "reopened",
    "subject": "Task reopened",
    "body": "A task was reopened. Open the board to review title, priority, and owner. Channel: email."
  },
  {
    "id": 4,
    "channel": "email",
    "moment": "due soon",
    "subject": "Task due soon",
    "body": "A task was due soon. Open the board to review title, priority, and owner. Channel: email."
  },
  {
    "id": 5,
    "channel": "email",
    "moment": "overdue",
    "subject": "Task overdue",
    "body": "A task was overdue. Open the board to review title, priority, and owner. Channel: email."
  },
  {
    "id": 6,
    "channel": "email",
    "moment": "assigned",
    "subject": "Task assigned",
    "body": "A task was assigned. Open the board to review title, priority, and owner. Channel: email."
  },
  {
    "id": 7,
    "channel": "email",
    "moment": "commented",
    "subject": "Task commented",
    "body": "A task was commented. Open the board to review title, priority, and owner. Channel: email."
  },
  {
    "id": 8,
    "channel": "slack",
    "moment": "created",
    "subject": "Task created",
    "body": "A task was created. Open the board to review title, priority, and owner. Channel: slack."
  },
  {
    "id": 9,
    "channel": "slack",
    "moment": "completed",
    "subject": "Task completed",
    "body": "A task was completed. Open the board to review title, priority, and owner. Channel: slack."
  },
  {
    "id": 10,
    "channel": "slack",
    "moment": "reopened",
    "subject": "Task reopened",
    "body": "A task was reopened. Open the board to review title, priority, and owner. Channel: slack."
  },
  {
    "id": 11,
    "channel": "slack",
    "moment": "due soon",
    "subject": "Task due soon",
    "body": "A task was due soon. Open the board to review title, priority, and owner. Channel: slack."
  },
  {
    "id": 12,
    "channel": "slack",
    "moment": "overdue",
    "subject": "Task overdue",
    "body": "A task was overdue. Open the board to review title, priority, and owner. Channel: slack."
  },
  {
    "id": 13,
    "channel": "slack",
    "moment": "assigned",
    "subject": "Task assigned",
    "body": "A task was assigned. Open the board to review title, priority, and owner. Channel: slack."
  },
  {
    "id": 14,
    "channel": "slack",
    "moment": "commented",
    "subject": "Task commented",
    "body": "A task was commented. Open the board to review title, priority, and owner. Channel: slack."
  },
  {
    "id": 15,
    "channel": "digest",
    "moment": "created",
    "subject": "Task created",
    "body": "A task was created. Open the board to review title, priority, and owner. Channel: digest."
  },
  {
    "id": 16,
    "channel": "digest",
    "moment": "completed",
    "subject": "Task completed",
    "body": "A task was completed. Open the board to review title, priority, and owner. Channel: digest."
  },
  {
    "id": 17,
    "channel": "digest",
    "moment": "reopened",
    "subject": "Task reopened",
    "body": "A task was reopened. Open the board to review title, priority, and owner. Channel: digest."
  },
  {
    "id": 18,
    "channel": "digest",
    "moment": "due soon",
    "subject": "Task due soon",
    "body": "A task was due soon. Open the board to review title, priority, and owner. Channel: digest."
  },
  {
    "id": 19,
    "channel": "digest",
    "moment": "overdue",
    "subject": "Task overdue",
    "body": "A task was overdue. Open the board to review title, priority, and owner. Channel: digest."
  },
  {
    "id": 20,
    "channel": "digest",
    "moment": "assigned",
    "subject": "Task assigned",
    "body": "A task was assigned. Open the board to review title, priority, and owner. Channel: digest."
  },
  {
    "id": 21,
    "channel": "digest",
    "moment": "commented",
    "subject": "Task commented",
    "body": "A task was commented. Open the board to review title, priority, and owner. Channel: digest."
  }
];

export function templatesFor(channel) {
  return notificationTemplates.filter((item) => item.channel === channel);
}
