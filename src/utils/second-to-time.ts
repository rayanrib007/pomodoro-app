import { zeroLeft } from "./zero-left";

export function secondsToTime(seconds: number): string {
  const hour = zeroLeft((seconds / 60 / 60) % 60);
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft(seconds % 60);
  return `${hour}:${min}:${sec}`;
}
