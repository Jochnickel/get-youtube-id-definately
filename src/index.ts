import gtYtId from "get-youtube-id";
const getYouTubeID = (url: string, opts?: { fuzzy: boolean }): string => gtYtId(url, opts) || getYouTubeID.ERROR_ID;
getYouTubeID.ERROR_ID = "L-q9TQ8rPDs";
export default getYouTubeID;