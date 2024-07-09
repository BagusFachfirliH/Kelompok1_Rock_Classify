import React, { useEffect } from 'react';
import './Tentangkami.css';
import Image1 from './coal12.png';
import Image2 from './image4.png';

const Tentangkami = () => {
  useEffect(() => {
    let timer;
    
    const handleScroll = () => {
      const text = document.querySelector('.tentangkami-text');
      const images = document.querySelectorAll('.tentangkami-image');
      const scrollPosition = window.scrollY;
      
      text.style.transform = `translateY(${scrollPosition * 0.0}px)`;
      text.classList.add('floating-text');
      
      images.forEach(image => {
        image.style.transform = `translatex(${scrollPosition * 0.0}px)`;
        image.classList.add('floating-image');
      });

      clearTimeout(timer);
      timer = setTimeout(() => {
        text.classList.remove('floating-text');
        images.forEach(image => image.classList.remove('floating-image'));
      }, 500); // Adjust the delay as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <section id='tentangkami'>
    <div className="tentangkami-container ">
      <div className="tentangkami-content">
        <div className="tentangkami-text">
          <h1 className="tentangkami-title poppins-bold text-[40px]">Tentang Kami</h1>
          <p className="tentangkami-subtitle-poppins-SemiBold text-[35px]">
            ROCKSCLASSIFY Memberikan<br /> Kesempatan Terbaik Bagi Anda<br /> Untuk Memprediksi Jenis Batuan.
          </p>
          <p className="tentangkami-description-poppins-regular text-[15px]">
            Rocksclassify adalah aplikasi website yang digunakan untuk memprediksi 5<br /> jenis batuan Coal, Granite, Marble, Limestone, dan Sandstone. Didirikan<br /> pada tahun 2024, Rocksclassify berkomitmen untuk memberikan<br /> pemahaman yang luas tentang berbagai jenis batuan melalui teknologi<br /> prediksi canggih. Aplikasi ini dirancang untuk membantu pengguna<br /> meningkatkan pengetahuan mereka tentang karakteristik dan klasifikasi<br /> batuan, yang sangat penting untuk berbagai aplikasi ilmiah dan industri.<br /> Dengan Rocksclassify, Anda dapat memperkuat keterampilan Anda di<br /> bidang geologi untuk masa depan yang cemerlang.
          </p>
        </div>
        <div className="tentangkami-images">
          <img src={Image1} alt="Rock 1" className="tentangkami-image top-image" />
          <img src={Image2} alt="Rock 2" className="tentangkami-image bottom-image" />
        </div>
      </div>
    </div></section>
  );
};

export default Tentangkami;
