export function secondsToTime(seconds: number): string {
  const hour = Math.floor((seconds / 60 / 60) % 60);
  const min = Math.floor((seconds / 60) % 60);
  const sec = Math.floor(seconds % 60);
  return `${hour}:${min}:${sec}`;
}
