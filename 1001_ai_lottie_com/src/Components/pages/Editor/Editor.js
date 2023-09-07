// src/App.js
import React from 'react';
import LottieEditor from '../../shared/LottieEditor';
import animation from "../../../Json/stats.json"
function Editor() {
  const initialAnimationData = animation

  return (
    <>
      <header className="App-header">
        <h1>Lottie JSON Editor</h1>
        <LottieEditor animationData={initialAnimationData} />
      </header>
    </>
  );
}

export default Editor;
