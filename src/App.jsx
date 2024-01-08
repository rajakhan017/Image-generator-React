import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [imgURL, setImgURL] = useState("");
  const [loading, setLoading] = useState("");
  const [inputValue, setInputValue] = useState("");

  async function query(data) {
    setLoading("Loading...");
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
        data,
        {
          headers: {
            Authorization: "Bearer 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",
          },
          responseType: "blob",
        }
      );
      const imageURL = URL.createObjectURL(new Blob([response.data]));
      setImgURL(imageURL);
      setLoading("");
    } catch (error) {
      setLoading("");
      alert(
        "Error while fetching the data from API. Please retry after some time."
      );
      console.log(error);
    }
  }

  function generateImage() {
    if (!inputValue) {
      alert("Input field is Empty.");
      return;
    }
    query({ inputs: inputValue }).then(() => {
      // Handle any additional logic after the image is generated
    });
  }

  function downloadImage() {
    if (imgURL) {
      const link = document.createElement("a");
      link.href = imgURL;
      link.download = "generated_image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      generateImage();
    }
  }

  return (
    <>
      <div className="App">
        <h1 className="heading"> AI Image Generator</h1>
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="textArea"
          placeholder="Enter text..."
        ></textarea>
        <br />
        <button onClick={generateImage} className="generateButton">
          Generate
        </button>
        <button onClick={downloadImage} className="downloadButton">
          Download Image
        </button>
        <p>{loading}</p>
        {imgURL !== "" ? (
          <div className="imageContainer">
            <img src={imgURL} alt="img" />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
