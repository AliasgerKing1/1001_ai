
/* eslint-disable */
import React, { useEffect, useState } from 'react';
import ControlComponentsMenu from '../Shared/Figma_clone/ControlComponentsMenu'
import Header from '../Shared/Figma_clone/Header'
import {useSelector, useDispatch} from 'react-redux'
import { deviceList } from '../../Json/Design_system';
import CreateComponents from '../Shared/Figma_clone/CreateComponents';
import { Frames, step_1 } from '../../Redux/GUIEditorReducer';

import Switch from '../Shared/Small_Components/Switch'

// import { CompactPicker } from 'react-color'

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

  const [spacePressed, setSpacePressed] = useState(false); // Track spacebar state


  const [currentFrameCategory, setCurrentFrameCategory] = useState(0);

  const [textEdit, setTextEdit] = useState(false)
  const [textEditValue, setTextEditValue] = useState("Text value")

  const [numberEdit, setNumberEdit] = useState(false)
  const [numberEditValue, setNumberEditValue] = useState(0)

  const [variables, setVariables] = useState([])

  let [selectAll, setSelectAll] = useState(true)
  let [selectFill, setSelectFill] = useState({
    frame : true,
    shape : true,
    text : true
  })

  
  const handleMouseDown = (e) => {
    if (!drawing &&  state.selectedShape === 'rectangle'  && !spacePressed) {
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
      setFrames([...frames, rect]);
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



  // Calculate the frame size based on the dimensions of frames in the array
  const calculateFrameSize = () => {
    if (frames.length === 0) {
      // Set an initial size if there are no frames
      return { width: 100, height: 100 };
    }

    // Find the maximum width and height among all frames
    const maxWidth = Math.max(...frames.map((fr) => fr.width));
    const maxHeight = Math.max(...frames.map((fr) => fr.height));

    return { width: maxWidth, height: maxHeight };
  };

  const [frameSize, setFrameSize] = useState(calculateFrameSize());

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY < 0) {
        // Scroll up to make frames smaller
        setFrameSize((prevSize) => ({
          width: prevSize.width - 10, // Adjust the decrement as needed
          height: prevSize.height - 10, // Adjust the decrement as needed
        }));
      } else {
        // Scroll down to make frames larger
        setFrameSize((prevSize) => ({
          width: prevSize.width + 10, // Adjust the increment as needed
          height: prevSize.height + 10, // Adjust the increment as needed
        }));
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleMouseDown2 = (e) => {
    if (!drawing2 && state.frame && !spacePressed) {
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
      setRectangles([...rectangles, fr]);
      dispatch(Frames([...state.allFrames, fr]));
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
    if (!drawing2 && state.selectedShape === 'circle'  && !spacePressed) {
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

  const handleSpacebarPress = (event) => {
    if (event.code === 'Space') {
      event.preventDefault();
      setSpacePressed(true);
      dispatch(step_1(true))
    }
  };
  
  const handleSpacebarRelease = (event) => {
    if (event.code === 'Space') {
      setSpacePressed(false);
      dispatch(step_1(false))
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
  
window.addEventListener('keydown', handleSpacebarPress);
window.addEventListener('keyup', handleSpacebarRelease);

let createFixedFrame = (child) => {
  let length = frames.length + 1;
  // Calculate the center pixel
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  let splitedChild = child.size.split("x")
  let width = splitedChild[0].trim()
  let height = splitedChild[1].trim()
  
  const fr = {
    id: length,
    name: `Frame ${length}`,
    x: Math.min(centerX),
    y: Math.min(centerY),
    width: Math.abs(width),
    height: Math.abs(height),
  };
  setFrames([...frames, fr]);
}

const [number, setNumber] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    
    // Check if the input is a number and if it's greater than 100
    if (!isNaN(inputValue) && parseInt(inputValue) <= 100) {
      setNumber(inputValue);
    }
  };
  return (
    <>
        {/* Layout wrapper */}
<div className="layout-wrapper layout-content-navbar" style={{cursor : state?.move ? 'pointer' : 'default'}}>
{/* background : '#000' */}
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
      {state?.frame && <div onMouseDown={handleMouseDown2} onMouseUp={handleMouseUp2} onMouseMove={handleMouseMove2} style={{ height: '1000vh', width: '1000vw', overflow : 'auto'}}>
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
    </div>}

      {state?.selectedShape === 'rectangle' &&  <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} style={{ height: '1000vh', width: '1000vw', overflow : 'auto'}}>
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
    </div>}
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
    <div className='row mt-5'>
    <div className="col-xl-4 col-md-6 order-2 order-lg-1 mt-5">
    <div className="nav-align-top nav-tabs-shadow mb-4" style={{ position: 'fixed', right: '10px', overflow : 'auto', maxHeight : '550px', width : '300px' }}>
  <ul className="nav nav-tabs" role="tablist">
    <li className="nav-item" role="presentation">
      <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-top-home" aria-controls="navs-top-home" aria-selected="true">Design</button>
    </li>
    <li className="nav-item" role="presentation">
      <button type="button" className="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-top-profile" aria-controls="navs-top-profile" aria-selected="false" tabIndex={-1}>Prototype</button>
    </li>

  </ul>
  <div className="tab-content">
    <div className="tab-pane fade active show" id="navs-top-home" role="tabpanel">
    {/* <CompactPicker /> */}
    <div className='row'>
      <div className='col-md-10'>
    <toolcool-color-picker color="#7367f0"></toolcool-color-picker>
      </div>
      <div className='col-md-2'>
      <i className="ti ti-eye rounded-circle ti-md" />
      </div>
    </div>
    <div className="divider">
  <div className="divider-text">Background Colour</div>
</div>
    <div className='row'>
      <div className='col-md-10'>
      <p>
        Local variables
      </p>
      </div>
      <div className='col-md-2'>
      <i className="ti ti-adjustments-alt rounded-circle ti-md cursor-pointer" data-bs-toggle="modal" data-bs-target="#localVarModal" />
      </div>
    </div>
    </div>
    <div className="tab-pane fade" id="navs-top-profile" role="tabpanel">
      <p>
        Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice cream. Gummies
        halvah
        tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream cheesecake fruitcake.
      </p>
      <p className="mb-0">
        Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah cotton candy
        liquorice caramels.
      </p>
    </div>
  </div>
</div>
</div>

    </div>
    <div className='row mt-5'>
    <div className="col-xl-4 col-md-6 order-2 order-lg-1 mt-5">
  <div className={`card ${state?.frame ? "" : "d-none"}`} style={{ position: 'fixed', right: '10px', width: '350px', overflow : 'auto', maxHeight : '550px' }}>
    <div className="card-header d-flex justify-content-between">
      <div className="card-title mb-0">
        <h5 className="mb-0">Frame</h5>
        <small className="text-muted">{deviceList?.length} Category</small>
      </div>
      {/* <div className="dropdown">
        <button className="btn p-0" type="button" id="sourceVisits" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="ti ti-dots-vertical ti-sm text-muted" />
        </button>
        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sourceVisits">
        <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
        <a className="dropdown-item" href="javascript:void(0);">Download</a>
          <a className="dropdown-item" href="javascript:void(0);">View All</a>
        </div>
      </div> */}
    </div>
    <div className="card-body">
      <ul className="menu-inner py-1 mb-0" style={{display : 'block'}}>
        {deviceList?.map((category, index) => (
          <>
                <li className={`menu-item ${currentFrameCategory === category?.id ? "open" : ""}`} key={index} onClick={()=>setCurrentFrameCategory(currentFrameCategory === category?.id ? 0 :category?.id)}>
                <a className="menu-link text-dark cursor-pointer">
                  <div data-i18n={category?.cat_name} className='fw-bold fs-1'>{category?.cat_name}</div>
                  {currentFrameCategory === category?.id ? (<i className='ti ti-chevron-down ps-2 fs-1'></i>) : (<i className='ti ti-chevron-right ps-2 fs-1'></i>)}
                </a>
                <ul className="menu-sub">
                  {category?.children?.map((child, index) =>  {
                    return (
                                      <li className="menu-item" key={index}>
                                      <a className="menu-link pt-2 text-dark cursor-pointer" onClick={()=>createFixedFrame(child)}>
                                        <i className="menu-icon tf-icons ti ti-point" />
                                        <div data-i18n={child?.name} className='fs-1'>{child?.name}</div>
                                        <div className='text-secondary ps-5 fs-tiny'>{child?.size}</div>
                                      </a>
                                    </li>
                  )})}
                </ul>
              </li>
            <div className="divider">
  <div className="divider-text"> {category?.cat_name}</div>
</div>

              </>
        ))}
        {/* <li className="mb-3 pb-1">
          <div className="d-flex align-items-start">
            <div className="badge bg-label-secondary p-2 me-3 rounded"><i className="ti ti-shadow ti-sm" /></div>
            <div className="d-flex justify-content-between w-100 flex-wrap gap-2">
              <div className="me-2">
                <h6 className="mb-0">Direct Source</h6>
                <small className="text-muted">Direct link click</small>
              </div>
              <div className="d-flex align-items-center">
                <p className="mb-0">1.2k</p>
                <div className="ms-3 badge bg-label-success">+4.2%</div>
              </div>
            </div>
          </div>
        </li> */}

      </ul>
    </div>
  </div>
</div>

    </div>
    
  </div>
  {/* Overlay */}
  <div className="layout-overlay layout-menu-toggle" />
  {/* Drag Target Area To SlideIn Menu On Small Screens */}
  <div className="drag-target" />
</div>

<div className="modal fade" id="localVarModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel1">Local Variables</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
{/* Basic Bootstrap Table */}
{variables?.length !== 0 && (
  <div className="card" style={{overflowY : 'auto', maxHeight : '415px'}}>
  <div className="table-responsive text-nowrap">
    <table className="table">
    <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          <th className='cursor-pointer'><i className="ti ti-plus fw-600" /></th>
        </tr>
      </thead>
      <tbody className="table-border-bottom-0">
        {variables?.map((vars, index) => {
          return (
            <>
            {vars === "colour" && (
                          <tr key={index} onClick={()=>{
                            setTextEdit(false)
                            setNumberEdit(false)
                          }}>
                          <td className='cursor-default'><i className="ti ti-palette ti-md text-danger me-3" /> <span className="fw-medium">Color</span></td>
                          <td className='cursor-default'><span className='fl pe-2'><toolcool-color-picker color="#7367f0"></toolcool-color-picker></span> #7367f0
                </td>
                          <td>
                          <i className="ti ti-adjustments-alt rounded-circle ti-md cursor-pointer" data-bs-toggle="modal" data-bs-target="#editColorVarModal"/>
                          </td>
                        </tr>
            )}
             {vars === "text" && (
                    <tr>
          <td className='cursor-default' onClick={()=>{
            setTextEdit(false)
            setNumberEdit(false)
          }}><i className="ti ti-letter-t ti-sm text-warning me-3" /> <span className="fw-medium">Text</span></td>
          <td className='pt-3'>
            {textEdit === false ? (<p className='cursor-default' onClick={()=>setTextEdit(textEdit === false ? true : false)}>{textEditValue}</p>) : (  

                <input type="text" className="form-control form-control-sm" id="defaultFormControlInput" placeholder="Text value" aria-describedby="defaultFormControlHelp"onChange={(e)=>setTextEditValue(e.target.value)} 
                 value={textEditValue}/>        
                 )}
</td>
          <td onClick={()=>{
            setTextEdit(false)
            setNumberEdit(false)
          }}>
          <i className="ti ti-adjustments-alt rounded-circle ti-md cursor-pointer" data-bs-toggle="modal" data-bs-target="#editTextVarModal"/>
          </td>
        </tr>
        )}
          {vars === "number" && (
                    <tr>
                    <td className='cursor-default' onClick={()=>{
                      setTextEdit(false)
                      setNumberEdit(false)
                    }}><i className="ti ti-square-rounded-number-0 ti-sm text-success me-3" /> <span className="fw-medium">Number</span></td>
                    <td className='pt-3'>
                      {numberEdit === false ? (<p className='cursor-default' onClick={()=>setNumberEdit(numberEdit === false ? true : false)}>{numberEditValue}</p>) : (  
          
                          <input type="number" className="form-control form-control-sm" id="defaultFormControlInput" placeholder="Number value" aria-describedby="defaultFormControlHelp"onChange={(e)=>{
                              setNumberEditValue(e.target.value)
                          }} 
                           value={numberEditValue}/>        
                           )}
          </td>
                    <td onClick={()=>{
                      setTextEdit(false)
                      setNumberEdit(false)
                    }}>
                    <i className="ti ti-adjustments-alt rounded-circle ti-md cursor-pointer" data-bs-toggle="modal" data-bs-target="#editNumberVarModal"/>
                    </td>
                  </tr>
          )} 
          {vars === "image" && (
                    <tr>
                    <td className='cursor-default' onClick={()=>{
                      setTextEdit(false)
                      setNumberEdit(false)
                    }}><i className="ti ti-photo ti-sm text-info me-3" /> <span className="fw-medium">Photo</span></td>
                    <td className='pt-3'><p className='cursor-default truncate-text-wide'>hjuu7m6jvvvrv3v43hh65j56hbhvnghlil54j5v4g34g4.png</p>
          </td>
                    <td onClick={()=>{
                      setTextEdit(false)
                      setNumberEdit(false)
                    }}>
                    <i className="ti ti-adjustments-alt rounded-circle ti-md cursor-pointer" data-bs-toggle="modal" data-bs-target="#editImageVarModal"/>
                    </td>
                  </tr>
          )}
            {vars === "video" && (
                      <tr>
                      <td className='cursor-default' onClick={()=>{
                        setTextEdit(false)
                        setNumberEdit(false)
                      }}><i className="ti ti-video ti-sm text-primary me-3" /> <span className="fw-medium">Photo</span></td>
                      <td className='pt-3'><p className='cursor-default truncate-text-wide'>kwqwk3k4r4fi3g9346j656j5lil54j5v4g34g4.mp4</p>
            </td>
                      <td onClick={()=>{
                        setTextEdit(false)
                        setNumberEdit(false)
                      }}>
                      <i className="ti ti-adjustments-alt rounded-circle ti-md cursor-pointer" data-bs-toggle="modal" data-bs-target="#editVideoVarModal"/>
                      </td>
                    </tr>
            )}
          </>
          )
        })}
      </tbody>
    </table>
  </div>
</div>
)}
{/*/ Basic Bootstrap Table */}

{variables?.length === 0 && (
          <div className='row'>
          <div className='col-md-8 offset-md-2 text-center'>
      <i className="ti ti-box rounded-circle ti-xxxl cursor-pointer" />
          <p className='fs-1'>One has the capability to establish variables for various elements, such as text, components, shapes, frames, colors, numerical values, styles, fonts, concepts, images, videos, and files.</p>
           <div className="dropdown">
           <button type='button' className='btn btn-outline-secondary waves-effect' data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="ti ti-plus rounded-circle ti-md cursor-pointer pe-2" />Create variable</button>
        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sourceVisits">
        <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "colour"])}>Colour</a>
        <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "text"])}>Text</a>
          <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "number"])}>Number</a>
          <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "image"])}>Image</a>
          <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "video"])}>Video</a>
        </div>
      </div>
          </div>
        </div>
)}
        
      </div>
      {variables?.length !== 0 && (
      <div className="modal-footer">
                  <div className="dropdown">
                  <a type="button" className="text-dark cursor-pointer" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti ti-plus pb-1" /> Create Variable</a>
        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sourceVisits">
        <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "colour"])}>Colour</a>
        <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "text"])}>Text</a>
          <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "number"])}>Number</a>
          <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "image"])}>Image</a>
          <a className="dropdown-item" href="javascript:void(0);" onClick={()=>setVariables([...variables, "video"])}>Video</a>
        </div>
      </div>
      </div>
      )}
    </div>
  </div>
</div>
<div className="modal fade" id="editColorVarModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel1">Edit Colour Variable</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#localVarModal" />
      </div>
      <div className="modal-body">
      <div className='row'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Name</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="color variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Description</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="How to use this variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className="divider">
  <div className="divider-text">Basic</div>
</div>
<h6 className='fw-500'>Value</h6>
<div className='row'>
  <div className='col-md-4'>
  <p className='fw-400'>Mode 1</p>
  </div>
  <div className='col-md-4'>
  <span className='fl pe-2'><toolcool-color-picker color="#7367f0"></toolcool-color-picker></span> #7367f0
  </div>
  <div className='col-md-4'>
  <input type="number" className="form-control form-control-sm" id="defaultFormControlInput" placeholder="100%" aria-describedby="defaultFormControlHelp" value={number}
        onChange={handleInputChange} /> 
  </div>
</div>
      <div className="divider">
  <div className="divider-text">Value</div>
</div>

  <h6 className='fw-500'>Color Scope</h6>
  {/* <i className="ti ti-info-circle rounded-circle ti-xs cursor-pointer" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Tooltip on right" 
 aria-describedby = "tooltip246344"/> */}
  <div className="form-check" onClick={()=> setSelectAll(!selectAll)}>
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" checked={selectAll} />
            <label className="form-check-label" for="defaultCheck3">
              All include
            </label>
          </div>
  <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" checked={selectFill.frame} onChange={()=> setSelectFill((prevState) => ({
      ...prevState,
      frame: !prevState.frame,
    }))
  }/>
            <label className="form-check-label" for="defaultCheck3">
              Fill
            </label>
          </div>
          <div className='row'>
            <div className='col-md-8'>
            <div className="list-group">
  <label className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" defaultValue />
    Soufflé pastry pie ice
  </label>
  <label className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" defaultValue />
    Bear claw cake biscuit
  </label>
  <label className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" defaultValue />
    Tart tiramisu cake
  </label>
  <label className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" defaultValue />
    Bonbon toffee muffin
  </label>
  <label className="list-group-item">
    <input className="form-check-input me-1" type="checkbox" defaultValue />
    Dragée tootsie roll
  </label>
</div>
            </div>
          </div>

      </div>

    </div>
  </div>
</div>
<div className="modal fade" id="editTextVarModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel1">Edit Text Variable</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#localVarModal" />
      </div>
      <div className="modal-body">
      <div className='row'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Name</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="color variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Description</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="How to use this variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className="divider">
  <div className="divider-text">Basic</div>
</div>
<p className='fw-500'>Value</p>
      <div className="divider">
  <div className="divider-text">Value</div>
</div>
      </div>

    </div>
  </div>
</div>
<div className="modal fade" id="editNumberVarModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel1">Edit Number Variable</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#localVarModal" />
      </div>
      <div className="modal-body">
      <div className='row'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Name</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="color variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Description</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="How to use this variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className="divider">
  <div className="divider-text">Basic</div>
</div>
<p className='fw-500'>Value</p>
      <div className="divider">
  <div className="divider-text">Value</div>
</div>
      </div>

    </div>
  </div>
</div>
<div className="modal fade" id="editImageVarModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel1">Edit Image Variable</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#localVarModal" />
      </div>
      <div className="modal-body">
      <div className='row'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Name</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="color variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Description</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="How to use this variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className="divider">
  <div className="divider-text">Basic</div>
</div>
<p className='fw-500'>Value</p>
      <div className="divider">
  <div className="divider-text">Value</div>
</div>
      </div>

    </div>
  </div>
</div>
<div className="modal fade" id="editVideoVarModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel1">Edit Video Variable</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#localVarModal" />
      </div>
      <div className="modal-body">
      <div className='row'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Name</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="color variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-2'>
  <label htmlFor="defaultFormControlInput" className="form-label fs-1 pt-2">Description</label>
        </div>
        <div className='col-md-10'>
  <input type="text" className="form-control" id="defaultFormControlInput" placeholder="How to use this variable" aria-describedby="defaultFormControlHelp" />

        </div>
      </div>
      <div className="divider">
  <div className="divider-text">Basic</div>
</div>
<p className='fw-500'>Value</p>
      <div className="divider">
  <div className="divider-text">Value</div>
</div>
      </div>

    </div>
  </div>
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


// defualt bg - #f8f7fa