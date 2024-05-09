import React, { useState } from 'react';

import styles from "./form.module.css"
import { upload } from '@testing-library/user-event/dist/upload';

import Tesseract from 'tesseract.js';




const ImageInputComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [extractedText, setExtractedText] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);
      setExtractedText('');
    } else {
      setSelectedImage(null);
      setExtractedText('');
    }
  };

  const handleExtractText = async () => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        // Use Tesseract.js to perform OCR on the selected image file
        const { data: { text } } = await Tesseract.recognize(
          reader.result,
          'eng', // language code (English in this case)
          { logger: info => console.log(info) } // logger to see the progress in the console
        );

        // Update the state with the extracted text
        setExtractedText(text);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  return (
    <div className={styles.container1}>
      
      <h2>Upload Resume</h2>

      <input type="file" accept="image/*" onChange={handleImageChange} />

      {selectedImage && (
        <div>
          <button onClick={handleExtractText}>Extract Text</button>
        </div>
      )}

      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}
    </div>
  );
};

export default ImageInputComponent;




