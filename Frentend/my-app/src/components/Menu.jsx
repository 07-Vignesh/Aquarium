import React from "react";
import { Link } from "react-router-dom";
import {House,PawPrint,Bird,Fish,Bone,ShoppingCart,SquareArrowOutUpRight ,User} from "lucide-react"

const Menubar = () => {
  return (
    <nav className=" shadow-md px-12 py-6 w-32 h-screen ">
      {/* Logo */}
     
      {/* Vertical Menu */}
      <div className=" p-5 mt-6 flex flex-col space-y-12 ">
           <div className="tooltip">
  <div className="tooltip-content mx-3 bg-transparent">
    <div className="animate-bounce text-orange-400 -rotate-10  text-xl font-black">Home!</div>
  </div>
 <Link to="/" className=" hover:text-blue-600">
        <House size={30} />
        </Link>
</div>
        <div className="tooltip">
  <div className="tooltip-content mx-3 bg-transparent">
    <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Pets!</div>
  </div>
 <Link to="/pets" className=" hover:text-blue-600">
<PawPrint size={30} />        </Link>
</div>
          <div className="tooltip">
  <div className="tooltip-content mx-3 bg-transparent">
    <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Birds!</div>
  </div>
 <Link to="/birds" className=" hover:text-blue-600 ">
<Bird size={30} />      </Link>
</div>
            <div className="tooltip">
  <div className="tooltip-content mx-3 bg-transparent">
    <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Fishes!</div>
  </div>
 <Link to="/fishes" className=" hover:text-blue-600">
<Fish   size={30}/>        </Link>
</div>
           <div className="tooltip">
  <div className="tooltip-content mx-3 bg-transparent">
    <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Foods!</div>
  </div>
 <Link to="/foods" className=" hover:text-blue-600">
<Bone size={30} />        </Link>
</div>
           <div className="tooltip">
  <div className="tooltip-content mx-3 bg-transparent">
    <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Products!</div>
  </div>
 <Link to="/products" className=" hover:text-blue-600">
          <ShoppingCart size={30} />
        </Link>
</div>
          <div className="tooltip">
  <div className="tooltip-content mx-3 bg-transparent">
    <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">About!</div>
  </div>
 <Link to="/about" className=" hover:text-blue-600">
<SquareArrowOutUpRight size={30} />        </Link>
</div>
           <div className="tooltip">
  <div className="tooltip-content mx-3  bg-transparent">
    <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Contact!</div>
  </div>
 <Link to="/contact" className=" hover:text-blue-600">
          <User size={30} />
        </Link>
</div>
      </div>
    </nav>
  );
};

export default Menubar;
