import React from "react";
import Container from "../../components/Container";

const Hero = (props) => {
  return (
    <>
      <div className="bg-bluegray-100">
        <Container>
          <div className="flex flex-row justify-between items-center px-4 py-10">
            <div className="xl:max-w-lg mr-4">
              <p className="font-light text-3xl leading-relaxed xl:text-6xl text-teal-900 xl:leading-relaxed">
                Hy, <br />
                Im Edi Koswara
              </p>

              <p className="text-light text-bluegray-400 leading-relaxed mt-2">
                - Web Developer
              </p>

              <p className="text-xs lg:text-base text-bluegray-500 leading-relaxed mt-4">
                I help our clients create brands, build digital products and
                services, innovate, find opportunities and validate ideas.
              </p>

              <button className="px-6 py-2 rounded-md bg-teal-900 font-semibold text-teal-100 mt-10">
                More About Me
              </button>
            </div>
            <div className="hidden md:block">
              <div>
                <img
                  className="rounded-2xl shadow-2xl inset-0 w-full h-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="Hero"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
