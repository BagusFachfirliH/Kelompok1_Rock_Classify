import React, { useState } from 'react';
import axios from 'axios';
import './Upload.css';

function Upload() {
  const [predictedLabel, setPredictedLabel] = useState("");
  const [description, setDescription] = useState("");
  const [confidence, setConfidence] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [status, setStatus] = useState("");

  const CONFIDENCE_THRESHOLD = 40; // Define a confidence threshold

  const labelDescriptions = {
    0: {
      label: "Coal",
      description:
        "Coal / Batu bara adalah jenis batuan sedimen, dengan kandungan karbon sebagai mineral utama dan juga hidrogen",
    },
    1: {
      label: "Granite",
      description:
        "Funfact : Granit adalah batu yang sangat keras, tetapi seperti batu lainnya, granit dapat membusuk dan hancur. Karena kekerasannya yang besar maka sulit untuk dikerjakan dan begitu pula dengan batu bangunan yang mahal. Ini digunakan terutama sebagai batu dimensi untuk paving block, pembatas jalan, monumen, dan bangunan besar.",
    },
    2: {
      label: "Limestone",
      description:
        "Funfact : Batu kapur sangat tahan lama. Namun, ia menyerap air dan, karena merupakan batuan karbonat, ia sangat reaktif bila terkena asam atau bahkan air hujan yang sedikit asam, dan dapat mengalami kerusakan parah. Dampak paling umum dari pelapukan dan erosi adalah hilangnya detail yang presisi.",
    },
    3: {
      label: "Marble",
      description:
        "Funfact : Variasi warna dan urat yang ada pada marmer menambah sentuhan individualitas pada setiap bagiannya. Selain keindahannya, marmer juga terkenal dengan daya tahan dan ketahanannya terhadap pelapukan, menjadikannya pilihan ideal untuk monumen luar ruangan dan karya seni.",
    },
    4: {
      label: "Sandstone",
      description:
        "Funfact : Batu pasir mengobati luka dan patah tulang. Ini meningkatkan retensi air dan membantu pemulihan penglihatan degeneratif, kuku yang lemah dan rambut yang menipis. Batupasir pada dasarnya adalah batuan sedimen yang terdiri dari butiran pasir, yang kemudian disemen bersama oleh kuarsa (silika), kalsit, feldspar, atau tanah liat.",
    },
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
    setFileUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!uploadedFile) {
      setStatus("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadedFile);

    try {
      const response = await axios.post(
        "https://fcb5-34-139-186-100.ngrok-free.app/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = response.data;
      console.log("Response data:", data);  // Debugging log
      if (data.success) {
        const labelData = labelDescriptions[data.label];
        if (labelData) {
          if (data.confidence >= CONFIDENCE_THRESHOLD) {
            setPredictedLabel(labelData.label);
            setDescription(labelData.description);
            setConfidence(data.confidence);  // Set confidence value
            setStatus("File berhasil diproses!");
          } else {
            setStatus("Confidence terlalu rendah untuk menentukan jenis batu!");
            setPredictedLabel("");
            setDescription("");
            setConfidence("");
          }
        } else {
          setStatus("Label tidak dikenal!");
          setPredictedLabel("");
          setDescription("");
          setConfidence("");
        }
      } else {
        setStatus("File gagal diproses!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Terjadi kesalahan saat memproses file!");
    }
  };

  return (
    <section id='Upload'>
      <div id="about" className="bg-[#F7F8FA] min-h-screen flex items-center justify-center">
        <div className="container mx-auto p-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center text-[#262642]">
            <span className="poppins-bold text-3xl mb-4">Proses Data</span>
          </h1>
          
          <div className="mt-10 bg-white rounded-lg p-8 shadow-lg w-full max-w-4xl relative flex">
            <div className="upload-form w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-center mb-4">Upload Your Image</h2>
              <input type="file" onChange={handleFileChange} className="mb-4" />
              <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
              {status && <p className="text-center mt-4">{status}</p>}
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-start ml-8">
              {fileUrl && (
                <img
                  src={fileUrl}
                  alt="Uploaded"
                  className="max-w-full h-auto mb-4 mr-4"
                  style={{ maxHeight: "500px" }}
                />
              )}
              {predictedLabel && (
                <div className="bg-white p-1 rounded shadow-md w-full -ml-4">
                  <h2 className="text-2xl font-bold text-[#1E174C]">
                    {predictedLabel}
                  </h2>
                  <p className="text-lg text-gray-700">{description}</p>
                  {confidence && (
                    <p className="text-lg text-gray-700">Confidence: {confidence}%</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Upload;
