export function readingTime(body: string): number {
  const charsPerMinute = 500;
  const text = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#*_~>\-|]/g, '')
    .replace(/\s+/g, '');
  return Math.max(1, Math.ceil(text.length / charsPerMinute));
}
