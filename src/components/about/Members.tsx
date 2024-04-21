import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../lib/firebase";
import EachMember from "./EachMember";

export interface Member {
  id: string;
  linkedin: string;
  email: string;
  name: string;
  image: string;
  role: string;
  bio: string;
  avatar: string;
  github?: string;
}

const Members = () => {
  const [membersList, setMembersList] = useState<Member[]>();

  const fetchPost = async () => {
    await getDocs(collection(db, "member")).then((querySnapshot) => {
      const newData: Member[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        linkedin: doc.data().linkedin,
        email: doc.data().email,
        name: doc.data().name,
        image: doc.data().image,
        role: doc.data().role,
        github: doc.data().github,
        bio: doc.data().bio,
        avatar: doc.data().avatar,
      }));
      setMembersList(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <section id="members" className="mt-20">
      <div className="container px-2 mx-auto flex flex-col md:px-0">
        <div className="self-center text-center space-y-3">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-sm max-w-2xl font-semibold text-dark">
            We are a non-profit organization focusing on child education with
            technology.
          </p>
        </div>

        <div className="flex flex-col justify-between mt-10 space-y-5 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:space-y-0">
          {membersList?.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-xl p-4 md:p-6 bg-white border border-gray-200"
            >
              <EachMember member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
