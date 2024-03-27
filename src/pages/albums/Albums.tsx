import React from "react";
import SecondaryCover from "../../layouts/secondaryCover";
import Works from "../../components/albums/Works";

interface Album {
  name: string;
  image: string[];
  // other properties of the album object
}

const Albums: React.FC = () => {
  // Hardcoded albums
  const allAlbums: Album[] = [
    // create a demo dummy data for albums use different image card and title
    {
      name: "Album 1",
      image: [
        "https://via.placeholder.com/110",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      name: "Album 2",
      image: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      name: "Album 3",
      image: [
        "https://via.placeholder.com/120",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
  ];

  return (
    <div className="">
      <SecondaryCover
        title="Albums"
        description="We are a non-profit organization focusing on child education with technology."
      />
      <div className="p-4 pageAnimation">
        <Works allAlbums={allAlbums} />
      </div>
    </div>
  );
};

export default Albums;
