import React from 'react';

const Informasi2 = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Mari ROCKSCLASSIFY</h2>
            <p className="text-sm max-w-lg">
            Platform kami, ROCKSCLASSIFY, diciptakan untuk merevolusi proses identifikasi batuan, melayani berbagai kalangan mulai dari ahli geologi profesional hingga mahasiswa dan penggemar ilmu kebumian. Dengan antarmuka yang intuitif dan hasil yang cepat, ROCKSCLASSIFY memungkinkan pengguna untuk menganalisis sampel batuan mereka dengan efisien dan akurat. Temukan keajaiban ilmu kebumian dengan sentuhan jari, dan biarkan teknologi canggih kami membawa Anda pada eksplorasi yang lebih mendalam dan penuh wawasan.
            </p>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Ikuti Kami</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-500">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-500">Twitter</a></li>
              <li><a href="#" className="hover:text-blue-500">Instagram</a></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">Kontak</h2>
            <ul className="space-y-2">
              <li>Email: bagus22si@mahasiswa.pcr.ac.id<p>rendi22si@mahasiswa.pcr.ac.id</p></li>
              <li>Telepon: 0896-4920-9010</li>
              <li>Alamat: Jl.Tegal Sari Ujung</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ROCKSCLASSIFY. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Informasi2;