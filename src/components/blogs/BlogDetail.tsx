function BlogDetail() {
  return (
    <section id="blog" class="mt-20">
      <div class="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Blog Info --> */}
        <div class="self-center text-center space-y-5 lg:w-4/5 xl:w-2/3">
          <h2 class="text-3xl font-bold">Education in Itahari</h2>
          <div class="flex justify-center items-center space-x-10">
            <div class="flex justify-start items-center space-x-2 text-sm text-dark font-bold">
              <img
                class="w-[14px] h-[14px]"
                src="./assets/author.svg"
                alt="calender"
              />
              <span>Diwash Lamichhane</span>
            </div>

            <div class="flex justify-start items-center space-x-2 text-sm text-dark font-semibold">
              <img
                class="w-[14px] h-[14px]"
                src="./assets/calender.svg"
                alt="calender"
              />
              <span>Aug 1, 2022</span>
            </div>
          </div>
        </div>

        {/* <!-- Blog Cards --> */}
        <div class="flex flex-col self-center mt-10 space-y-10 lg:w-4/5 xl:w-2/3 md:space-x-5">
          <img
            class="h-[250px] rounded-2xl  w-full lg:h-[300px] xl:h-[400px] object-cover"
            
            alt=""
          />

          <div class="space-y-5 w-full">
            <p class="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos et
              eaque in tenetur odit repellendus illum eos reprehenderit quaerat
              sed nihil, quis possimus pariatur animi ab minima officia
              recusandae illo!
            </p>
            <p class="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos et
              eaque in tenetur odit repellendus illum eos reprehenderit quaerat
              sed nihil, quis possimus pariatur animi ab minima officia
              recusandae illo!
            </p>
            <p class="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos et
              eaque in tenetur odit repellendus illum eos reprehenderit quaerat
              sed nihil, quis possimus pariatur animi ab minima officia
              recusandae illo!
            </p>
            <p class="text-lg">
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
