import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import * as motion from "motion/react-client";
const NavBar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9 }}
      className="w-[90%] scroll-smooth fixed z-50 mx-auto py-4 px-4 rounded-xl  bg-fifth text-white cursor-pointer flex items-center justify-between font-family-gilroy font-medium  text-lg mt-4"
    >
      <div className="">
        <img src="./logo.jpg" alt="" className="w-20 h-12 rounded-2xl" />
      </div>

      <ul className="hidden  md:flex gap-x-6  ">
        <li className="dark:hover:text-green-600">
          <a href="#home">About Us</a>
        </li>
        <motion.li
       
        
        whileHover={{
          initial:{opacity: 0, y: -20},
          animate:{ opacity: 100, y: 0 },
          transition: {
            type: ""
          
          
          }
        }}
        
        className="relative group">
          <div className="dark:hover:text-green-600 flex">
            Products
            <div className="transition-transform  delay-200 duration-400 ease-in-out group-hover:translate-y-1  group-hover:-rotate-180 group-hover:top-[6px] ">
              <KeyboardArrowDownIcon className=" " />
            </div>
          </div>
          <ul
            
           
            className="absolute invisible rounded-xl  group-hover:visible overflow-auto bg-[#2C4530]  top-10 transition-all  ease-out delay-300 duration-200"
          >
            {["AgriniriCart", "AgriniriMandi", "AgriniriKisan"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block px-4 py-2 hover:rounded-xl hover:bg-gray-100  dark:hover:text-green-600 transition delay-100 duration-200 hover:-translate-x-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.li>
        <li className="dark:hover:text-green-600">Agriniri Ventures</li>
        <li className="dark:hover:text-green-600">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </motion.nav>
  );
};

export default NavBar;
