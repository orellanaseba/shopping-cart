import { Link } from "react-router-dom";

const Categories = () => {

  return (
    <main className="bg-slate flex flex-col items-center">
      <section className="flex flex-col items-center p-2 bg-white w-[80%] min-h-[500px] rounded-lg mt-4">
          <p className="text-2xl font-mediu">Categories</p>
        <div className="flex justify-around gap-5 w-[50%] mx-auto">
          <div 
          className="flex flex-col p-2 cursor-pointer justify-center items-center mt-2 min-h-[100px] min-w-[100px] max-w-[120px] rounded-lg hover:- transition-all hover:scale-105">
            <Link to="/products/category/man" className="h-[100%]">
              <img className="object-contain" src="/icons/man.png" alt="man image" />
            </Link>
            <p>Man</p>
          </div>
          <div 
          className="flex flex-col p-2 cursor-pointer justify-center items-center mt-2 min-h-[100px] min-w-[100px] max-w-[120px] rounded-lg hover:- transition-all hover:scale-105">
            <Link to="/products/category/woman" className="h-[100%]">
              <img className="h-[100%] object-cover" src="/icons/woman.png" alt="" />
            </Link>
            <p>Woman</p>
          </div>
          <div 
          className="flex flex-col p-2 cursor-pointer justify-center items-center mt-2 min-h-[100px] min-w-[100px] max-w-[120px] rounded-lg hover:- transition-all hover:scale-105">
            <Link to="/products/category/jewelery" className="h-[100%]">
              <img className="h-[100%] object-contain" src="/icons/jewelery.png" alt="" />
            </Link>
            <p>Jewelery</p>
          </div>
          <div 
          className="flex flex-col p-2 cursor-pointer justify-center items-center mt-2 min-h-[100px] min-w-[100px] max-w-[120px] rounded-lg hover:- transition-all hover:scale-105">
            <Link to="/products/category/electronics" className="h-[100%]">
              <img className="h-[100%] object-contain" src="/icons/usb.png" alt="" />
            </Link>
            <p>Electronics</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Categories;
