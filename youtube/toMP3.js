// https://www.youtube.com/watch?v=RvRokp3cVsA
// https://www.y2meta.com/jp/youtube-to-mp3/RvRokp3cVsA
const parsedUrl = new URL(window.location.href);
const id = parsedUrl.searchParams.get("v");
window.open(`https://www.y2meta.com/jp/youtube-to-mp3/${id}`);
