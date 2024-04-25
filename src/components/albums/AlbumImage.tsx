import { useEffect, useState } from "react";

export default function AlbumImage({ image }: { image: string }) {
  const [imageUrl, setImageUrl] = useState<string>();
  async function fetchImageData(img: string) {
    const res = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/auraed-oup2m.appspot.com/o/${img}`
    );

    const data = await res.json();
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/auraed-oup2m.appspot.com/o/${data.name}?alt=media&token=${data.downloadTokens}`;
    setImageUrl(imageUrl);
  }

  useEffect(() => {
    fetchImageData(image);
  }, [image]);

  return (
    <div className="flex flex-col justify-between w-full space-y-3">
      <img
        className="rounded-2xl w-full aspect-video object-cover"
        src={imageUrl}
        alt=""
      />
      <br />
    </div>
  );
}
