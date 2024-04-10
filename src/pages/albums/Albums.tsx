import React from "react";
import SecondaryCover from "../../layouts/secondaryCover";
import Works from "../../components/albums/Works";

import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../lib/firebase";

export interface Album {
  name: string;
  gallary: string[];
  id: string;
}

const Albums: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>();

  const fetchPost = async () => {
    await getDocs(collection(db, "album")).then((querySnapshot) => {
      const newData: Album[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        name: doc.data().name,
        gallary: doc.data().gallary,
      }));

      setAlbums(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div className="">
      <SecondaryCover
        title="Albums"
        description="We are a non-profit organization focusing on child education with technology."
      />
      <div className="p-4 pageAnimation">
        {albums && albums?.length > 0 && <Works allAlbums={albums} />}
      </div>
    </div>
  );
};

export default Albums;
