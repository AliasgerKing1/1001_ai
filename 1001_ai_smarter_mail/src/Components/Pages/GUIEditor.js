import React, { useEffect, useState } from 'react';

import ControlComponentsMenu from '../Shared/Figma_clone/ControlComponentsMenu'
import Header from '../Shared/Figma_clone/Header'

import {useSelector, useDispatch} from 'react-redux'
import { Frames, step_1 } from '../../Redux/GUIEditorReducer';

const GUIEditor = () => {
  let dispatch = useDispatch();
  let state = useSelector(state=> state.GUIEditorReducer)

  const [rectangles, setRectangles] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [currentRect, setCurrentRect] = useState(null);

  const [frames, setFrames] = useState([]);
  const [drawing2, setDrawing2] = useState(false);
  const [startPoint2, setStartPoint2] = useState({ x: 0, y: 0 });
  const [currentFrame, setCurrentFrame] = useState(null);

  const [shapes, setShapes] = useState([]);
  const [drawing3, setDrawing3] = useState(false);
  const [startPoint3, setStartPoint3] = useState({ x: 0, y: 0 });
  const [currentEllipse, setCurrentEllipse] = useState(null);

  const handleMouseDown = (e) => {
    if (!drawing &&  state.selectedShape === 'rectangle') {
      setDrawing(true);
      setStartPoint({ x: e.pageX, y: e.pageY });
    }
  };

  const handleMouseUp = (e) => {
    if (drawing) {
      const rect = {
        id: rectangles.length,
        name: `Rectangle ${rectangles.length + 1}`,
        x: Math.min(startPoint.x, e.pageX),
        y: Math.min(startPoint.y, e.pageY),
        width: Math.abs(startPoint.x - e.pageX),
        height: Math.abs(startPoint.y - e.pageY),
      };
      setRectangles([...rectangles, rect]);
      // dispatch(Frames([...state.shapes, rect]))
      setDrawing(false);
      setCurrentRect(null);
    }
  };

  const handleMouseMove = (e) => {
    if (drawing) {
      const rect = {
        x: Math.min(startPoint.x, e.pageX),
        y: Math.min(startPoint.y, e.pageY),
        width: Math.abs(startPoint.x - e.pageX),
        height: Math.abs(startPoint.y - e.pageY),
      };
      setCurrentRect(rect);
    }
  };


  const handleMouseDown2 = (e) => {
    if (!drawing2 && state.frame) {
      setDrawing2(true);
      setStartPoint2({ x: e.pageX, y: e.pageY });
    }
  };

  const handleMouseUp2 = (e) => {
    if (drawing2) {
      const fr = {
        id: frames.length,
        name: `Frame ${frames.length + 1}`,
        x: Math.min(startPoint2.x, e.pageX),
        y: Math.min(startPoint2.y, e.pageY),
        width: Math.abs(startPoint2.x - e.pageX),
        height: Math.abs(startPoint2.y - e.pageY),
      };
      setFrames([...frames, fr]);
      dispatch(Frames([...state.allFrames, fr]))
      setDrawing2(false);
      setCurrentFrame(null);
    }
  };

  const handleMouseMove2 = (e) => {
    if (drawing2) {
      const rect = {
        x: Math.min(startPoint2.x, e.pageX),
        y: Math.min(startPoint2.y, e.pageY),
        width: Math.abs(startPoint2.x - e.pageX),
        height: Math.abs(startPoint2.y - e.pageY),
      };
      setCurrentFrame(rect);
    }
  };
  
  const handleMouseDown3 = (e) => {
    if (!drawing2 && state.selectedShape === 'circle') {
    setDrawing3(true);
    setStartPoint3({ x: e.pageX, y: e.pageY });
    }
  };

  const handleMouseUp3 = (e) => {
    if (drawing3) {
      const ellipse = {
        id: shapes.length,
        type: 'Ellipse',
        name: `Ellipse ${shapes.length + 1}`,
        x: Math.min(startPoint3.x, e.pageX),
        y: Math.min(startPoint3.y, e.pageY),
        width: Math.abs(startPoint3.x - e.pageX),
        height: Math.abs(startPoint3.y - e.pageY),
      };
      setShapes([...shapes, ellipse]);
      setDrawing3(false);
      setCurrentEllipse(null);
    }
  };

  const handleMouseMove3 = (e) => {
    if (drawing3) {
      const ellipse = {
        x: Math.min(startPoint3.x, e.pageX),
        y: Math.min(startPoint3.y, e.pageY),
        width: Math.abs(startPoint3.x - e.pageX),
        height: Math.abs(startPoint3.y - e.pageY),
      };
      setCurrentEllipse(ellipse);
    }
  };

window.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      dispatch(step_1(true))
    }
  });

  if(state.move === true) {
    let spacePressed = false;
    let mouseDown = false;
    let startX, startY, startScrollX, startScrollY;
    
    window.addEventListener('keydown', (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        spacePressed = true;
      }
    });
    
    window.addEventListener('keyup', (event) => {
      if (event.code === 'Space') {
        spacePressed = false;
      }
    });
    
    window.addEventListener('mousedown', (event) => {
      if (spacePressed) {
        event.preventDefault();
        mouseDown = true;
        startX = event.clientX;
        startY = event.clientY;
        startScrollX = window.scrollX;
        startScrollY = window.scrollY;
      }
    });
    
    window.addEventListener('mouseup', () => {
      mouseDown = false;
    });
    
    window.addEventListener('mousemove', (event) => {
      if (mouseDown && spacePressed) {
        event.preventDefault();
        const dx = startX - event.clientX;
        const dy = startY - event.clientY;
        window.scrollTo(startScrollX + dx, startScrollY + dy);
      }
    });
  }
  
  return (
    <>
        {/* Layout wrapper */}
<div className="layout-wrapper layout-content-navbar" style={{cursor : state?.move ? 'pointer' : 'default'}}>
  <div className="layout-container">
    {/* Menu */}
<ControlComponentsMenu />
    {/* / Menu */}
    {/* Layout container */}
    <div className="layout-page">
      {/* Navbar */}
<Header />
      {/* / Navbar */}
      {/* Content wrapper */}
      {state?.frame ?  (      <div onMouseDown={handleMouseDown2} onMouseUp={handleMouseUp2} onMouseMove={handleMouseMove2} style={{ height: '1000vh', width: '1000vw', overflow : 'auto'}}>
      {frames.map((fr, i) => (
        <>
         <p style={{position: 'absolute', top: fr.y - 20, left: fr.x}}>{fr?.name}</p>
        <div
          key={i}
          style={{
            position: 'absolute',
            top: fr.y,
            left: fr.x,
            width: fr.width,
            height: fr.height,
            backgroundColor: '#ffffff',
          }}
        />
      </>
      ))}
      {currentFrame && (
        <div
          style={{
            position: 'absolute',
            top: currentFrame.y,
            left: currentFrame.x,
            width: currentFrame.width,
            height: currentFrame.height,
            border: '1px solid #00cfe8',
          }}
        />
      )}
    </div>) : null}

      {state?.selectedShape === 'rectangle' ?  (      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} style={{ height: '1000vh', width: '1000vw', overflow : 'auto'}}>
      {rectangles.map((rect, i) => (
        <>
         <p style={{position: 'absolute', top: rect.y - 20, left: rect.x}}>{rect?.name}</p>
        <div
          key={i}
          style={{
            position: 'absolute',
            top: rect.y,
            left: rect.x,
            width: rect.width,
            height: rect.height,
            backgroundColor: '#ffffff',
          }}
        />
      </>
      ))}
      {currentRect && (
        <div
          style={{
            position: 'absolute',
            top: currentRect.y,
            left: currentRect.x,
            width: currentRect.width,
            height: currentRect.height,
            border: '1px solid #00cfe8',
          }}
        />
      )}
    </div>) : null}
    {state.selectedShape === 'circle' &&     <div
      onMouseDown={handleMouseDown3}
      onMouseUp={handleMouseUp3}
      onMouseMove={handleMouseMove3}
      style={{ height: '1000vh', width: '1000vw', overflow: 'auto' }}
    >
      {shapes.map((shape, i) => (
        <div key={i}>
          <p style={{ position: 'absolute', top: shape.y - 20, left: shape.x }}>{shape.name}</p>
          {shape.type === 'Ellipse' && (
            <svg
              style={{
                position: 'absolute',
                top: shape.y,
                left: shape.x,
                width: shape.width,
                height: shape.height,
              }}
            >
              <ellipse
                cx={shape.width / 2}
                cy={shape.height / 2}
                rx={shape.width / 2}
                ry={shape.height / 2}
                fill="#ffffff"
                 />
            </svg>
          )}
        </div>
      ))}
      {currentEllipse && (
        <svg
          style={{
            position: 'absolute',
            top: currentEllipse.y,
            left: currentEllipse.x,
            width: currentEllipse.width,
            height: currentEllipse.height,
          }}
        >
          <ellipse
            cx={currentEllipse.width / 2}
            cy={currentEllipse.height / 2}
            rx={currentEllipse.width / 2}
            ry={currentEllipse.height / 2}
            fill="transparent"
            stroke="#00cfe8"
            strokeWidth="2"
          />
        </svg>
      )}
    </div>}
      {/* Content wrapper */}
    </div>
    {/* / Layout page */}
  </div>
  {/* Overlay */}
  <div className="layout-overlay layout-menu-toggle" />
  {/* Drag Target Area To SlideIn Menu On Small Screens */}
  <div className="drag-target" />
</div>
{/* / Layout wrapper */}
    </>
  )
}

export default GUIEditor








// import React, { useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// const GUIEditor = () => {
//     const namesData = [
//         { id: 1, name: 'John', imageUrl: '/assets/img/pages/app-academy-tutor-1.png' },
//         { id: 2, name: 'Jane', imageUrl: '/assets/img/pages/app-academy-tutor-2.png' },
//         { id: 3, name: 'aliasger', imageUrl: '/assets/img/pages/app-academy-tutor-3.png' },
//         { id: 4, name: 'Barood', imageUrl: '/assets/img/pages/app-academy-tutor-4.png' },
//         // Add more data here
//       ];
      	
// const [storedItems, setStoredItems] = useState(namesData)
// function handleOnDragEnd(result) {
//     const items = Array.from(storedItems);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);
//     setStoredItems(items);
// }
//   return (
//     <>

//       <DragDropContext
//         onDragEnd={handleOnDragEnd}
//         onDragStart={() => { }}
//       >
//         <Droppable droppableId="droppable-1">
//           {(provided) => (
//             <div
//               className='flex-center'
//               ref={provided.innerRef}
//               {...provided.droppableProps}
//             >
//               {storedItems.map((item, index) => {
//                return (
//                  <Draggable key={item?.id} draggableId={item?.id.toString()} index={index}>
//                    {(provided) => (
//                      <div
//                        className='items'
//                        ref={provided.innerRef}
//                        {...provided.draggableProps}
//                        {...provided.dragHandleProps}
//                      >
//                        <img src={item.imageUrl
//                        } alt="img" />
//                        <p>{item.name}</p>
//                      </div>
//                    )}
//                  </Draggable>
//                )
 
//              })}
 
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
 
//       </DragDropContext>
//     </>
//   )
// }

// export default GUIEditor
