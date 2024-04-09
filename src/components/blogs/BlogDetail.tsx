function BlogDetail() {
  return (
    <section id="blog" className="mt-20">
      <div className="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Blog Info --> */}
        <div className="self-center text-center space-y-5 lg:w-4/5 xl:w-2/3">
          <h2 className="text-3xl font-bold">Education in Itahari</h2>
          <div className="flex justify-center items-center space-x-10">
            <div className="flex justify-start items-center space-x-2 text-sm text-dark font-bold">
              <img
                className="w-[14px] h-[14px]"
                src="./assets/author.svg"
                alt="calender"
              />
              <span>Diwash Lamichhane</span>
            </div>

            <div className="flex justify-start items-center space-x-2 text-sm text-dark font-semibold">
              <img
                className="w-[14px] h-[14px]"
                src="./assets/calender.svg"
                alt="calender"
              />
              <span>Aug 1, 2022</span>
            </div>
          </div>
        </div>

        {/* <!-- Blog Cards --> */}
        <div className="flex flex-col self-center mt-10 space-y-10 lg:w-4/5 xl:w-2/3 md:space-x-5">
          <img
            className="h-[250px] rounded-2xl  w-full lg:h-[300px] xl:h-[400px] object-cover"
            alt=""
          />

          <div className="space-y-5 w-full">
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos et
              eaque in tenetur odit repellendus illum eos reprehenderit quaerat
              sed nihil, quis possimus pariatur animi ab minima officia
              recusandae illo!
            </p>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos et
              eaque in tenetur odit repellendus illum eos reprehenderit quaerat
              sed nihil, quis possimus pariatur animi ab minima officia
              recusandae illo!
            </p>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos et
              eaque in tenetur odit repellendus illum eos reprehenderit quaerat
              sed nihil, quis possimus pariatur animi ab minima officia
              recusandae illo!
            </p>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos et
              eaque in tenetur odit repellendus illum eos reprehenderit quaerat
              sed nihil, quis possimus pariatur animi ab minima officia
              recusandae illo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;
