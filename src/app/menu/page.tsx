
import Image from "next/image";
import React from "react";

const Menu = () => {
  return (
    <div className="w-full h-[300px] flex justify-center items-center m-10 mb-96">
      <div className="w-[80%] h-full mb-60 mt-5">
        {/**top side text */}
        <div>
          <h2 className=" font-bold text-3xl text-col text-orange-950">
            Flat 20% OFF
          </h2>
          <span className="font-light text-orange-950">
            20% Discount On Entire Menu
          </span>
        </div>

        {/**products 1- 4 pictures */}
        <div className="flex justify-between mt-7">
          <div>
            <div className="w-[200px] h-[150px] flex justify-center items-center">
              <Image
                className="rounded-lg transition-transform duration-300 hover:scale-105"
                src="/images/th__1_-removebg-preview.png"
                width={250}
                height={300}
                alt="coffee pic1"
              ></Image>
            </div>
            <div className="flex justify-center space-x-4 mt-5">
              <span className="font-semibold inline-block text-orange-950">
                Cappuccino
              </span>
            </div>
            <div>
              <span className="ml-1 flex justify-center text-orange-950"><del className="text-red-600">Rs.600</del> &nbsp; Rs.480</span>
            </div>
            <div>
              <span className="ml21 mt-3 flex ">
                <button className=" bg-orange-950 text-orange-300 font-semibold hover:bg-orange-700 border-1 rounded-full h-8 px-9 m-5 w-59 flex justify-center items-center">
                  Add to Cart
                </button>
              </span>
            </div>
            
          </div>

          <div>
            <div className="w-[200px] h-[150px] flex justify-center items-center  ">
              <Image
                className="rounded-lg transition-transform duration-300 hover:scale-105"
                src="/images/th__2_-removebg-preview.png"
                width={200}
                height={150}
                alt="coffee pic2"
              ></Image>
            </div>

            <div className="flex justify-center i space-x-4 mt-5">
              <span className="font-semibold inline-block text-orange-950 ">
                Espresso
              </span>
            </div>
            <div>
              <span className="ml-1 flex justify-center text-orange-950 ">
                <del className="text-red-600">Rs.670</del> &nbsp; Rs.536
              </span>
          
                </div>

                <div>
              <span className="ml21 mt-3 flex ">
                <button className="  bg-orange-950 text-orange-300 font-semibold hover:bg-orange-700 border-1 rounded-full h-8 px-9 m-5 w-59 flex justify-center items-center">
                  Add to Cart
                </button>
              </span>
            </div>

          </div>

          <div>
            <div className="w-[200px] h-[150px] flex justify-center items-center ">
              <Image
              className="rounded-lg transition-transform duration-300 hover:scale-105"
                src="/images/th-removebg-preview.png"
                width={200}
                height={150}
                alt="coffee pic3"
              ></Image>
            </div>

            <div className="flex justify-center i space-x-4 mt-5">
              <span className="font-semibold inline-block text-orange-950">
                Latte
              </span>
            </div>
            <div>
              <span className="ml-1 flex justify-center  text-orange-950">
                <del className="text-red-600">Rs.615</del> &nbsp; Rs.492
              </span>
            </div>
            <div>
              <span className="ml21 mt-3 flex ">
                <button className="  bg-orange-950 text-orange-300 font-semibold hover:bg-orange-700  border-1 rounded-full h-8 px-9 m-5 w-59 flex justify-center items-center">
                  Add to Cart
                </button>
              </span>
            </div>

          </div>

          <div>
            <div className="w-[200px] h-[150px] flex justify-center items-center  ">
              <Image
              className="rounded-lg transition-transform duration-300 hover:scale-105"
                src="/images/OIP__1_-removebg-preview.png"
                width={200}
                height={150}
                alt="coffee pic4"
              ></Image>
            </div>

            <div className="flex justify-center i space-x-4 mt-5">
              <span className="font-semibold inline-block text-orange-950">
                Mocha
              </span>
            </div>
            <div>
              <span className="ml-1 flex justify-center text-orange-950 ">
                <del className="text-red-600">Rs.650</del> &nbsp; Rs.520
              </span>
            </div>
            <div>
              <span className="ml21 mt-3 flex ">
                <button className="  bg-orange-950 text-orange-300 font-semibold hover:bg-orange-700 border-1 rounded-full h-8 px-9 m-5 w-59 flex justify-center items-center">
                  Add to Cart
                </button>
              </span>
            </div>
          </div>
        </div>
        
{/**products 2- 4 pictures cold coffee */}
<div className="flex justify-between mt-11 mb-11">
          <div>
            <div className="w-[200px] h-[150px] flex justify-center items-center ">
              <Image
                className="rounded-lg transition-transform duration-300 hover:scale-105"
                src="/images/cold_cofffe-removebg-preview (1).png"
                width={150}
                height={100}
                alt="coffee pic1"
              ></Image>
            </div>
            <div className="flex justify-center space-x-4 mt-5">
              <span className="font-semibold inline-block text-orange-950">
                Iced Matcha Latte
              </span>
            </div>
            <div>
              <span className="ml-1 flex justify-center text-orange-950 ">
                <del className="text-red-600">Rs.650</del> &nbsp; Rs.599
              </span>
            </div>
            <div>
              <span className="ml21 mt-3 flex ">
                <button className="bg-orange-950 text-orange-300 font-semibold hover:bg-orange-700 border-1 rounded-full h-8 px-9 m-5 w-59 flex justify-center items-center">
                  Add to Cart
                </button>
              </span>
            </div>
          </div>

          <div>
            <div className="w-[200px] h-[150px] flex justify-center items-center  ">
              <Image
                className="rounded-lg transition-transform duration-300 hover:scale-105"
                src="/images/OIP_3-removebg-preview.png"
                width={100}
                height={150}
                alt="coffee pic2"
              ></Image>
            </div>

            <div className="flex justify-center i space-x-4 mt-5">
              <span className="font-semibold inline-block text-orange-950 ">
                Roasted Hazelnut{" "}
              </span>
            </div>
            <div>
              <span className="ml-1 flex justify-center text-orange-950 ">
                <del className="text-red-600">Rs.610</del> &nbsp; Rs.488
              </span>
            </div>
            <div>
              <span className="ml21 mt-3 flex ">
                <button className=" bg-orange-950 text-orange-300 font-semibold hover:bg-orange-700 border-1 rounded-full h-8 px-9 m-5 w-59 flex justify-center items-center">
                  Add to Cart
                </button>
              </span>
            </div>
          </div>

          <div>
            <div className="w-[200px] h-[150px] flex justify-center items-center ">
              <Image
                className="rounded-lg transition-transform duration-300 hover:scale-105"
                src="/images/oip2-removebg-preview (1).png"
                width={200}
                height={100}
                alt="coffee pic3"
              ></Image>
            </div>

            <div className="flex justify-center i space-x-4 mt-5">
              <span className="font-semibold inline-block text-orange-950">
                Iced Caramel Shakerato
              </span>
            </div>
            <div>
              <span className="ml-1 flex justify-center text-orange-950 ">
                <del className="text-red-600">Rs.650</del> &nbsp; Rs.520
              </span>
            </div>
            <div>
              <span className="ml21 mt-3 flex ">
                <button className="  bg-orange-950 text-orange-300 font-semibold hover:bg-orange-700 border-1 rounded-full h-8 px-9 m-5 w-59 flex justify-center items-center">
                  Add to Cart
                </button>
              </span>
            </div>
          </div>

          <div>
            <div className="w-[200px] h-[150px] flex justify-center items-center  ">
              <Image
                className="rounded-lg transition-transform duration-300 hover:scale-105"
                src="/images/oip4-removebg-preview (1).png"
                width={100}
                height={150}
                alt="coffee pic4"
              ></Image>
            </div>

            <div className="flex justify-center i space-x-4 mt-5">
              <span className="font-semibold inline-block text-orange-950">
                Iced Mocha
              </span>
            </div>
            <div>
              <span className="ml-1 flex justify-center text-orange-950 ">
                <del className="text-red-600">Rs.650</del> &nbsp; Rs.520
              </span>
            </div>
            <div>
              <span className="ml21 mt-3 flex ">
                <button className=" bg-orange-950 text-orange-300 font-semibold hover:bg-orange-700 border-1 rounded-full h-8 px-9 m-5 w-59 flex justify-center items-center">
                  Add to Cart
                </button>
              </span>
            </div>
          </div>
        </div>


       

      </div>

    </div>
  );
};

export default Menu;
