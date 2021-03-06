let theme = {
    "backgroundColor": "#ffffff",
    "color": [
        "#61A5E8",
        "#7ECF51",
        "#EECB5F",
        "#E4925D",
        "#E16757",
        "#9570E5",
        "#605FF0",
        "#85ca36",
        "#1c9925",
        "#0d8b5f",
        "#0f9cd3",
        "#2f7e9b",
        "#2f677d",
        "#9b7fed",
        "#7453d6",
        "#3b1d98",
        "#27abb1",
        "#017377",
        "#015f63",
        "#b86868",
        "#5669b7",
        "#e5aab4",
        "#60b65f",
        "#98d2b2",
        "#c9c8bc",
        "#45c3dc",
        "#e17979",
        "#5baa5a",
        "#eaccc2",
        "#ffaa74"
    ],
    "animationDuration": 1500,
    animationThreshold:100,
    "title": {
        "itemGap": 8,
        "textStyle": {
            "fontWeight": "lighter",
            "color": "#666",
            "fontSize": 35
        },
        "subtextStyle": {
            "color": "#666"
        }
    },
    "toolbox": {
        "color": ["rgb(38,185,139)", "rgb(38,185,139)", "rgb(38,185,139)", "rgb(38,185,139)"]
    },
    "tooltip": {
        "trigger": "axis"
    },
    "grid": {
        "borderWidth": 0,
        "y": 80
    },
    "categoryAxis": {
        "axisLine": {
            "lineStyle": {
                "color": "#aaa",
                "width": 2
            }
        },
        "boundaryGap": true,
        "splitLine": {
            "show": false,
            "lineStyle": {
                "color": ["#ddd"],
                "width": 1
            }
        },
        "nameTextStyle": {
            "fontSize": 16,
            "color": "#555"
        },
        "axisLabel": {
            "textStyle": {
                "color": "#222"
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": ["rgba(144,238,144,0.2)", "rgba(255,255,255,0.05)"]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": false,
            "lineStyle": {
                "color": "#bbb",
                "width": 1
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "#222"
            }
        },
        "nameTextStyle": {
            "fontSize": 16,
            "color": "#555"
        },
        "splitLine": {
            "lineStyle": {
                "color": ["#ddd"],
                "width": 1,
                "type": "dashed"
            },
            "show": true
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": ["rgba(144,238,144,0.2)", "rgba(255,255,255,0.05)"]
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "rgb(38,185,139)"
        },
        "controlStyle": {
            "normal": {
                "color": "rgb(38,185,139)"
            },
            "emphasis": {
                "color": "rgb(38,185,139)"
            }
        }
    },
    "pie": {
        "clickable": true,
        "legendHoverLink": true,
        "center": [
            "50%", "50%"
        ],
        "radius": [
            0, "75%"
        ],
        "clockWise": true,
        "startAngle": 90,
        "minAngle": 0,
        "selectedOffset": 10,
        "itemStyle": {
            "normal": {
                "borderColor": "rgba(0,0,0,0)",
                "borderWidth": 1,
                "label": {
                    "show": true,
                    "position": "inner",
                    "formatter": "{b}",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "labelLine": {
                    "show": false,
                    "length": 20,
                    "lineStyle": {
                        "width": 1,
                        "type": "solid"
                    }
                }
            },
            "emphasis": {
                "borderColor": "rgba(0,0,0,0)",
                "borderWidth": 1,
                "label": {
                    "show": false
                },
                "labelLine": {
                    "show": false,
                    "length": 20,
                    "lineStyle": {
                        "width": 1,
                        "type": "solid"
                    }
                }
            }
        }
    },
    "k": {
        "itemStyle": {
            "normal": {
                "color": "#E4925D",
                "color0": "#85ca36",
                "lineStyle": {
                    "width": 1,
                    "color": "#E4925D",
                    "color0": "#85ca36"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaStyle": {
                    "color": "#ddd"
                },
                "label": {
                    "textStyle": {
                        "color": "#c12e34"
                    }
                }
            },
            "emphasis": {
                "areaStyle": {
                    "color": "#99d2dd"
                },
                "label": {
                    "textStyle": {
                        "color": "#c12e34"
                    }
                }
            }
        }
    },
    "force": {
        "itemStyle": {
            "normal": {
                "linkStyle": {
                    "strokeColor": "rgb(38,185,139)"
                }
            }
        }
    },
    "chord": {
        "padding": 4,
        "itemStyle": {
            "normal": {
                "lineStyle": {
                    "width": 1,
                    "color": "rgba(128, 128, 128, 0.5)"
                },
                "chordStyle": {
                    "lineStyle": {
                        "width": 1,
                        "color": "rgba(128, 128, 128, 0.5)"
                    }
                }
            },
            "emphasis": {
                "lineStyle": {
                    "width": 1,
                    "color": "rgba(128, 128, 128, 0.5)"
                },
                "chordStyle": {
                    "lineStyle": {
                        "width": 1,
                        "color": "rgba(128, 128, 128, 0.5)"
                    }
                }
            }
        }
    },
    "gauge": {
        "startAngle": 225,
        "endAngle": -45,
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    [
                        0.2, "rgb(148,205,97)"
                    ],
                    [
                        0.8, "rgb(38,185,139)"
                    ],
                    [1, "rgb(255,107,104)"]
                ],
                "width": 8
            }
        },
        "axisTick": {
            "splitNumber": 10,
            "length": 12,
            "lineStyle": {
                "color": "auto"
            }
        },
        "axisLabel": {
            "textStyle": {
                "color": "auto"
            }
        },
        "splitLine": {
            "length": 18,
            "lineStyle": {
                "color": "auto"
            }
        },
        "pointer": {
            "length": "90%",
            "color": "auto"
        },
        "title": {
            "textStyle": {
                "color": "#333"
            }
        },
        "detail": {
            "textStyle": {
                "color": "auto"
            }
        }
    },
    "textStyle": {
        "fontFamily": "微软雅黑, Arial, Verdana, sans-serif"
    }
};

export default theme;