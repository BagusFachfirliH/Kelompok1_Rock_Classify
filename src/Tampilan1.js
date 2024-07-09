import React from "react";
import { motion } from 'framer-motion';
import './Tampilan1.css';

export default function Tampilan1() {
    function Judul() {
        return (
            <section id="Beranda">

<div class="flex flex-col justify-center pl-100 animate-slide-in">
<div className="flex flex-col justify-center pl-[120px]">
    <div className="poppins-bold text-[40px] animate-fade-in">
        Klasifikasi prediksi<br />
        Jenis Batuan. <br />
    </div>
    <p className="poppins-regular text-xs text-[#969696] mt-3 animate-fade-in">
        Selamat datang di website ROCKSCLASSIFY<br />dimana website ini digunakan<br /> untuk mengklasifikasi prediksi lima jenis batuan <br />yaitu (Coal, Granite, Marble, Limestone, dan Sandstone).
    </p>
    <div className="flex mt-7">
        <a href="#tentangkami" class="text-white hover:bg-black bg-[#CAA892] focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            <span>Info Selengkapnya</span>
        </a>
    </div>
</div></div>
            </section>
        );
    }

    function Gambar() {
        return (
            <div className="md:w-1/2 mt-10 md:mt-0 mr-10 ml-200">
                <motion.img 
                    src="group 63.png" 
                    alt="Your Alt Text" 
                    style={{ width: '80%', height: 'auto' }}
                    initial={{ x: -120, opacity: 0 }}
                    animate={{ x: 100, opacity: 1 }}
                    transition={{ duration: 2 }}  // Adjusted duration to slow down the animation
                />
            </div>
        );
    }
    

  
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '50px 20px', background: '#F7F8FA',width:'100%',height:'530px' }}>
            <Judul />
            <Gambar />
      
        </div>
    );



    
}
