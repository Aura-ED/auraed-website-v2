import { useEffect, useState } from "react";

export default function MemberAvatar({
  image,
  alt,
}: {
  image: string;
  alt?: string;
}) {
  const [imageUrl, setImageUrl] = useState<string>();
  async function fetchImageData() {
    const res = await fetch(
      `https://firebasestorage.googleapis.com/v0/b/auraed-oup2m.appspot.com/o/${image}`
    );
    const data = await res.json();
    const imageUrl = `https://firebasestorage.googleapis.com/v0/b/auraed-oup2m.appspot.com/o/${data.name}?alt=media&token=${data.downloadTokens}`;
    setImageUrl(imageUrl);
  }

  useEffect(() => {
    fetchImageData();
  }, []);

  return (
    <img
      className="rounded-full size-20 object-cover"
      src={imageUrl}
      alt={alt}
    />
  );
}
