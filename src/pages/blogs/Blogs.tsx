import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import db from "../../lib/firebase";

export interface Blog {
  medium_link: string;
  thumbnail_url: string;
  author_name: string;
  published_date: PublishedDate;
  name: string;
  pinned: boolean;
  id: string;
}

export interface PublishedDate {
  seconds: number;
  nanoseconds: number;
}

import SecondaryCover from "../../layouts/secondaryCover";
import PinnedBlogs from "../../components/blogs/PopularBlogs";
import RecentBlogs from "../../components/blogs/RecentBlogs";
// import { API_URL } from "../../constants/Constant";

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>();

  const fetchPost = async () => {
    await getDocs(collection(db, "blog")).then((querySnapshot) => {
      const newData: Blog[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        medium_link: doc.data().medium_link,
        thumbnail_url: doc.data().thumbnail_url,
        author_name: doc.data().author_name,
        published_date: doc.data().published_date,
        name: doc.data().name,
        pinned: doc.data().pinned,
      }));
      setBlogs(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const pinnedBlogs = blogs?.filter((blog) => blog.pinned);
  const recentBlogs = blogs?.filter((blog) => !blog.pinned);

  return (
    <div className="">
      <SecondaryCover
        title="Blogs"
        description="We are a non-profit organization focusing on child education with technology."
      />
      <div className="story p-4 pageAnimation">
        <PinnedBlogs blogs={pinnedBlogs} />
        <RecentBlogs blogs={recentBlogs} />
      </div>
    </div>
  );
};

export default Blogs;
