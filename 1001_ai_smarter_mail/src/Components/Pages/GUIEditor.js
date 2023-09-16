import React, { useState } from 'react';

import ControlComponentsMenu from '../Shared/Figma_clone/ControlComponentsMenu'
import Header from '../Shared/Figma_clone/Header'

import {useSelector} from 'react-redux'
const GUIEditor = () => {
  let state = useSelector(state=> state.GUIEditorReducer)


  const [rectangles, setRectangles] = useState([]);
  const [drawing, setDrawing] = useState(false);
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 });
  const [currentRect, setCurrentRect] = useState(null);

  const handleMouseDown = (e) => {
    if (!drawing && state.frame) {
      setDrawing(true);
      setStartPoint({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = (e) => {
    if (drawing) {
      const rect = {
        x: Math.min(startPoint.x, e.clientX),
        y: Math.min(startPoint.y, e.clientY),
        width: Math.abs(startPoint.x - e.clientX),
        height: Math.abs(startPoint.y - e.clientY),
      };
      setRectangles([...rectangles, rect]);
      setDrawing(false);
      setCurrentRect(null);
    }
  };

  const handleMouseMove = (e) => {
    if (drawing) {
      const rect = {
        x: Math.min(startPoint.x, e.clientX),
        y: Math.min(startPoint.y, e.clientY),
        width: Math.abs(startPoint.x - e.clientX),
        height: Math.abs(startPoint.y - e.clientY),
      };
      setCurrentRect(rect);
    }
  };

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
      <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} style={{ height: '100vh', width: '100vw' }}>
      {rectangles.map((rect, i) => (
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
    </div>
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
