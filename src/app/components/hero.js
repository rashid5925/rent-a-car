import Image from "next/image";

export default function Hero() {
    return (
        <div className="grid grid-cols-5 mx-24 my-16">
            <div className="col-span-2 text-[#012641]">
                <h1 className="text-[64px] font-bold">Rent a Car</h1>
                <p className="text-[32px] font-medium">Get behind the wheel of your adventure with 
                our hassle-free rental service!</p>
                <button className="bg-[#60B3D1] text-[24px] text-white px-8 py-2 my-5 rounded-md hover:opacity-80">Book Now</button>
            </div>
            <div className="col-span-3 flex justify-end items-center">
                <Image src="/banner_img.png" alt="Car Image" width={500} height={500}></Image>
            </div>
        </div>
    );
};
