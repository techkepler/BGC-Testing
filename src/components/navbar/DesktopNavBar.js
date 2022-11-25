import React from "react";
import { navData } from "../../data/navData.js";
import stateUser from "../../contexts/stateUser";
import { InfoSoftLogo } from "../../assets/export/Export.js";

const DesktopNavBar = ({ isScrolling }) => {
  const { whichPage, setWhichPage } = stateUser();

  return (
    <section className="hidden lg:block">
      <header
        className={`${isScrolling ? "top-0" : "top-11"} fixed w-full  z-50`}
      >
        <nav
          className={` ${
            isScrolling ? "h-[80px]" : "h-[90px]"
          }  bg-slate-50 flex items-center justify-around w-full gap-10 transition-all duration-500 ease-linear`}
        >
          <a href="/#">
            <img src={InfoSoftLogo} alt="Company Logo" className="w-32" />
          </a>

          <div className="flex items-center gap-9 xl:gap-12 2xl:gap-14">
            {navData.map((datas) => (
              <div key={datas.id}>
                <a
                  href={`#${datas.url}`}
                  className="text-slate-800 hover:text-blue-800 hover:border-b-2 pb-2 border-blue-600 "
                  onClick={() => setWhichPage(datas.name)}
                >
                  <span
                    className={`${whichPage === datas.name && "text-red-600"}`}
                  >
                    {datas.name}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </nav>
      </header>
    </section>
  );
};

export default DesktopNavBar;
