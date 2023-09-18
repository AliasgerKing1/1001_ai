"use strict";

$(function () {
  var t = $("html").hasClass("light-style") ? "default" : "default-dark",
      e = $("#jstree-basic"),
      s = $("#jstree-custom-icons"),
      i = $("#jstree-context-menu"),
      n = $("#jstree-drag-drop"),
      a = $("#jstree-checkbox"),
      p = $("#jstree-ajax");

  e.length && e.jstree({
    core: {
      themes: {
        name: t
      }
    }
  });

  s.length && s.jstree({
    core: {
      themes: {
        name: t
      },
      data: [{
        text: "css",
        children: [{
          text: "App Auto Layouts (Vertical)",
          type: "auto_layout"
        }, {
          text: "Form Auto Layouts (horizontal)",
          type: "auto_layout"
        }]
      }, {
        text: "img",
        state: {
          opened: !0
        },
        children: [{
          text: "rectangle1",
          type: "rectangle"
        }, {
          text: "rectangle2",
          type: "rectangle"
        }, {
          text: "rectangle3",
          type: "rectangle"
        }]
      }, {
        text: "js",
        state: {
          opened: !0
        },
        children: [{
          text: "Text",
          type: "text"
        }, {
          text: "Text",
          type: "text"
        },
        {
            text: "polygon",
            type: "polygon" // Add a new entry for the "polygon" type
          }]
      },{
        text: "frame3",
        state: {
          opened: !0
        },
        children: [{
          text: "Square1",
          type: "square"
        }, {
          text: "Square2",
          type: "square"
        },
        {
            text: "Square3",
            type: "square"
          },
        {
            text: "polygon",
            type: "polygon" // Add a new entry for the "polygon" type
          }]
      }, {
        text: "star1",
        type: "star"
      }, {
        text: "star2",
        type: "star"
      }, {
        text: "star3",
        type: "star"
      }]
    },
    plugins: ["types"],
    types: {
      default: {
        icon: "ti ti-frame"
      },
      star: {
        icon: "ti ti-star text-dark"
      },
      auto_layout: {
        icon: "ti ti-layout-2 text-primary"
      },
      rectangle: {
        icon: "ti ti-rectangle text-success"
      },
      text: {
        icon: "ti ti-letter-t text-danger"
      },
      polygon: {
        icon: "ti ti-polygon text-info",
        text: "polygon"
      },
       square: {
        icon: "ti ti-square text-secondary",
        text: "square"
      },
    }
  });

  i.length && i.jstree({
    core: {
      themes: {
        name: t
      },
      check_callback: !0,
      data: [{
        text: "css",
        children: [{
          text: "App Auto Layouts (Vertical)",
          type: "auto_layout"
        }, {
          text: "Form Auto Layouts (horizontal)",
          type: "auto_layout"
        }]
      }, {
        text: "img",
        state: {
          opened: !0
        },
        children: [{
          text: "rectangle1",
          type: "rectangle"
        }, {
          text: "rectangle2",
          type: "rectangle"
        }, {
          text: "rectangle3",
          type: "rectangle"
        }]
      }, {
        text: "js",
        state: {
          opened: !0
        },
        children: [{
          text: "Text",
          type: "text"
        }, {
          text: "Text",
          type: "text"
        },
        {
            text: "polygon",
            type: "polygon" // Add a new entry for the "polygon" type
          }]
      },{
        text: "frame3",
        state: {
          opened: !0
        },
        children: [{
          text: "Square1",
          type: "square"
        }, {
          text: "Square2",
          type: "square"
        },
        {
            text: "Square3",
            type: "square"
          },
        {
            text: "polygon",
            type: "polygon" // Add a new entry for the "polygon" type
          }]
      }, {
        text: "star1",
        type: "star"
      }, {
        text: "star2",
        type: "star"
      }, {
        text: "star3",
        type: "star"
      }]
    },
    plugins: ["types", "contextmenu"],
    types: {
      default: {
        icon: "ti ti-frame"
      },
      star: {
        icon: "ti ti-star text-dark"
      },
      auto_layout: {
        icon: "ti ti-layout-2 text-primary"
      },
      rectangle: {
        icon: "ti ti-rectangle text-success"
      },
      text: {
        icon: "ti ti-letter-t text-danger"
      },
      polygon: {
        icon: "ti ti-polygon text-info",
        text: "polygon"
      },
       square: {
        icon: "ti ti-square text-secondary",
        text: "square"
      },
    }
  });

  n.length && n.jstree({
    core: {
      themes: {
        name: t
      },
      check_callback: !0,
      data: [{
        text: "css",
        children: [{
          text: "App Auto Layouts (Vertical)",
          type: "auto_layout"
        }, {
          text: "Form Auto Layouts (horizontal)",
          type: "auto_layout"
        }]
      }, {
        text: "img",
        state: {
          opened: !0
        },
        children: [{
          text: "rectangle1",
          type: "rectangle"
        }, {
          text: "rectangle2",
          type: "rectangle"
        }, {
          text: "rectangle3",
          type: "rectangle"
        }]
      }, {
        text: "js",
        state: {
          opened: !0
        },
        children: [{
          text: "Text",
          type: "text"
        }, {
          text: "Text",
          type: "text"
        },
    {
        text: "polygon",
        type: "polygon" // Add a new entry for the "polygon" type
      },]
      }, {
        text: "frame3",
        state: {
          opened: !0
        },
        children: [{
          text: "Square1",
          type: "square"
        }, {
          text: "Square2",
          type: "square"
        },
        {
            text: "Square3",
            type: "square"
          },
    {
        text: "polygon",
        type: "polygon" // Add a new entry for the "polygon" type
      },]
      }, {
        text: "star1",
        type: "star"
      }, {
        text: "star2",
        type: "star"
      }, {
        text: "star3",
        type: "star"
      }]
    },
    plugins: ["types", "dnd"],
    types: {
      default: {
        icon: "ti ti-frame text-warning"
      },
      star: {
        icon: "ti ti-star text-dark"
      },
      auto_layout: {
        icon: "ti ti-layout-2 text-primary"
      },
      rectangle: {
        icon: "ti ti-rectangle text-success"
      },
      text: {
        icon: "ti ti-letter-t text-danger"
      },
      polygon: {
        icon: "ti ti-polygon text-info",
        text: "polygon"
      },
       square: {
        icon: "ti ti-square text-secondary",
        text: "square"
      },
    }
  });

  a.length && a.jstree({
    core: {
      themes: {
        name: t
      },
      data: [{
        text: "css",
        children: [{
          text: "App Auto Layouts (Vertical)",
          type: "auto_layout"
        }, {
          text: "Form Auto Layouts (horizontal)",
          type: "auto_layout"
        }]
      }, {
        text: "img",
        state: {
          opened: !0
        },
        children: [{
          text: "rectangle1",
          type: "rectangle"
        }, {
          text: "rectangle2",
          type: "rectangle"
        }, {
          text: "rectangle3",
          type: "rectangle"
        }]
      }, {
        text: "js",
        state: {
          opened: !0
        },
        children: [{
          text: "Text",
          type: "text"
        }, {
          text: "Text",
          type: "text"
        },
        {
            text: "polygon",
            type: "polygon" // Add a new entry for the "polygon" type
          }]
      },{
        text: "frame3",
        state: {
          opened: !0
        },
        children: [{
          text: "Square1",
          type: "square"
        }, {
          text: "Square2",
          type: "square"
        },
        {
            text: "Square3",
            type: "square"
          },
        {
            text: "polygon",
            type: "polygon" // Add a new entry for the "polygon" type
          }]
      }, {
        text: "star1",
        type: "star"
      }, {
        text: "star2",
        type: "star"
      }, {
        text: "star3",
        type: "star"
      }]
    },
    plugins: ["types", "checkbox", "wholerow"],
    types: {
      default: {
        icon: "ti ti-frame"
      },
      star: {
        icon: "ti ti-star text-dark"
      },
      auto_layout: {
        icon: "ti ti-layout-2 text-primary"
      },
      rectangle: {
        icon: "ti ti-rectangle text-success"
      },
      text: {
        icon: "ti ti-letter-t text-danger"
      },
      polygon: {
        icon: "ti ti-polygon text-info",
        text: "polygon"
      },
       square: {
        icon: "ti ti-square text-secondary",
        text: "square"
      },
    }
  });

  p.length && p.jstree({
    core: {
      themes: {
        name: t
      },
      data: {
        url: assetsPath + "json/jstree-data.json",
        dataType: "json",
        data: function (t) {
          return {
            id: t.id
          };
        }
      }
    },
    plugins: ["types", "state"],
    types: {
      default: {
        icon: "ti ti-frame"
      },
      star: {
        icon: "ti ti-star text-dark"
      },
      auto_layout: {
        icon: "ti ti-layout-2 text-primary"
      },
      rectangle: {
        icon: "ti ti-rectangle text-success"
      },
      text: {
        icon: "ti ti-letter-t text-danger"
      },
      polygon: {
        icon: "ti ti-polygon text-info",
        text: "polygon"
      },
       square: {
        icon: "ti ti-square text-secondary",
        text: "square"
      },
    }
  });
});
