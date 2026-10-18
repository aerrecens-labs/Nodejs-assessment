export function tasksToMarkdown(tasks) {
  const lines = ['| ID | Title | Status | Priority |', '| --- | --- | --- | --- |'];
  for (const task of tasks) {
    const status = task.completed ? 'completed' : 'active';
    lines.push(`| ${task.id} | ${task.title.replace(/\|/g, '\\|')} | ${status} | ${task.priority} |`);
  }
  return lines.join('\n');
}

export function briefToMarkdown(brief) {
  const lines = [`# Weekly brief`, '', `Generated: ${brief.generatedAt}`, ''];
  lines.push('## Headlines');
  if (brief.headlines.length === 0) {
    lines.push('- No high-priority active tasks.');
  } else {
    for (const title of brief.headlines) {
      lines.push(`- ${title}`);
    }
  }
  lines.push('', '## Chart');
  lines.push('```');
  lines.push(...brief.chart);
  lines.push('```');
  return lines.join('\n');
}
