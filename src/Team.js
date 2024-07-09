import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Team.css'; // Import the CSS file

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };

  return (
<section id="Team">
  <div className="container mx-auto">
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="poppins-bold text-[24px]">Anggota Team Project</h1>
      <b className="poppins-regular text-[15px] mb-[20px]">Team Member</b>
      <Slider {...settings} className="w-full max-w-[800px]">
        <div className="card1 flex flex-col items-center text-center p-4">
          <img src="team1.jpeg" alt="Member 1" className="member-img" />
          <h3 className="poppins-bold text-[15px]">Team Member 1</h3>
          <p className="poppins-regular text-[15px]">Bagus Fachfirli Hulu</p>
          <p className="poppins-regular text-[15px]">Nim: 2257301025</p>
        </div>
        <div className="card1 flex flex-col items-center text-center p-4">
          <img src="team2.jpeg" alt="Member 2" className="member-img" />
          <h3 className="poppins-bold text-[15px]">Team Member 2</h3>
          <p className="poppins-regular text-[15px]">Rendi Adriyan Cornalius Simarta</p>
          <p className="poppins-regular text-[15px]">NIM: 2257301114</p>
        </div>
      </Slider>
    </div>
  </div>
</section>



  
    
  );
}

export default Team;
