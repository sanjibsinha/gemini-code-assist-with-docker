

  // /workspaces/gemini-code-assist-with-docker/time-tracker-app/src/utils/timeUtils.js

// Helper function to pad a number with leading zeros.
const padToTwoDigits = (num) => num.toString().padStart(2, '0');

// Function to format time in HH:MM:SS
export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}:${padToTwoDigits(secs)}`;
}
