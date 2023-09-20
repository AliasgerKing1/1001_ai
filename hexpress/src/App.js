import './App.css';

    // <!-- Icons -->
    import "./assets/vendor/fonts/fontawesome.css"
    import "./assets/vendor/fonts/tabler-icons.css"
    import "./assets/vendor/fonts/flag-icons.css"

    // <!-- Core CSS -->
    import "./assets/vendor/css/rtl/core.css" 
    import "./assets/vendor/css/rtl/theme-default.css"
    import "./assets/css/demo.css"
    
    // <!-- Vendors CSS -->
    import "./assets/vendor/libs/node-waves/node-waves.css"
    import "./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
    import "./assets/vendor/libs/typeahead-js/typeahead.css" 
    import "./assets/vendor/libs/dropzone/dropzone.css" 
    import "./assets/vendor/css/pages/library.css" 
    import "./assets/vendor/libs/jstree/jstree.css" 
    import "./assets/vendor/libs/animate-css/animate.css"
    
    // <!-- Page CSS -->

    
import Router from './Routes/Router'
function App() {
  return (
    <div className="App">
  <Router  />
    </div>
  );
}

export default App;
