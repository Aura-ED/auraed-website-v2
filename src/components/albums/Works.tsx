import { useState } from "react";
import { Album } from "../../pages/albums/Albums";
import AlbumImage from "./AlbumImage";

type Props = {
  allAlbums: Album[];
};

function Works({ allAlbums }: Props) {
  const [activeAlbum, setActiveAlbum] = useState<number>(0);

  const changeAlbum = (index: number) => {
    setActiveAlbum(index);
  };

  console.log("allAlbums:", allAlbums);
  console.log("activeAlbum:", activeAlbum);
  if (allAlbums && allAlbums[activeAlbum]) {
    console.log("activeAlbum's gallary:", allAlbums[activeAlbum].gallary);
  }

  return (
    <section id="blogs" className="mt-20">
      <div className="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Album Info --> */}
        <div className="self-center text-center space-y-3">
          <h2 className="text-3xl font-bold">Glimpse Of Our Works</h2>
          <p className="text-sm max-w-2xl font-semibold text-dark">
            We are a non-profital organization focusing on child education with
            technology.
          </p>
        </div>

        {/* <!-- Filters --> */}

        <ul className="flex mx-auto gap-x-10 gap-y-5 flex-wrap py-10 justify-center text-center cursor-pointer">
          {allAlbums.map((album, index) => (
            <div
              onClick={() => {
                index !== activeAlbum && changeAlbum(index);
              }}
              className={`w-fit px-3 py-1 rounded-full ${
                activeAlbum === index &&
                "bg-[#4d727a] text-white font-semibold "
              }`}
            >
              {album.name}
            </div>
          ))}
        </ul>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {allAlbums[activeAlbum].gallary.map((image, index) => (
            <AlbumImage key={index} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
