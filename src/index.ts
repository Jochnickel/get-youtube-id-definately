import gtYtId from "get-youtube-id";
export const getYouTubeID = (url: string, opts?: { fuzzy: boolean }): string => gtYtId(url, opts) || "L-q9TQ8rPDs";