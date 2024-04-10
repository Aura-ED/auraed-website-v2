import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../lib/firebase";

interface Member {
  id: string;
  linkedin: string;
  email: string;
  name: string;
  image: string;
  role: string;
  bio: string;
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
              <div className="flex items-center gap-x-4">
                <img
                  className="rounded-full size-20"
                  src={member.image}
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800">{member.name}</h3>
                  <p className="text-xs uppercase text-gray-500">
                    {member.role}
                  </p>
                </div>
              </div>

              <p className="mt-3 text-gray-500">{member.bio}</p>

              <div className="mt-3 space-x-1 flex items-center">
                <a
                  className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                  href={member.linkedin}
                >
                  <svg width="12" height="12" viewBox="0 0 20 20">
                    <title>linkedin [#161]</title>
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Dribbble-Light-Preview"
                        transform="translate(-180.000000, -7479.000000)"
                        fill="currentColor"
                      >
                        <g
                          id="icons"
                          transform="translate(56.000000, 160.000000)"
                        >
                          <path
                            d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                            id="linkedin-[#161]"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                {member.github && (
                  <a
                    className="inline-flex justify-center items-center size-8 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none "
                    href={member.github}
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
