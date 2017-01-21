
	function getTopicCloudOption(data,subtopic)
	 {
	 	var option;
	 	option = 
	 	{
	 		    title: {
	 		        text: "主题词云图",
	 		        subtext: subtopic,
	 		    },
	 		    tooltip: {},
	 		    series: [{
	 		        type: 'wordCloud',
	 		        gridSize: 10,
	 		        sizeRange: [2, 100],
	 		        rotationRange: [0, 0],
	 		        shape: 'circle',
	 		        textStyle: {
	 		            normal: {
	 		                color: function() {
	 		                    return 'rgb(' + [
	 		                        Math.round(Math.random() * 160),
	 		                        Math.round(Math.random() * 160),
	 		                        Math.round(Math.random() * 160)
	 		                    ].join(',') + ')';
	 		                }
	 		            },
	 		            emphasis: {
	 		                shadowBlur: 10,
	 		                shadowColor: '#333'
	 		            }
	 		        },
	 		        data: data
	 		    }]
	 		};
	 	return option;
	 };
	 
	 function getForceRelationOption(nodes,links,categories)
	 {
	 	var option;
	 	
	 	nodes.forEach(function (node){
	 		node.itemStyle = null;
	 		node.label ={
	 			normal: {
	 				show: true,
	 				color : '#aaa'
	 			}	
	 		};
	 		node.value = node.nodevalue;
	 	});
	 	
	 	option = 
	 	{  
        		type: 'graph',
                layout: 'circle',
                symbolSize: 1,
                roam: true,
                textStyle:{
                	color: '#333',
                	fontStyle:'normal'
                },
                label: {
                    normal: {
                        show: true,
                        color : '#000000'
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 20,
                            color : '#000000'
                        }
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0,
                        color : '#000000'
                    }
                },
                series: [{  
               		type: 'graph',
                    layout: 'force',
                    symbolSize: 20,
                    roam: true,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    draggable : true,
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20,
                                color : '#000000'
                            }
                        }
                    },
                    force: {
                        repulsion: 100
                    },
                    data: nodes,                 
                    links: links
                }]  
            };
	 	return option;
	 };
	 
	 function getSankeyRelationOption(nodes,links)
	 {
	 	var option;

	 	option = {
	 	        title: {
	 	            text: 'Sankey Diagram'
	 	        },
	 	        tooltip: {
	 	            trigger: 'item',
	 	            triggerOn: 'mousemove'
	 	        },
	 	        series: [
	 	            {
	 	                type: 'sankey',
	 	                layout: 'none',
	 	                data: nodes,
	 	                links: links,
	 	                itemStyle: {
	 	                    normal: {
	 	                        borderWidth: 1,
	 	                        borderColor: '#aaa'
	 	                    }
	 	                },
	 	                lineStyle: {
	 	                    normal: {
	 	                        curveness: 0.5
	 	                    }
	 	                }
	 	            }
	 	        ]
	 	    };
	 	return option;
	 };
	 
 
 