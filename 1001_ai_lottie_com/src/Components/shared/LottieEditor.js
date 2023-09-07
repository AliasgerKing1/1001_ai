// src/LottieEditor.js
import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import ReactJson from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/en';
import { ChromePicker } from 'react-color';

const LottieEditor = ({ animationData }) => {
  const [animation, setAnimation] = useState(null);
  const [json, setJson] = useState(animationData);
  const [selectedElement, setSelectedElement] = useState(null);
  const [colorPickerVisible, setColorPickerVisible] = useState(true);
  const [selectedColor, setSelectedColor] = useState('#ffffff');
  
  const colorPickerRef = useRef(null);

  useEffect(() => {
    if (animation) {
      animation.destroy();
    }
    setAnimation(Lottie.loadAnimation({
      container: document.getElementById('lottie-container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: json,
    }));
  }, [json]);

  const handleJsonChange = (newJson) => {
    setJson(newJson);
  };

  const handleColorChange = (color) => {
    console.log(color.target.value)
    if (selectedElement) {
      selectedElement.props.stroke = color.target.value;
      setJson({ ...json });
    }
    // setColorPickerVisible(false);
  };

  const handleColorPickerClick = (event) => {
    if (colorPickerRef.current && !colorPickerRef.current.contains(event.target)) {
      // setColorPickerVisible(false);
    }
  };

  const handleColorPickerToggle = (element) => {
    setSelectedElement(element);
    setSelectedColor(element.props.stroke || '#ffffff');
    setColorPickerVisible(!colorPickerVisible);
  };

  return (
    <div onClick={handleColorPickerClick}>
      <div id="lottie-container" />
      {/* <ReactJson
        src={json}
        onEdit={handleJsonChange}
        onDelete={handleJsonChange}
        onAdd={handleJsonChange}
        locale={locale}
      /> */}
      {colorPickerVisible && (
          <input type='color' onChange={(e)=>handleColorChange(e)} />
      )}
    </div>
  );
};

export default LottieEditor;
