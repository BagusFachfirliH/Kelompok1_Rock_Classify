import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Tampilan2.css';

function Tampilan2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
   
    <div className="tampilan2-container">
      <section id="jenisbatuan">
        <div className="screens">
          <div className="container">
            <h1 className="poppins-bold text-3xl mb-4"><center>Jenis Batuan</center></h1>
            <Slider {...settings}>
              <div className="card">
                <h3 className="poppins-bold text-lg">COAL</h3>
                <img src="coal1.png" alt="Coal" className="rock-image" />
                <p className="poppins-regular text-base">
                  Batu bara adalah jenis batuan sedimen, dengan kandungan karbon sebagai mineral utama dan juga hidrogen, belerang serta oksigen dalam mineral sekundernya.
                </p>
              </div>
              <div className="card">
                <h3 className="poppins-bold text-lg">GRANITE</h3>
                <img src="granit1.png" alt="Granite" className="rock-image" />
                <p className="poppins-regular text-base">
                  Granit adalah batuan beku yang terdiri dari kuarsa, feldspar, mikas, amfibol, serta campuran mineral tambahan. Batuan ini memiliki banyak variasi warna dan tekstur karena mineral-mineral tersebut.
                </p>
              </div>
              <div className="card">
                <h3 className="poppins-bold text-lg">MARBLE</h3>
                <img src="marble1.png" alt="Marble" className="rock-image" />
                <p className="poppins-regular text-base">
                  Batu pualam, bertekstur granoblastik, yang disusun oleh sebagian besar mineral kalsit dan dolomit merupakan hasil proses metamorfose kontak atau regional dari jenis batugamping.
                </p>
              </div>
              <div className="card">
                <h3 className="poppins-bold text-lg">LIMESTONE</h3>
                <img src="limestone1.png" alt="Limestone" className="rock-image" />
                <p className="poppins-regular text-base">
                  Batu kapur adalah jenis batuan sedimen yang terutama terdiri dari mineral kalsit dan aragonit. Batu kapur biasanya terbentuk dari sisa-sisa organisme laut yang kaya kalsium karbonat.
                </p>
              </div>
              <div className="card">
                <h3 className="poppins-bold text-lg">SANDSTONE</h3>
                <img src="sandstone1.png" alt="Sandstone" className="rock-image" />
                <p className="poppins-regular text-base">
                  Batu pasir atau sandstone adalah batuan sedimen yang terutama terdiri dari mineral berukuran pasir atau butir-butir batuan yang dapat berasal dari pecahan batuan-batuan lainnya. Komposisi mineralnya berukuran sangat kecil, mirip dengan butiran pasir.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
   
  );
}

export default Tampilan2;
