import React from "react";
import Container from "../../components/Container";
import Link from "next/link";
import datas from "../../components/data/Navbar";

const Navbar = (props) => {
  return (
    <>
      <div className="bg-bluegray-50 border-b-2 border-bluegray-200">
        <Container>
          <div className="flex flex-row justify-between items-center py-4">
            <div>
              <Link href="#">
                <a className="py-3 px-4 text-teal-900 text-base">Edikoswara</a>
              </Link>
            </div>
            <div className="hidden md:block">
              {datas.map((data) => (
                <Link key={data.id} href={data.urlPath}>
                  <a className="text-xs text-medium text-emerald-700 py-3 px-4 hover:bg-emerald-900 hover:text-emerald-100 rounded-md">
                    {data.urlName}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
