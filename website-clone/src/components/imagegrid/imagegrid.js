import { useEffect, useState } from "react";
import "./imagegrid.css";

function Imagegrid() {
  const slides = [
    { id: 1, imageUrl: "https://picsum.photos/id/237/600/1900" },
    { id: 2, imageUrl: "https://picsum.photos/id/238/600/1900" },
    { id: 3, imageUrl: "https://picsum.photos/id/239/600/1900" },
  ];

  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleClick = (imagePath) => {
    setSelectedImage(imagePath);
    setShowOverlay(true);
  };

  return (
    <div class="grid">
      <button onClick={()=>{console.log(1)}} class="div1">
        <img src={slides[1].imageUrl} alt={`Slide ${slides[1].id}`} />
        <div class="overlay">
          <img src={slides[1].imageUrl} alt="Image" class="overlay-image" />
        </div>
      </button>
      <div class="div2"> </div>
      <div class="div3"> </div>
      <div class="div4"> </div>
      <div class="div5"> </div>
      <div class="div6"> </div>
      <div class="div7"> </div>
      <div class="div1"> </div>
      <div class="div9"> </div>
      <div class="div10"> </div>
      <div class="div11"> </div>
      <div class="div12"> </div>
      <div class="div13"> </div>
      <div class="div14"> </div>
    </div>
  );
}

export default Imagegrid;
