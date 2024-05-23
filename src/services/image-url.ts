const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const index = url.indexOf("media/");
  return url.slice(0, index + 6) + "crop/600/400/" + url.slice(index + 6);
};

export default getCroppedImageUrl;
