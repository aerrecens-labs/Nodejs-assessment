export function createThread(taskId) {
  const comments = [];
  return {
    taskId,
    add(author, body) {
      const comment = {
        id: comments.length + 1,
        taskId,
        author,
        body: String(body).trim(),
        at: new Date().toISOString(),
      };
      comments.push(comment);
      return { ...comment };
    },
    list() {
      return comments.map((comment) => ({ ...comment }));
    },
  };
}

export function mentionPattern() {
  return /@([a-z0-9._-]+)/gi;
}

export function mentions(body) {
  return [...String(body).matchAll(mentionPattern())].map((match) => match[1]);
}
