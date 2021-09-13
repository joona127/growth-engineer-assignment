window.onload = fetchData;

function fetchData() {

	const allMaterials = get_json_data();

	const metalsContainer  = document.getElementById( 'flex-container-metals' );
	const plasticContainer = document.getElementById( 'flex-container-plastics' );

	// Loop through items from JSON data.
	for ( let i = 0; i < allMaterials.length; i++ ) {

		let div = document.createElement( 'div' );
		div.classList.add( 'item' );

		const materialName = allMaterials[i].name
		div.innerText = materialName;

		if ( allMaterials[i].materialType.name === 'Metal' ) {
			metalsContainer.appendChild( div );
			div.addEventListener( 'click', openFunction_metals );
		} else {
			plasticContainer.appendChild( div );
			div.addEventListener( 'click', openFunction_plastics );
		}
	}
}



// Opening first sidebar of metals
function openFunction_metals( e ) {
	console.log(e.target);
	document.getElementById("sidebar_metals").style.width="400px";
}
// Closing the sidebar of metals
function closeFunction_metals() {
	document.getElementById("sidebar_metals").style.width="0px";
}

let materials = document.getElementsByClassName("material");

Array.from(materials).forEach(function(material) {
	material.addEventListener('click', openFunction_metals2);
});

// Opening second sidebar of metals
function openFunction_metals2() {
	document.getElementById("sidebar_metals").style.width="0px";
	document.getElementById("sidebar_metals2").style.width="400px";

}
// Closing second sidebar of metals
function closeFunction_metals2() {
	document.getElementById("sidebar_metals2").style.width="0px";
}

let elements2 = document.getElementsByClassName("item2");

// Opening first sidebar of plastics
function openFunction_plastics() {
	document.getElementById("sidebar_plastics").style.width="400px";

}

// Closing first sidebar of plastics
function closeFunction_plastics() {
	document.getElementById("sidebar_plastics").style.width="0px";
	
	
}

let materials2 = document.getElementsByClassName("material2");

Array.from(materials2).forEach(function(material2) {
	material2.addEventListener('click', openFunction_plastics2);
});

// Opening second sidebar of plastics
function openFunction_plastics2() {
	document.getElementById("sidebar_plastics").style.width="0px";
	document.getElementById("sidebar_plastics2").style.width="400px";

}

// Closing second sidebar of plastics
function closeFunction_plastics2() {
	document.getElementById("sidebar_plastics2").style.width="0px";
}

/**
 * Return JSON data as an array.
 */
function get_json_data() {

    $data = [
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Titanium",
		  "shortDescription": "Excellent strength to weight ratio, used in aerospace, automotive and medical industries.",
		  "longDescription": "Titanium is a metal with excellent strength-to-weight ratio, low thermal expansion and high corrosion resistance that is sterilizable and biocompatible.",
		  "orderWithinTechnology": 14,
		  "url": "/cnc-machining/metal/titanium",
		  "headerImage": {
			"title": "2edaafd1-6652-4da7-9a65-363f9951852a_titanium-part.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/460049dd8a8aac59e21493f4d0e5247f43e0f374de041a7f90f3109975772e45/c017827a97122c4a84bdb45c9c159af4/2edaafd1-6652-4da7-9a65-363f9951852a_titanium-part.jpg",
			  "details": {
				"size": 336586,
				"image": {
				  "width": 2448,
				  "height": 1633
				}
			  },
			  "fileName": "2edaafd1-6652-4da7-9a65-363f9951852a_titanium-part.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Titanium Grade 2",
			  "shortDescription": "Stronger than Grade 1 and equally corrosion-resistant, excellent bio-compatibility.",
			  "image": {
				"title": "2edaafd1-6652-4da7-9a65-363f9951852a_titanium-part.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/460049dd8a8aac59e21493f4d0e5247f43e0f374de041a7f90f3109975772e45/c017827a97122c4a84bdb45c9c159af4/2edaafd1-6652-4da7-9a65-363f9951852a_titanium-part.jpg",
				  "details": {
					"size": 336586,
					"image": {
					  "width": 2448,
					  "height": 1633
					}
				  },
				  "fileName": "2edaafd1-6652-4da7-9a65-363f9951852a_titanium-part.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Titanium grade 2 is unalloyed or \"commercially pure\" Titanium. It has a relatively low level of impurity elements and yield strength that places it between grade 1 and 3. The grades of titanium are dependent on the yield strength. Grade 2 is light-weight, highly corrosion resistant and has excellent weldability.",
			  "yieldStrength": "275 - 410",
			  "elongationAtBreak": "20  -23",
			  "hardness": "80 - 82 HRB",
			  "corrosionResistance": "Excellent"
			},
			{
			  "name": "Titanium Grade 1",
			  "shortDescription": "Titanium Grade 1 (CNC) is a commercially pure metal with excellent corrosion and impact resistance and good machinability and weldability.",
			  "image": {
				"title": "2edaafd1-6652-4da7-9a65-363f9951852a_titanium-part.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/460049dd8a8aac59e21493f4d0e5247f43e0f374de041a7f90f3109975772e45/c017827a97122c4a84bdb45c9c159af4/2edaafd1-6652-4da7-9a65-363f9951852a_titanium-part.jpg",
				  "details": {
					"size": 336586,
					"image": {
					  "width": 2448,
					  "height": 1633
					}
				  },
				  "fileName": "2edaafd1-6652-4da7-9a65-363f9951852a_titanium-part.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Titanium grade 1 has excellent corrosion resistance and strength-to-density ratio. These properties make this grade of titanium suitable for components in weight-saving structures with reduced mass forces and for components that require high corrosion resistance. Moreover, due to the low thermal expansion coefficient, the thermal stresses are lower than in other metallic materials. It is widely used in the medical sector because of its outstanding biocompatibility.",
			  "yieldStrength": "170 - 310",
			  "elongationAtBreak": "24",
			  "hardness": "120 HB",
			  "corrosionResistance": "Excellent"
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Tool steel",
		  "shortDescription": "High hardness and stiffness, abrasion resistant.",
		  "longDescription": "Tool steels are metal alloys with exceptionally high hardness, stiffness and abrasion resistance. Suitable for manufacturing industrial tools.",
		  "orderWithinTechnology": 9,
		  "url": "/cnc-machining/metal/tool-steel",
		  "headerImage": {
			"title": "nwW8Ym2oTEeFnhx2uiky_Tool steel-2.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/e33578c785f3c0b1e214ea8be9d2053add8329eb18f2531dbc842d3f1ef7afc8/6e83eb4f3ef8131aa804dbd71f292126/nwW8Ym2oTEeFnhx2uiky_Tool_steel-2.png",
			  "details": {
				"size": 737983,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "nwW8Ym2oTEeFnhx2uiky_Tool steel-2.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Tool steel D2",
			  "shortDescription": "Tool steel D2 (CNC) is a wear-resistant alloy that retains its hardness to a temperature of 425 °C. Used for cutting tools and dies.",
			  "image": {
				"title": "JV788VAGTBqel3HZUpCT_Steel 1018.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/47c1f9787c3d93d9b99367d7c417d99aeadb14438904958d7e99b9a70a423fe0/44c2aa8731f73d6f319871aacd8a271e/JV788VAGTBqel3HZUpCT_Steel_1018.jpg",
				  "details": {
					"size": 6565333,
					"image": {
					  "width": 6000,
					  "height": 4000
					}
				  },
				  "fileName": "JV788VAGTBqel3HZUpCT_Steel 1018.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "D2 steel is perfectly suited for long lasting tools and die applications. It provides excellent abrasion resistance qualities, very high hardness and mild corrosion resistance in the hardened state and good machinability in the annealed state.",
			  "yieldStrength": "1860 - 2290",
			  "elongationAtBreak": "13.7 - 15.2",
			  "hardness": "58-64 HRC (Natural) | 220 - 250 HB (Annealed)",
			  "corrosionResistance": null
			},
			{
			  "name": "Tool steel A3",
			  "shortDescription": "Tool steel A3 is an air-hardened general purpose tool steel with good toughness and excellent dimensional stability. Used for molding dies.",
			  "image": {
				"title": "KaOrK9vS1KVK0CuCcuiQ_Steel A36.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/3995de97891df04861ceb4875cafd6340a4715db21945b0b3c8e641e515c494e/05a79e591a22d7dcb6c2cf3f14dd5650/KaOrK9vS1KVK0CuCcuiQ_Steel_A36.jpg",
				  "details": {
					"size": 2808450,
					"image": {
					  "width": 4601,
					  "height": 3184
					}
				  },
				  "fileName": "KaOrK9vS1KVK0CuCcuiQ_Steel A36.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "AISI A3, is a carbon steel in the Air Hardening Tool Steel category. It is high quality cold work steel that can be oil quanched and tempered. After annealing it  can reach hardness of 250HB. Its equivalent grades are: ASTM A681, FED QQ-T-570, UNS T30103.",
			  "yieldStrength": "2100",
			  "elongationAtBreak": "1",
			  "hardness": "60 HRC",
			  "corrosionResistance": "Poor"
			},
			{
			  "name": "Tool steel H13",
			  "shortDescription": "Tool steel H13 has an excellent combination of high toughness and fatigure resistance. It is the most common tool steel used in tooling applications.",
			  "image": {
				"title": "KaOrK9vS1KVK0CuCcuiQ_Steel A36.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/3995de97891df04861ceb4875cafd6340a4715db21945b0b3c8e641e515c494e/05a79e591a22d7dcb6c2cf3f14dd5650/KaOrK9vS1KVK0CuCcuiQ_Steel_A36.jpg",
				  "details": {
					"size": 2808450,
					"image": {
					  "width": 4601,
					  "height": 3184
					}
				  },
				  "fileName": "KaOrK9vS1KVK0CuCcuiQ_Steel A36.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "H13 is a chromium hot work tool steel widely used in hot and cold work tooling applications. lt has good machinability, good weldability and ductility. The chromium content assists to resist softening when used at high temperatures. H13 tool steel offers an excellent combination of shock and abrasion resistance, and possesses good red hardness.",
			  "yieldStrength": "1000 - 1380",
			  "elongationAtBreak": "9",
			  "hardness": "28 - 54 GRC",
			  "corrosionResistance": null
			},
			{
			  "name": "Tool steel S7",
			  "shortDescription": "Tool steel s7 has very high impact properties. Suitable for tool and die application.. ",
			  "image": {
				"title": "nwW8Ym2oTEeFnhx2uiky_Tool steel-2.png",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/e33578c785f3c0b1e214ea8be9d2053add8329eb18f2531dbc842d3f1ef7afc8/6e83eb4f3ef8131aa804dbd71f292126/nwW8Ym2oTEeFnhx2uiky_Tool_steel-2.png",
				  "details": {
					"size": 737983,
					"image": {
					  "width": 1920,
					  "height": 760
					}
				  },
				  "fileName": "nwW8Ym2oTEeFnhx2uiky_Tool steel-2.png",
				  "contentType": "image/png"
				}
			  },
			  "engineeringComment": "Shock resistant tool steel (S7) is characterized with excellent toughness, high strength and medium wear resistance. It is a great candidate for tooling applications and can be used for both cold and hot working applications.",
			  "yieldStrength": "1950 - 2050",
			  "elongationAtBreak": "6.5 - 7.5",
			  "hardness": "50-60 - HRC",
			  "corrosionResistance": null
			},
			{
			  "name": "Tool steel O1",
			  "shortDescription": "Tool steel O1 (CNC) is an oil-hardened alloy with a high hardness of 65 HRC. Used for industrial knives and cutting tools.",
			  "image": {
				"title": "KaOrK9vS1KVK0CuCcuiQ_Steel A36.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/3995de97891df04861ceb4875cafd6340a4715db21945b0b3c8e641e515c494e/05a79e591a22d7dcb6c2cf3f14dd5650/KaOrK9vS1KVK0CuCcuiQ_Steel_A36.jpg",
				  "details": {
					"size": 2808450,
					"image": {
					  "width": 4601,
					  "height": 3184
					}
				  },
				  "fileName": "KaOrK9vS1KVK0CuCcuiQ_Steel A36.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "When heat treated, O1 has good hardening results and small dimensional changes. It is a general purpose steel that is used in applications where alloy steel cannot provide sufficient hardness, strength and wear resistance.",
			  "yieldStrength": "1800 - 2140",
			  "elongationAtBreak": "3.5 - 6.1",
			  "hardness": "57 - 62 HRC",
			  "corrosionResistance": null
			},
			{
			  "name": "Tool steel A2",
			  "shortDescription": "Tool steel A2 (CNC) is an air-hardened general purpose tool steel with good toughness and excellent dimensional stability. Used for molding dies.",
			  "image": {
				"title": "fwXx6XhSGeyISVYBfoKL_Steel 1045.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/ee7bd68412c7ff0beac1cf6d916e28e9a7c85980b66f680272f875bf91d40797/14a05c7bb744158ba80710fd9c44b023/fwXx6XhSGeyISVYBfoKL_Steel_1045.jpg",
				  "details": {
					"size": 2112582,
					"image": {
					  "width": 3549,
					  "height": 2530
					}
				  },
				  "fileName": "fwXx6XhSGeyISVYBfoKL_Steel 1045.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "A2 has high toughness and dimensional accuracy in hardened state. When it comes to wear and abrasion resistance is not as good as D2, but has better machinability.",
			  "yieldStrength": "1800 - 2140",
			  "elongationAtBreak": "3.5 - 6.1",
			  "hardness": "57 - 62 HRC",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Polyethylene",
		  "shortDescription": "Excellent strength-to-weight ratio, impact and weather resistant.",
		  "longDescription": "Polyethylene (PE) is a thermoplastic with high strength-to-weight ratio, good impact strength and excellent weather resistance.",
		  "orderWithinTechnology": 16,
		  "url": "/cnc-machining/plastic/hdpe",
		  "headerImage": {
			"title": "D0IVgSLCREmHHc9Dmtlv_HDPE-external.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/8d723cff6735fe6d17325d7b8d470b77d11f071931e5e6ced359cc88d3f3949f/6124fb1bc7b13fbbad7b1f0424958a62/D0IVgSLCREmHHc9Dmtlv_HDPE-external.png",
			  "details": {
				"size": 217795,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "D0IVgSLCREmHHc9Dmtlv_HDPE-external.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "UHMWPE",
			  "shortDescription": "High density polyethylene is very tough due to its long chain structure and has the highest impact strength of any thermoplastic.",
			  "image": {
				"title": "9915b069-fd6e-4c6e-99fa-86e87e8dabdf_uhmwpe.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/d82490ea70f23aaf2a95b2b106f5d7210bbf96cbfed8f99294149f740b51dd91/2bc3af7471c8a064f90c07ba8db53522/9915b069-fd6e-4c6e-99fa-86e87e8dabdf_uhmwpe.jpg",
				  "details": {
					"size": 40483,
					"image": {
					  "width": 310,
					  "height": 310
					}
				  },
				  "fileName": "9915b069-fd6e-4c6e-99fa-86e87e8dabdf_uhmwpe.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "UHMWPE is self-lubricating, shatter resistant, long-wearing, abrasion and corrosion resistant. It meets FDA standards and USDA acceptance for food and pharmaceutical equipment. ",
			  "yieldStrength": "21.4 - 27.6",
			  "elongationAtBreak": "200 - 500",
			  "hardness": "3.4 - 8.3 HV",
			  "corrosionResistance": null
			},
			{
			  "name": "HDPE",
			  "shortDescription": "HDPE (CNC) is a lightweight and strong thermoplastic, suitable for outdoor applciations. Commonly used for prototypes before Injection Molding.",
			  "image": {
				"title": "Woe9YKMZQFerrkoZccbd_img-0519_3.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/e9077fc463741eb0f72752112f44df657b46c42146b4c95581c2d7a4407da460/c0210f1c1632ddf5dc3eeac2c79ddd4f/Woe9YKMZQFerrkoZccbd_img-0519_3.jpg",
				  "details": {
					"size": 12525,
					"image": {
					  "width": 590,
					  "height": 549
					}
				  },
				  "fileName": "Woe9YKMZQFerrkoZccbd_img-0519_3.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "HDPE (High-Density-Polyethylene) is a thermoplastic known for its tensile strength with high density, moderately stiff plastic with a highly crystalline structure.",
			  "yieldStrength": "26.2 - 31",
			  "elongationAtBreak": "500 - 700",
			  "hardness": "7.9 - 9.9 HV",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "PTFE (Teflon)",
		  "shortDescription": "Low friction, chemical and thermal resistant.",
		  "longDescription": "PTFE is an engineering thermoplastic with excellent chemical and thermal resistance and the lowest coefficient of friction of any know solid.",
		  "orderWithinTechnology": 13,
		  "url": "/cnc-machining/plastic/ptfe-teflon",
		  "headerImage": {
			"title": "QLzznS2OSs62j5lGzVUR_PTFE-external-2.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/bc17815eaee21f9ad8452bc88b8b49067aeaedfa494481a8e68925028df87cb0/65ec4aa14342919d079cbb08abb53dc8/QLzznS2OSs62j5lGzVUR_PTFE-external-2.png",
			  "details": {
				"size": 217182,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "QLzznS2OSs62j5lGzVUR_PTFE-external-2.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Teflon",
			  "shortDescription": "Teflon (CNC) - PTFE - has excellent thermal and chemical resistance and outstanding frictional and electrical properties.",
			  "image": {
				"title": "Ram6ikSAGXZHVUzolr8Q_PTFE-external.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/54c5504a51cacd0563c29f52965e0fbfdb3aada95624d86b3c3cebaaad8b0759/ae34e9f3b54a3e3b4552254d3fd40874/Ram6ikSAGXZHVUzolr8Q_PTFE-external.jpg",
				  "details": {
					"size": 172646,
					"image": {
					  "width": 951,
					  "height": 613
					}
				  },
				  "fileName": "Ram6ikSAGXZHVUzolr8Q_PTFE-external.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Polytetrafluoroethylene (PTFE) is a high performance, low friction engineering plastic with exceptional resistance to a wide variety of chemicals. It has a very high melting point, and even though its other mechanical properties are low compared to other engineering plastics, its high chemical resistance and melting point results in its wide adoption in a variety of applications. ",
			  "yieldStrength": "14 - 41.4",
			  "elongationAtBreak": "300 - 450",
			  "hardness": "50 - 65 Shore D",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "POM (Delrin/Acetal)",
		  "shortDescription": "High stiffness, high accuracy, low friction, easy to machine.",
		  "longDescription": "POM is an engineering thermoplastic used in precision parts requiring high stiffness, low friction, and excellent dimensional stability.",
		  "orderWithinTechnology": 3,
		  "url": "/cnc-machining/plastic/pom-delrin",
		  "headerImage": {
			"title": "CtwVPfLQGysxJwrMYTZ6_POM-2.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/16623cb13e93486ab1b555b570d5a8e288e88753225649bdd52175af39a8c385/c6364a7b4e148275067aedb141143052/CtwVPfLQGysxJwrMYTZ6_POM-2.png",
			  "details": {
				"size": 319237,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "CtwVPfLQGysxJwrMYTZ6_POM-2.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Acetal (POM-C)",
			  "shortDescription": "Acetal (POM-C) is the easiest to machine engineering plastic. Ideal for parts with high stiffness, low friction and very low water absorption.",
			  "image": {
				"title": "985698b6-71b8-442a-94f9-a46abcf18d9a_cnc_acetal.png",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/987d7b5d0ee5e0b60559b2345031518a380134907765a147b7967c7b962c0a6b/61423a1733c204b0096989d837a49b7f/985698b6-71b8-442a-94f9-a46abcf18d9a_cnc_acetal.png",
				  "details": {
					"size": 23188,
					"image": {
					  "width": 298,
					  "height": 298
					}
				  },
				  "fileName": "985698b6-71b8-442a-94f9-a46abcf18d9a_cnc_acetal.png",
				  "contentType": "image/png"
				}
			  },
			  "engineeringComment": "This type of POM is a copolymer with high mechanical strength and rigidity. Acetal has good sliding characteristics and excellent wear resistance, as well as low moisture absorption. It has higher chemical resistance and lower melting point than POM-H (Delrin). ",
			  "yieldStrength": "60 - 67",
			  "elongationAtBreak": "30 - 32",
			  "hardness": "88 HRM",
			  "corrosionResistance": null
			},
			{
			  "name": "Delrin (POM-H)",
			  "shortDescription": "Delrin (POM-H) is the easiest to machine engineering plastic. Ideal for parts with high stiffness, low friction and very low water absorption.",
			  "image": {
				"title": "fQkU8OTXTK2YSadGkpSO_POM.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/1b61d664f65c211bf24463e85b00f569a7c62bad47a5c58edad41c974402d920/e8adb8a19c9b0cbbe358618be869e41f/fQkU8OTXTK2YSadGkpSO_POM.jpg",
				  "details": {
					"size": 5332588,
					"image": {
					  "width": 6000,
					  "height": 4000
					}
				  },
				  "fileName": "fQkU8OTXTK2YSadGkpSO_POM.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "POM (Delrin) is a high-performing plastic.  It is more expensive than commodity polymers, typically used for high performance applications and has a high machinability.",
			  "yieldStrength": "48.6 - 72.4",
			  "elongationAtBreak": "15 - 75",
			  "hardness": "14.6 - 24.8 HV",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "FR4",
		  "shortDescription": "Flame retardant glass fiber epoxy laminate.",
		  "longDescription": "FR4 is a class of glass fiber epoxy laminate that is flame retardant, with similar properties to G-10.",
		  "orderWithinTechnology": 23,
		  "url": "/cnc-machining/plastic/fr4",
		  "headerImage": {
			"title": "8db2a2ef-0970-4052-b9c8-3558b58d3f09_FR4_cnc.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/3809dd02dcec14e3b25595235b4123ecbe22f4429175127dbdbc5d62546957a6/7f585605df901dbdc157d18a6e875ee2/8db2a2ef-0970-4052-b9c8-3558b58d3f09_FR4_cnc.jpg",
			  "details": {
				"size": 10027,
				"image": {
				  "width": 381,
				  "height": 279
				}
			  },
			  "fileName": "8db2a2ef-0970-4052-b9c8-3558b58d3f09_FR4_cnc.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "FR4",
			  "shortDescription": "FR4 is a class of glass fiber epoxy laminate that is flame retardant.",
			  "image": {
				"title": "8db2a2ef-0970-4052-b9c8-3558b58d3f09_FR4_cnc.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/3809dd02dcec14e3b25595235b4123ecbe22f4429175127dbdbc5d62546957a6/7f585605df901dbdc157d18a6e875ee2/8db2a2ef-0970-4052-b9c8-3558b58d3f09_FR4_cnc.jpg",
				  "details": {
					"size": 10027,
					"image": {
					  "width": 381,
					  "height": 279
					}
				  },
				  "fileName": "8db2a2ef-0970-4052-b9c8-3558b58d3f09_FR4_cnc.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "FR4 is an electrical-grade, dielectric fiberglass laminate epoxy resin system combined with a glass fabric substrate. The difference between G10 and FR4 is that FR4 is a fire-retardant grade of G10 and it can be safely substituted when G10 is called out. It has extremely high mechanical strength, good dielectric loss properties, and good electric strength properties, both wet and dry.",
			  "yieldStrength": null,
			  "elongationAtBreak": "0.008 - 0.01",
			  "hardness": "100 - 110 HRM",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "PMMA (Acrylic)",
		  "shortDescription": "Transparent rigid plastic often used as a substitute for glass.",
		  "longDescription": "PMMA is a transparent rigid plastic often used as a substitute for glass.",
		  "orderWithinTechnology": 18,
		  "url": "/cnc-machining/plastic/pmma",
		  "headerImage": {
			"title": "ef816dfd-99b8-4ed4-b8c1-13e414664975_PMMA-acrylic-injection-molding-9.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/a7006d8ba472be6aec3a52879b6002ed0954cacbfe699c46de1e76cdb5922551/358ad3fea74394d6f54e56670a2580c0/ef816dfd-99b8-4ed4-b8c1-13e414664975_PMMA-acrylic-injection-molding-9.jpg",
			  "details": {
				"size": 31858,
				"image": {
				  "width": 640,
				  "height": 320
				}
			  },
			  "fileName": "ef816dfd-99b8-4ed4-b8c1-13e414664975_PMMA-acrylic-injection-molding-9.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "PMMA (Acrylic)",
			  "shortDescription": "PMMA is a transparent rigid plastic often used as a substitute for glass.",
			  "image": {
				"title": "ef816dfd-99b8-4ed4-b8c1-13e414664975_PMMA-acrylic-injection-molding-9.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/a7006d8ba472be6aec3a52879b6002ed0954cacbfe699c46de1e76cdb5922551/358ad3fea74394d6f54e56670a2580c0/ef816dfd-99b8-4ed4-b8c1-13e414664975_PMMA-acrylic-injection-molding-9.jpg",
				  "details": {
					"size": 31858,
					"image": {
					  "width": 640,
					  "height": 320
					}
				  },
				  "fileName": "ef816dfd-99b8-4ed4-b8c1-13e414664975_PMMA-acrylic-injection-molding-9.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": null,
			  "yieldStrength": "64 -80",
			  "elongationAtBreak": "3 - 6.4",
			  "hardness": "64 - 105 HRM",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "PET",
		  "shortDescription": "Tough plastic that offers excellent wear resistance and mechanical strength.",
		  "longDescription": "PET is a tough plastic that offers excellent wear resistance and mechanical strength.",
		  "orderWithinTechnology": 19,
		  "url": "/cnc-machining/plastic/pet",
		  "headerImage": {
			"title": "e0913226-a327-4f89-9456-45b46d6207d1_cnc_pet.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/9ba32472e6ea25381d51fae02d0d4de335c2fc7aade644920d80b78b658b5ab8/f545fd55b1cda0abf5a931c7db0db2cd/e0913226-a327-4f89-9456-45b46d6207d1_cnc_pet.jpg",
			  "details": {
				"size": 6907,
				"image": {
				  "width": 300,
				  "height": 208
				}
			  },
			  "fileName": "e0913226-a327-4f89-9456-45b46d6207d1_cnc_pet.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "PET",
			  "shortDescription": "PET is a tough plastic that offers excellent wear resistance and mechanical strength.",
			  "image": {
				"title": "e0913226-a327-4f89-9456-45b46d6207d1_cnc_pet.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/9ba32472e6ea25381d51fae02d0d4de335c2fc7aade644920d80b78b658b5ab8/f545fd55b1cda0abf5a931c7db0db2cd/e0913226-a327-4f89-9456-45b46d6207d1_cnc_pet.jpg",
				  "details": {
					"size": 6907,
					"image": {
					  "width": 300,
					  "height": 208
					}
				  },
				  "fileName": "e0913226-a327-4f89-9456-45b46d6207d1_cnc_pet.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "PET (polyethylenetarapthalate) is an engineering thermoplastic that has excellent strength and stiffness. It is available in different thicknesses and diameters and is easy to machine to tight tolerances. PET is FDA compliant and has minimal moisture absorption. As a result of this, it has a wide range of applications.",
			  "yieldStrength": "47 - 90",
			  "elongationAtBreak": "20 - 300",
			  "hardness": "80 - 96 HRM",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Inconel",
		  "shortDescription": "High-strength and corrosion-resistant nickel alloy.",
		  "longDescription": "Inconel is a high-strength, corrosion-resistant nickel alloy. Ideal for aerospace applications.",
		  "orderWithinTechnology": 21,
		  "url": "/cnc-machining/metal/nickel",
		  "headerImage": {
			"title": "9b48b0ec-e5a9-4447-94cc-9c294b90e5b8_inconel_718.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/a32f85ef58f64228459b31c9df52b090f738532037588ab3ea8acbad27cedc10/6138bea932199c224ca62b27c5f0c806/9b48b0ec-e5a9-4447-94cc-9c294b90e5b8_inconel_718.jpg",
			  "details": {
				"size": 21789,
				"image": {
				  "width": 399,
				  "height": 310
				}
			  },
			  "fileName": "9b48b0ec-e5a9-4447-94cc-9c294b90e5b8_inconel_718.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Inconel 718",
			  "shortDescription": "Inconel 718 is a high-strength, corrosion-resistant nickel alloy.",
			  "image": {
				"title": "9b48b0ec-e5a9-4447-94cc-9c294b90e5b8_inconel_718.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/a32f85ef58f64228459b31c9df52b090f738532037588ab3ea8acbad27cedc10/6138bea932199c224ca62b27c5f0c806/9b48b0ec-e5a9-4447-94cc-9c294b90e5b8_inconel_718.jpg",
				  "details": {
					"size": 21789,
					"image": {
					  "width": 399,
					  "height": 310
					}
				  },
				  "fileName": "9b48b0ec-e5a9-4447-94cc-9c294b90e5b8_inconel_718.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Inconel 718 is an austenitic nickel-base superalloy which is used in applications requiring high strength. It was initially developed for the aerospace industry and is still used for most of the aircraft engine components. It has high strength, outstanding weldability with resistance to post-weld cracking and excellent creep-rupture strength.",
			  "yieldStrength": "980 - 1100",
			  "elongationAtBreak": "18 - 25",
			  "hardness": "40 HRC",
			  "corrosionResistance": "Excellent"
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Magnesium",
		  "shortDescription": "Magnesium is the lightest structural metal with high strength to weight ratio.",
		  "longDescription": "Magnesium is the lightest structural metal with high strength to weight ratio. ",
		  "orderWithinTechnology": 24,
		  "url": "/cnc-machining/metal/magnesium",
		  "headerImage": {
			"title": "fef383c7-1224-425a-8c0c-05570fc7f920_magnesium_az31b.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/3bf42d63cac637fdbc4e626523379907221737734d2703c494c6f6f7d4c8b2e5/62a64e65abca63e75caeeda38f285f1a/fef383c7-1224-425a-8c0c-05570fc7f920_magnesium_az31b.jpg",
			  "details": {
				"size": 69537,
				"image": {
				  "width": 750,
				  "height": 750
				}
			  },
			  "fileName": "fef383c7-1224-425a-8c0c-05570fc7f920_magnesium_az31b.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Magnesium AZ31B",
			  "shortDescription": "Magnesium AZ31B is a light weight magnesium alloy with high strength to weight ratio.",
			  "image": {
				"title": "fef383c7-1224-425a-8c0c-05570fc7f920_magnesium_az31b.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/3bf42d63cac637fdbc4e626523379907221737734d2703c494c6f6f7d4c8b2e5/62a64e65abca63e75caeeda38f285f1a/fef383c7-1224-425a-8c0c-05570fc7f920_magnesium_az31b.jpg",
				  "details": {
					"size": 69537,
					"image": {
					  "width": 750,
					  "height": 750
					}
				  },
				  "fileName": "fef383c7-1224-425a-8c0c-05570fc7f920_magnesium_az31b.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Magnesium AZ31B is a light weight alloy with very good machinability. It is usually anodised to improve its corrosion resistance. It is available in different forms; plate, sheet and bar and widely available in comparison to other magnesium grades. It is used as an alternative to aluminium alloys as it has high strength to weight ratio.",
			  "yieldStrength": "140 - 200",
			  "elongationAtBreak": "10 - 15",
			  "hardness": "49 HB",
			  "corrosionResistance": "Poor"
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "G-10",
		  "shortDescription": "High strength, low moisture absorption, and high level of electrical insulation and chemical resistance. ",
		  "longDescription": "G-10 is a high-pressure fiberglass laminate with a high strength, low moisture absorption, and high level of electrical insulation and chemical resistance. ",
		  "orderWithinTechnology": 22,
		  "url": "/cnc-machining/plastic/g-10",
		  "headerImage": {
			"title": "7d4961f4-f964-49bf-a00f-2d5f51a5588c_G-10.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/de679e5e5bc35e42246c631721d667829c5d874693584a09718e8aaf270cd07f/23ffb47ea94f61e89f2539b8312c3107/7d4961f4-f964-49bf-a00f-2d5f51a5588c_G-10.jpg",
			  "details": {
				"size": 25126,
				"image": {
				  "width": 882,
				  "height": 882
				}
			  },
			  "fileName": "7d4961f4-f964-49bf-a00f-2d5f51a5588c_G-10.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Garolite G-10",
			  "shortDescription": "Garolite G-10 is a high pressure fiberglass laminate known for its high strength, low moisture absorption, and high electrical insulation. ",
			  "image": {
				"title": "7d4961f4-f964-49bf-a00f-2d5f51a5588c_G-10.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/de679e5e5bc35e42246c631721d667829c5d874693584a09718e8aaf270cd07f/23ffb47ea94f61e89f2539b8312c3107/7d4961f4-f964-49bf-a00f-2d5f51a5588c_G-10.jpg",
				  "details": {
					"size": 25126,
					"image": {
					  "width": 882,
					  "height": 882
					}
				  },
				  "fileName": "7d4961f4-f964-49bf-a00f-2d5f51a5588c_G-10.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "G-10 is a glass/epoxy composite that consist fiber glass, electrical grade epoxy resin. This material is extremely strong and stiff with outstanding electrical properties.",
			  "yieldStrength": null,
			  "elongationAtBreak": null,
			  "hardness": "100 - 110 HRM",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Invar",
		  "shortDescription": "Nickel alloy with a very low coefficient of thermal expansion.",
		  "longDescription": "Invar is a nickel alloy with a very low coefficient of thermal expansion. Ideal for applications where high dimensional stability is required, such as precision instruments, engines valves and large aerostructure molds.",
		  "orderWithinTechnology": 25,
		  "url": "/cnc-machining/metal/invar",
		  "headerImage": {
			"title": "94aba5ee-4358-4e0c-9f34-ade0f2f3e474_invar.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/455cee1eeb6e3e492a81f1116626ebc4a2e8bed990bf54a8fa6975682e358081/35908d05bec87f1ab4b7505bbbbd5826/94aba5ee-4358-4e0c-9f34-ade0f2f3e474_invar.jpg",
			  "details": {
				"size": 230440,
				"image": {
				  "width": 2048,
				  "height": 1638
				}
			  },
			  "fileName": "94aba5ee-4358-4e0c-9f34-ade0f2f3e474_invar.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Invar",
			  "shortDescription": "INVAR is a nickel alloy with a very low coefficient of thermal expansion.",
			  "image": {
				"title": "94aba5ee-4358-4e0c-9f34-ade0f2f3e474_invar.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/455cee1eeb6e3e492a81f1116626ebc4a2e8bed990bf54a8fa6975682e358081/35908d05bec87f1ab4b7505bbbbd5826/94aba5ee-4358-4e0c-9f34-ade0f2f3e474_invar.jpg",
				  "details": {
					"size": 230440,
					"image": {
					  "width": 2048,
					  "height": 1638
					}
				  },
				  "fileName": "94aba5ee-4358-4e0c-9f34-ade0f2f3e474_invar.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Invar is a nickel-iron alloy best known for its very low thermal expansion coefficient, one of the lowest of all metals. It is also strong, tough, ductile, and used where high dimensional stability is required. Invar is magnetic in the temperature range in which exhibits the low expansion characteristics.",
			  "yieldStrength": "483 - 679",
			  "elongationAtBreak": "4 - 20",
			  "hardness": "90 - 98 HRC",
			  "corrosionResistance": "Poor to Medium"
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Polypropylene",
		  "shortDescription": "Excellent chemical resistance. Food-safe grades available.",
		  "longDescription": "-",
		  "orderWithinTechnology": 20,
		  "url": "/cnc-machining/plastic/polypropylene",
		  "headerImage": {
			"title": "b51f318c-d06e-4b1f-b2ca-08e6668b9d14_IM-PP.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/7606de1db307954d60332747bebe98282f4ac1337286a0025361033e3ababc11/3dd3bd6c666b52bb2c57e85c6b82171c/b51f318c-d06e-4b1f-b2ca-08e6668b9d14_IM-PP.jpg",
			  "details": {
				"size": 35834,
				"image": {
				  "width": 600,
				  "height": 600
				}
			  },
			  "fileName": "b51f318c-d06e-4b1f-b2ca-08e6668b9d14_IM-PP.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "PP+GF(30%)",
			  "shortDescription": "Reinforced polypropylene with glass fiber for improved tensile strength.",
			  "image": {
				"title": "e6c0ecbd-5c43-4df5-a07b-3e9db679029b_pp_gf_30.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/ad4d7a67ead1f75da43323440daa8191873226d52f2f6255497765c6bc80c332/c33bf1cfb82c3d2d2123a01327f64a50/e6c0ecbd-5c43-4df5-a07b-3e9db679029b_pp_gf_30.jpg",
				  "details": {
					"size": 18710,
					"image": {
					  "width": 381,
					  "height": 381
					}
				  },
				  "fileName": "e6c0ecbd-5c43-4df5-a07b-3e9db679029b_pp_gf_30.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "PP+30%GF is a composite material using glass fiber that is chemically bonded to the polypropylene matrix. This material is made to be used for applications that require higher resistance to deformation, particularly at high temperatures, and high dimensional stability.",
			  "yieldStrength": null,
			  "elongationAtBreak": "2.1 - 3.4",
			  "hardness": "110 HRC",
			  "corrosionResistance": null
			},
			{
			  "name": "PP",
			  "shortDescription": "Polyproplene has similar properties to polyethylene but is harder and more heat resistant.",
			  "image": {
				"title": "b51f318c-d06e-4b1f-b2ca-08e6668b9d14_IM-PP.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/7606de1db307954d60332747bebe98282f4ac1337286a0025361033e3ababc11/3dd3bd6c666b52bb2c57e85c6b82171c/b51f318c-d06e-4b1f-b2ca-08e6668b9d14_IM-PP.jpg",
				  "details": {
					"size": 35834,
					"image": {
					  "width": 600,
					  "height": 600
					}
				  },
				  "fileName": "b51f318c-d06e-4b1f-b2ca-08e6668b9d14_IM-PP.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Polypropylene (PP) is a thermoplastic polymer resin which has a tough, rigid and crystalline structure from a propene monomer. It’s the second most widely produced plastic (after PE) and is harder and more heat resistant than PE. It has many uses from commercial to industrial applications.",
			  "yieldStrength": "30 - 32",
			  "elongationAtBreak": "8 - 12",
			  "hardness": "65 - 102 HRR",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "PVC",
		  "shortDescription": "Excellent chemical and weather resistance and good toughness.",
		  "longDescription": "PVC is the third most used plastic with all-around good mechanical properties, excellent chemical and weather resistance and good toughness.",
		  "orderWithinTechnology": 17,
		  "url": "/cnc-machining/plastic/pvc",
		  "headerImage": {
			"title": "c8ebc88f-3444-458e-84da-91a07f981b74_PVC-IM.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/87b0644c417a839cd481309a8a0d571e38433f478dff27775a4154b8bd1d3d69/50632ce6ffc7e354a68b568e28c1d0be/c8ebc88f-3444-458e-84da-91a07f981b74_PVC-IM.jpg",
			  "details": {
				"size": 35486,
				"image": {
				  "width": 650,
				  "height": 650
				}
			  },
			  "fileName": "c8ebc88f-3444-458e-84da-91a07f981b74_PVC-IM.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "PVC",
			  "shortDescription": "PVC is the third most used plastic with all-around good mechanical properties, excellent chemical and weather resistance and good toughness.",
			  "image": {
				"title": "e63beea5-9600-4720-b4c7-f119efc77e08_pvc-part.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/2bab9ebe365f46c641692bdd7d55d802b91c3dc5f3e36a349d973a166ece4312/9b8e5858d01e13182b14e398df2d58cc/e63beea5-9600-4720-b4c7-f119efc77e08_pvc-part.jpg",
				  "details": {
					"size": 54910,
					"image": {
					  "width": 900,
					  "height": 900
					}
				  },
				  "fileName": "e63beea5-9600-4720-b4c7-f119efc77e08_pvc-part.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "PVC is a widely used thermoplastic. It is a durable material used in a  variety of applications and it can be either rigid or flexible, white or black and a wide range of colours in between. In general, PVC is light, water resistant, offers a long life cycle and does not require much maintenance.",
			  "yieldStrength": "53 - 58",
			  "elongationAtBreak": "25 - 80",
			  "hardness": "13.7 - 16.6 HV",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Copper",
		  "shortDescription": "Copper",
		  "longDescription": "Copper",
		  "orderWithinTechnology": 6,
		  "url": "/cnc-machining/metal/copper",
		  "headerImage": {
			"title": "3a595d68-c519-4863-a65d-5c13c0c3732b_Copper.jpg",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/b318f6f34af07419b0f8e80ca21551f4bfc2e36260d6916e098831aeca458863/907cb3b3c093531944e3883ddc4237db/3a595d68-c519-4863-a65d-5c13c0c3732b_Copper.jpg",
			  "details": {
				"size": 34042,
				"image": {
				  "width": 480,
				  "height": 480
				}
			  },
			  "fileName": "3a595d68-c519-4863-a65d-5c13c0c3732b_Copper.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Copper C110",
			  "shortDescription": "Copper (C110) is the purest 99.9% copper alloy, with universal for electrical applications high thermal conductivity and good corrosion resistance.",
			  "image": {
				"title": "2fdab993-1b19-43e6-8e37-974732ef4203_copper-c110-part.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/e1ad3ebe4e313c8b87f4ab6097bf384cb6c8f5a4c7dd3aca07735c6317c5b994/7c62f440d6d04eb5213130bd66857d01/2fdab993-1b19-43e6-8e37-974732ef4203_copper-c110-part.jpg",
				  "details": {
					"size": 132271,
					"image": {
					  "width": 1000,
					  "height": 1000
					}
				  },
				  "fileName": "2fdab993-1b19-43e6-8e37-974732ef4203_copper-c110-part.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Copper C110 is known for its malleability, ductility, excellent heat and electrical conductivity. When exposed to the elements it forms thin protective patina that is relatively impermeable. Due to his excellent properties C110 has wide range of applications. ",
			  "yieldStrength": "69 - 140",
			  "elongationAtBreak": "15 - 50",
			  "hardness": "40 HRF",
			  "corrosionResistance": null
			},
			{
			  "name": "Copper C101",
			  "shortDescription": "Copper (C101) is an 99.99% is a copper alloy with excellent conductivity and high corrosion resistance and toughness.",
			  "image": {
				"title": "4c1bd28b-418d-4219-b32e-bc7b5fbc809b_copper-c101-part2.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/e8d29f732706b8474aa1a64769bbde7c69342c13e30c1ac3ab168bced0bb2cc5/3159702fa0de34d74c4d7a329c62c8aa/4c1bd28b-418d-4219-b32e-bc7b5fbc809b_copper-c101-part2.jpg",
				  "details": {
					"size": 53434,
					"image": {
					  "width": 900,
					  "height": 900
					}
				  },
				  "fileName": "4c1bd28b-418d-4219-b32e-bc7b5fbc809b_copper-c101-part2.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "C101 is a very popular choice for electrical components and conductors due to its high thermal conductivity. It has very high percentage of Copper in it - 99.99%.",
			  "yieldStrength": "185 - 340",
			  "elongationAtBreak": "6 - 25",
			  "hardness": "27 HV",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Nylon",
		  "shortDescription": "Excellent mechanical properties, thermal, chemical and abrasion resistant.",
		  "longDescription": "Nylon - polyamide (PA) - is an engineering thermoplastic with excellent mechanical properties and high chemical and abrasion resistance.",
		  "orderWithinTechnology": 8,
		  "url": "/cnc-machining/plastic/nylon",
		  "headerImage": {
			"title": "lDybQ1tTdybWVDetqURT_Nylon.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/9773abacb0587ed457ae274ddf65c6c4cd606f4dbf320a3ac721910711667409/ea30f332c987994bac3bdfb0d38ad833/lDybQ1tTdybWVDetqURT_Nylon.png",
			  "details": {
				"size": 1060411,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "lDybQ1tTdybWVDetqURT_Nylon.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Nylon 6",
			  "shortDescription": "Nylon 6 (CNC) - PA 6 - has excellent mechanical properties, with high toughness and hardness. Susceptible to moisture absorption.",
			  "image": {
				"title": "oaDTZO51SbG1bd8mdr32_Ext3eDaSl2pUZS97UX6A_full_IMG_6612.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/97159bece803a9ce468a650c4af33b03cffbc12602c62876c62d3f48f5efc42d/50b3d31a4ca38e0de1d582258e093983/oaDTZO51SbG1bd8mdr32_Ext3eDaSl2pUZS97UX6A_full_IMG_6612.jpg",
				  "details": {
					"size": 848992,
					"image": {
					  "width": 2881,
					  "height": 1019
					}
				  },
				  "fileName": "oaDTZO51SbG1bd8mdr32_Ext3eDaSl2pUZS97UX6A_full_IMG_6612.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Polyamide 6 (Nylon 6) is widely used engineering thermoplastic characterized by its high toughness and strength. It provides parts with good damping characteristics as well as high shock resistance in both dry state and low temperatures. PA6 is distinguished by its particularly high impact resistance and machinability.",
			  "yieldStrength": "51.2 - 63.8",
			  "elongationAtBreak": "200-300",
			  "hardness": "16.4-18.1 HV",
			  "corrosionResistance": null
			},
			{
			  "name": "PA 6 GF30",
			  "shortDescription": "Glass-reinforced nylon has higher tensile strength than un-reinforced nylon while still benifitting from its flexibility. Very tough.",
			  "image": null,
			  "engineeringComment": "This glass filled Nylon exhibit increased structural and impact strength and rigidity compared to Nylon 6. The addition of glass fiber increases the tensile strength, stiffness, compressive strength of Nylon 6 and a lowers its thermal expansion coefficient.",
			  "yieldStrength": "111 - 137",
			  "elongationAtBreak": "2.81 - 4.05",
			  "hardness": "35.6 - 39.4 HV",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Brass",
		  "shortDescription": "Low friction, excellent electrical conductivity, golden appearance.",
		  "longDescription": "Brass is a metal alloy with good machinability and excellent electrical conductivity. Ideal for applications that require low friction.",
		  "orderWithinTechnology": 5,
		  "url": "/cnc-machining/metal/brass",
		  "headerImage": {
			"title": "CexQx7nQaxLF3s9rENug_Brass-2.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/91e3ebdff93a50c7296186e80901c622245b5bc838cc341b9f4151130459fc99/582cafe4d29e1a76c8a49752b0169aad/CexQx7nQaxLF3s9rENug_Brass-2.png",
			  "details": {
				"size": 694125,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "CexQx7nQaxLF3s9rENug_Brass-2.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Brass C360",
			  "shortDescription": "Brass C360 (CNC) is highly machinable alloy with good tensile strength and natural corrosion resistance. Ideal for parts that require low friction.",
			  "image": {
				"title": "HPjh0DJwRduaCmpFPNco_JEyszESDWy00iWz1djgg_full_Brass C360.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/53c0f3472e8aa22ef925f6908038a64fd85a3fda542712a0b7207ba5c6f8727d/713dc6ea3bd38a88c00f7bc8c42ce19b/HPjh0DJwRduaCmpFPNco_JEyszESDWy00iWz1djgg_full_Brass_C360.jpg",
				  "details": {
					"size": 558623,
					"image": {
					  "width": 3000,
					  "height": 1675
					}
				  },
				  "fileName": "HPjh0DJwRduaCmpFPNco_JEyszESDWy00iWz1djgg_full_Brass C360.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": null,
			  "yieldStrength": null,
			  "elongationAtBreak": "23",
			  "hardness": null,
			  "corrosionResistance": "Moderate"
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "ABS",
		  "shortDescription": "Common thermoplastic, impact resistant, easy to machine.",
		  "longDescription": "ABS is a common thermoplastic with all-around good mechanical properties, excellent impact strength, good heat resistance and good machinability.",
		  "orderWithinTechnology": 11,
		  "url": "/cnc-machining/plastic/abs",
		  "headerImage": {
			"title": "CimXJAZCStKre3DDcF5e_ABS-2.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/d5f0d301e4c4a90b7149b416c2bfb2525e2f25e52f0f111742e1cec9fea2c4c0/5937a806f68dc9db4de5d685d245ce4a/CimXJAZCStKre3DDcF5e_ABS-2.png",
			  "details": {
				"size": 303860,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "CimXJAZCStKre3DDcF5e_ABS-2.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "ABS",
			  "shortDescription": "ABS (CNC) has good mechanical properties and excellent impact resistance. It is commonly used to prototype parts prior to injection-molding.",
			  "image": {
				"title": "UNoS9vmSj2STnDu76bJG_ABS.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/0b0bc16c4db57895ba3fbbc3b835b3f344f5c828f7aae1b7d6737feba5bba7a7/37d8f0fe695c297afef8459a24567f36/UNoS9vmSj2STnDu76bJG_ABS.jpg",
				  "details": {
					"size": 1864664,
					"image": {
					  "width": 4339,
					  "height": 2712
					}
				  },
				  "fileName": "UNoS9vmSj2STnDu76bJG_ABS.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "ABS is tough, resilient, allows detailed moldings, and is non-toxic. It is known for its low cost and ease of machining, molding and even 3D printing. ",
			  "yieldStrength": "18.5 - 51",
			  "elongationAtBreak": "10 - 50",
			  "hardness": "5.6 - 15.3 HV",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "PEEK",
		  "shortDescription": "High-performance thermoplastic, very high strength, thermal and chemical resistant.",
		  "longDescription": "PEEK is a high-performance engineering thermoplastic with excellent mechanical properties and chemical over a very wide temperature range.",
		  "orderWithinTechnology": 12,
		  "url": "/cnc-machining/plastic/peek",
		  "headerImage": {
			"title": "e2XZUrPSQjGe7fCQ9kxw_PEEK-2.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/1f299b33f230ee3ca75105424a85142e557b80cb835918d2b5511c5f68fdeb0b/0a6df785fb4744dfbe391fddb019da7a/e2XZUrPSQjGe7fCQ9kxw_PEEK-2.png",
			  "details": {
				"size": 483816,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "e2XZUrPSQjGe7fCQ9kxw_PEEK-2.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "PEEK",
			  "shortDescription": "PEEK (CNC) is an engineering thermoplastic with excellent mechanical and thermal properties. Can be used to replace metal parts. Biocompatible.",
			  "image": {
				"title": "Zkb9g0OMTaiZBZLHosZK_PEEK.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/2ac1a9e7c73fa3b46071d0609f68fcad72fd7b4eaa0fa87dc1bebbbf332a0461/cc25e0da40ac7534bcea1dd6d6639f80/Zkb9g0OMTaiZBZLHosZK_PEEK.jpg",
				  "details": {
					"size": 2829487,
					"image": {
					  "width": 4287,
					  "height": 2796
					}
				  },
				  "fileName": "Zkb9g0OMTaiZBZLHosZK_PEEK.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Polyether ether ketone (PEEK) is a colourless organic thermoplastic polymer used in engineering applications. It is semicrystalline thermoplastic with excellent mechanical and chemical resistance properties that are retained at high temperatures. It offers hydrolysis resistance to steam, water, and sea water. ",
			  "yieldStrength": "87 - 95",
			  "elongationAtBreak": "30 - 150",
			  "hardness": "26.1 - 28.5 HV",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Polycarbonate",
		  "shortDescription": "High toughness, excellent impact strength, transparent.",
		  "longDescription": "Polycarbonate (PC) is a thermoplastic with high toughness, excellent impact strength and good machinability. Can be optically transparent.",
		  "orderWithinTechnology": 15,
		  "url": "/cnc-machining/plastic/polycarbonate",
		  "headerImage": {
			"title": "2WJdqQg7RiOeVT3KqnCt_PC-2.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/6c2edb1ba57ff787e37d95db0ee395968193a2c7dd4f6eadbb829bf87c61f04c/7271450ed9085d9aeeb087218ef27e0a/2WJdqQg7RiOeVT3KqnCt_PC-2.png",
			  "details": {
				"size": 836733,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "2WJdqQg7RiOeVT3KqnCt_PC-2.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Plastic",
			"headerImage": {
			  "title": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/6fc48eccd128136934bd9a9765b48665f8810d25885168e678214913056689df/0bafad6707e34458c8687d7b5ca0ed22/2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "2a94c042-355b-4511-8568-cbd9b98c4948_render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of plastics for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "plastic",
			"url": "/cnc-machining/plastic",
			"renderImage": {
			  "title": "Render of CNC-machined part in plastic",
			  "description": "Render of CNC-machined part in plastic",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/1jTlmZItd8AAmqaeyMCiaE/04b178eb1bef4b14dbc8ee5789356201/render-plastic-cnc.png",
				"details": {
				  "size": 1076109,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-plastic-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "PC",
			  "shortDescription": "Polycarbonate (CNC) - PC - has excellent impact strength and good temperature resistance. Suitable for outdoor applications. Can be colored or semi-transparent.",
			  "image": {
				"title": "wcbWTLJYRHKA0ltbCNIA_Polycarbonate.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/7c36563a6d226069bec4403138e888fadee617b3d150baf86591e8235beb5654/7c41aa0089b4f86ec828af5a35fc4b3a/wcbWTLJYRHKA0ltbCNIA_Polycarbonate.jpg",
				  "details": {
					"size": 1001985,
					"image": {
					  "width": 3317,
					  "height": 2220
					}
				  },
				  "fileName": "wcbWTLJYRHKA0ltbCNIA_Polycarbonate.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Polycarbonate is one of the most widely used thermoplastic materials. It is the preferred choice of many designers and engineers because it provides design freedom, capability to maintain color and strength over time.",
			  "yieldStrength": "59- 70",
			  "elongationAtBreak": "50 - 120",
			  "hardness": "17.7 - 21.7 HV",
			  "corrosionResistance": null
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Aluminum",
		  "shortDescription": "High machinability and ductility, good strength-to-weight ratio.",
		  "longDescription": "Aluminum alloys have good strength-to-weight ratio, high thermal and electrical conductivity, low density and natural corrosion resistance. Can be anodized.",
		  "orderWithinTechnology": 1,
		  "url": "/cnc-machining/metal/aluminum",
		  "headerImage": {
			"title": "uFNUWUiRN21HQpF6QOua_Aluminum-2.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/9789e907baf715f395c1d54dc2e9e6a4aa496ae51ee83100d67e15eecdbb69f7/914e88a4efd2cea637503d9a966ccfab/uFNUWUiRN21HQpF6QOua_Aluminum-2.png",
			  "details": {
				"size": 665852,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "uFNUWUiRN21HQpF6QOua_Aluminum-2.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Aluminum 6061-T6",
			  "shortDescription": "Aluminum 6061 (CNC) is the most popular aluminum alloy. It has good strength-to-weight ratio, excellent machinability and natural corrosion resistance.",
			  "image": {
				"title": "a0120b57-9f5d-4fd2-a3a1-eb8b994ccbe0_checkout-cnc-aluminum.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/3e920807a7a716572d0a3358ae7386df26882d0ffe0f9f523c6e6f04a9d7882c/aed2b224d069eaefc11c34051a044966/a0120b57-9f5d-4fd2-a3a1-eb8b994ccbe0_checkout-cnc-aluminum.jpg",
				  "details": {
					"size": 464247,
					"image": {
					  "width": 2448,
					  "height": 1633
					}
				  },
				  "fileName": "a0120b57-9f5d-4fd2-a3a1-eb8b994ccbe0_checkout-cnc-aluminum.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "This grade is one of the most common alloys of aluminium. It is very widly used in many industries as well as for general purpose usage. It offers good weldabily, good corrosion resistance, workability and machinablity. It is one of the most common grades for extrusion, but its mechanical properties makes it ideal for many others applications. ",
			  "yieldStrength": "193 - 290",
			  "elongationAtBreak": "12 - 17",
			  "hardness": "60 HRB",
			  "corrosionResistance": "High"
			},
			{
			  "name": "Aluminum MIC6",
			  "shortDescription": "Aluminum MIC6 is a light weight material that can be easily machined at high speed and is free from tension, contaminants and porosity.",
			  "image": {
				"title": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/b9390cb3c2eaa0187f5a8149db45ccf2dc1305486156dde5d59fc6b77b10ae28/41518d0c219da689194b6722e2b8d562/Tnuc4tEdQZWmv0dmQOPm_cnc_milling_-_Aluminium_2.jpg",
				  "details": {
					"size": 233869,
					"image": {
					  "width": 3578,
					  "height": 2236
					}
				  },
				  "fileName": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "MIC-6 is a cast aluminum plate that is a blend of different metals. It provides excellent accuracy and machinability. MIC-6 is produced by casting which results in stress relieving properties. Additionally, it is light weight, smooth and free from tension, contaminants and porosity.",
			  "yieldStrength": "105",
			  "elongationAtBreak": "3",
			  "hardness": "65 HB",
			  "corrosionResistance": "Good"
			},
			{
			  "name": "Aluminum 7050",
			  "shortDescription": "Aluminum 7050 has excellent mechanical properties with good ductility, high strength, toughness and good resistance to fatigue. Suitable for aerospace applications.",
			  "image": {
				"title": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/b9390cb3c2eaa0187f5a8149db45ccf2dc1305486156dde5d59fc6b77b10ae28/41518d0c219da689194b6722e2b8d562/Tnuc4tEdQZWmv0dmQOPm_cnc_milling_-_Aluminium_2.jpg",
				  "details": {
					"size": 233869,
					"image": {
					  "width": 3578,
					  "height": 2236
					}
				  },
				  "fileName": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Aluminum 7050 is known as a commercial aerospace alloy. It is heat treatable and has a high toughness, strong mechanical strength and good stress corrosion cracking resistance. ",
			  "yieldStrength": "455 - 490",
			  "elongationAtBreak": "11",
			  "hardness": "147 HB",
			  "corrosionResistance": "Good"
			},
			{
			  "name": "Aluminum 6063",
			  "shortDescription": "Aluminum 6063 has good mechanical properties and can be heat treated. Suitable for aerospace applications. Can be welded.",
			  "image": {
				"title": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/b9390cb3c2eaa0187f5a8149db45ccf2dc1305486156dde5d59fc6b77b10ae28/41518d0c219da689194b6722e2b8d562/Tnuc4tEdQZWmv0dmQOPm_cnc_milling_-_Aluminium_2.jpg",
				  "details": {
					"size": 233869,
					"image": {
					  "width": 3578,
					  "height": 2236
					}
				  },
				  "fileName": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Aluminium alloy 6063 is a medium strength alloy commonly referred to as an architectural alloy. It has very good corrosion resistance and is suitable for decorative anodising. This alloy of aluminium is also known as an extrusion alloy. ",
			  "yieldStrength": "49 - 270",
			  "elongationAtBreak": "12",
			  "hardness": "25 - 95 HB",
			  "corrosionResistance": "High"
			},
			{
			  "name": "Aluminum 5052",
			  "shortDescription": "Aluminum 5052 is a strain hardening aluminum alloy with excellent corrosion resistance. Suitable for marine applications. Can be welded.",
			  "image": {
				"title": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/b9390cb3c2eaa0187f5a8149db45ccf2dc1305486156dde5d59fc6b77b10ae28/41518d0c219da689194b6722e2b8d562/Tnuc4tEdQZWmv0dmQOPm_cnc_milling_-_Aluminium_2.jpg",
				  "details": {
					"size": 233869,
					"image": {
					  "width": 3578,
					  "height": 2236
					}
				  },
				  "fileName": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Aluminum 5052 alloy is high magnesium alloys and like all 5000-series has a fairly high strength. It can be hardened to a significant degree by cold working, therefore enabling a series of “H” tempers. However, it is not heat treatable. It has good corrosion resistance, especially to salt water.",
			  "yieldStrength": "75 - 280",
			  "elongationAtBreak": "2 - 22",
			  "hardness": "46 - 83 HB",
			  "corrosionResistance": "Good"
			},
			{
			  "name": "Aluminum 2017",
			  "shortDescription": "Aluminum 2017 has a higher ductility and formability than Aluminum 2014 and has intermediate strength.",
			  "image": {
				"title": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/b9390cb3c2eaa0187f5a8149db45ccf2dc1305486156dde5d59fc6b77b10ae28/41518d0c219da689194b6722e2b8d562/Tnuc4tEdQZWmv0dmQOPm_cnc_milling_-_Aluminium_2.jpg",
				  "details": {
					"size": 233869,
					"image": {
					  "width": 3578,
					  "height": 2236
					}
				  },
				  "fileName": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Aluminum 2017 is a heat-treatable alloy with fair workability and formability. Welding is possible for this alloy, but it reduces its corrosion resistance, therefore heat treatment is required afterwards to restore it. ",
			  "yieldStrength": "76 - 280",
			  "elongationAtBreak": "14 - 22",
			  "hardness": "80 - 110 HB",
			  "corrosionResistance": "Fair"
			},
			{
			  "name": "Aluminum 2014",
			  "shortDescription": "Aluminum 2014 is easily machined and can be hardened to get strengths comparable to steel, but is prone to corrosion. Suitable for aerospace applications.",
			  "image": {
				"title": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/b9390cb3c2eaa0187f5a8149db45ccf2dc1305486156dde5d59fc6b77b10ae28/41518d0c219da689194b6722e2b8d562/Tnuc4tEdQZWmv0dmQOPm_cnc_milling_-_Aluminium_2.jpg",
				  "details": {
					"size": 233869,
					"image": {
					  "width": 3578,
					  "height": 2236
					}
				  },
				  "fileName": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Aluminum 2014 is a high strength alloy which is widly used in the aerospace industry. It has good machinability in certain tempers. It is commonly extruded in bars and profiles. ",
			  "yieldStrength": "100 - 440",
			  "elongationAtBreak": "2 - 16",
			  "hardness": "90 - 135 HB",
			  "corrosionResistance": "Poor"
			},
			{
			  "name": "Aluminum 2024",
			  "shortDescription": "Aluminum 2024 is a high-strength alloy with excellent fatigue resistance. Suitable for aerospace applications.",
			  "image": {
				"title": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/b9390cb3c2eaa0187f5a8149db45ccf2dc1305486156dde5d59fc6b77b10ae28/41518d0c219da689194b6722e2b8d562/Tnuc4tEdQZWmv0dmQOPm_cnc_milling_-_Aluminium_2.jpg",
				  "details": {
					"size": 233869,
					"image": {
					  "width": 3578,
					  "height": 2236
					}
				  },
				  "fileName": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Alloy 2024 is one of the most prominent aluminium alloys. It has good fatigue resistance and strength, excellent toughness at moderate to high strength levels and improved fracture toughness. All these characteristics make it qualified for aerospace and military applications. The alloy is available in T3, T4 and T8 tempers and in the annealed state.",
			  "yieldStrength": "100 - 490",
			  "elongationAtBreak": "14 - 20",
			  "hardness": "70 - 120 HB",
			  "corrosionResistance": "Poor"
			},
			{
			  "name": "Aluminum 6082",
			  "shortDescription": "Aluminum 6082 (CNC) has very similar composition and properties to 6061, with slightly higher tensile strength. Compliant with British Standards.",
			  "image": {
				"title": "et2YaZUPT3m9aXdv8JUl_Al 6082.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/289cea61ebd10c44c2180b64b5e407fa2cc534ff41fd2338f446da602ce74e85/33058225a6ec2fc94617ae1c1a9dde69/et2YaZUPT3m9aXdv8JUl_Al_6082.jpg",
				  "details": {
					"size": 80305,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "et2YaZUPT3m9aXdv8JUl_Al 6082.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "6082 is famous for its excellent corrosion resistance, high strength - the highest of the 6000 series alloys which makes it highly used in stressed applications.. As a relatively new alloy it can replace 6061 in many applications. It is a common material for machining, even though it is difficult to produce thin walls.",
			  "yieldStrength": "240 - 290",
			  "elongationAtBreak": "6.3 - 18",
			  "hardness": "35-56 HRB",
			  "corrosionResistance": "Excellent"
			},
			{
			  "name": "Aluminum 5083",
			  "shortDescription": "Aluminum 5083 (CNC) is a strain hardening aluminum alloy with excellent corrosion resistance. Suitable for marine applications. Can be welded.",
			  "image": {
				"title": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/b9390cb3c2eaa0187f5a8149db45ccf2dc1305486156dde5d59fc6b77b10ae28/41518d0c219da689194b6722e2b8d562/Tnuc4tEdQZWmv0dmQOPm_cnc_milling_-_Aluminium_2.jpg",
				  "details": {
					"size": 233869,
					"image": {
					  "width": 3578,
					  "height": 2236
					}
				  },
				  "fileName": "Tnuc4tEdQZWmv0dmQOPm_cnc milling - Aluminium 2.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "5083 aluminium alloy is a good choice for extreme environments due to its resistivity to salty water, chemicals, attacks. It has relatively high strength and good corrosion resistance. This alloy stands out because it is not hardenable by heat treatment. Due to its high strength it has limited complexity of shapes that can be machined, but it has excellent weldability. ",
			  "yieldStrength": "110 - 160",
			  "elongationAtBreak": "13",
			  "hardness": "74 HV",
			  "corrosionResistance": "Excellent"
			},
			{
			  "name": "Aluminum 7075-T6",
			  "shortDescription": "Aluminum 7075-T6 (CNC) is an aerospace-grade material with excellent strength-to-weight ratio and strength and hardness comparable to steels. ",
			  "image": {
				"title": "cBP7QEo3TbeFr32Zmf7U_cnc milling - Aluminium 7075.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/527846112e6bac62172018554d8a989b69ba055ec21cdfa7a805685e370ee764/9058de198fde77e53ea58bae248b55b4/cBP7QEo3TbeFr32Zmf7U_cnc_milling_-_Aluminium_7075.jpg",
				  "details": {
					"size": 149888,
					"image": {
					  "width": 2529,
					  "height": 1581
					}
				  },
				  "fileName": "cBP7QEo3TbeFr32Zmf7U_cnc milling - Aluminium 7075.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "This grade of aluminum is also know as aircraft or aerospace aluminum due its most common application. The dominant element of 7075 alloys is zinc. Its high strength makes is stand out from the other aluminium alloys and be comparable to the strength of many steels. Even though it has convinent combination of properties for many applications, 7075-T6 compared to other aluminium alloys has lower corrosion resistance, but very good machinability",
			  "yieldStrength": "359 - 530",
			  "elongationAtBreak": "2 - 11",
			  "hardness": "79-86 HRB",
			  "corrosionResistance": "Moderate"
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Stainless steel",
		  "shortDescription": "High tensile strength, corrosion and temperature resistant.",
		  "longDescription": "Stainless steel alloys have high strength, ductility, wear and corrosion resistance. They can be easily welded, machined and polished.",
		  "orderWithinTechnology": 2,
		  "url": "/cnc-machining/metal/stainless-steel",
		  "headerImage": {
			"title": "XTldifonQEeU5dJ4br7F_Stainless steel-2.png",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/5d792f03809445eb15ecd94a81cc59582f7bdc33461ab130a451420cca7b8b48/a1ae3acac2bf1c0a2fbdfe99cbe3e6e4/XTldifonQEeU5dJ4br7F_Stainless_steel-2.png",
			  "details": {
				"size": 366258,
				"image": {
				  "width": 1920,
				  "height": 760
				}
			  },
			  "fileName": "XTldifonQEeU5dJ4br7F_Stainless steel-2.png",
			  "contentType": "image/png"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Stainless steel 440C",
			  "shortDescription": "Stainless steel 440C has improved toughness and corrosion resistance due to Carbon and Chromium content.",
			  "image": {
				"title": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/13cbd4def05a8ca17117f11828a260aa318b5ef44823c32de0d49516e4e14110/7af8d3f5db5c4a61ee71110e9d534b61/NJuIlMyqSwuUJAcHd2Eu_SS_303.jpg",
				  "details": {
					"size": 134133,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "This high carbon martensitic stainless steel has a high strength, moderate corrosion resistance and good hardness and wear resistance. After heat treatment, this steel is capable of attaining the highest strength, hardness and wear resistance of all the stainless alloys. This is due to its high carbon content. This makes 440C very well suited for ball bearing and valve parts. ",
			  "yieldStrength": "450 - 1900",
			  "elongationAtBreak": "2 - 14",
			  "hardness": "50 - 63 HRC",
			  "corrosionResistance": "Moderate"
			},
			{
			  "name": "Stainless steel 416",
			  "shortDescription": "Stainless steel 416 is magnetic and has a high machinability. ",
			  "image": {
				"title": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/13cbd4def05a8ca17117f11828a260aa318b5ef44823c32de0d49516e4e14110/7af8d3f5db5c4a61ee71110e9d534b61/NJuIlMyqSwuUJAcHd2Eu_SS_303.jpg",
				  "details": {
					"size": 134133,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Stainless steel 416 is a martensitic steel alloy with added sulphur that gives it the highest machinability of all stainless steels. On the other hand, corrosion resistance, formability and weldability are limited. Type 416 steels are available in highly tempered, hardened or unhardened forms.",
			  "yieldStrength": "600 - 983",
			  "elongationAtBreak": "9 - 20",
			  "hardness": "20 - 40 HRC",
			  "corrosionResistance": "Moderate"
			},
			{
			  "name": "Stainless steel 301",
			  "shortDescription": "Stainless steel 301 is corrosion resistant similar to Stainless steel 304.",
			  "image": {
				"title": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/13cbd4def05a8ca17117f11828a260aa318b5ef44823c32de0d49516e4e14110/7af8d3f5db5c4a61ee71110e9d534b61/NJuIlMyqSwuUJAcHd2Eu_SS_303.jpg",
				  "details": {
					"size": 134133,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Type 301 is a good choice for decorative structural applications because of its bright attractive surface as well as resistance to atmosphere corrosion. It is well suited for welding, forming and drawing. This high strength grade of steel is available in several conditions or tempers.",
			  "yieldStrength": "230 - 1080",
			  "elongationAtBreak": "7.4 - 46",
			  "hardness": "190 - 440 HB",
			  "corrosionResistance": "Excellent"
			},
			{
			  "name": "Stainless steel 420",
			  "shortDescription": "Stainless steel 420 provides high strength and corrosion resistance. It is the hardest of all stainless steels when hardened.",
			  "image": {
				"title": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/13cbd4def05a8ca17117f11828a260aa318b5ef44823c32de0d49516e4e14110/7af8d3f5db5c4a61ee71110e9d534b61/NJuIlMyqSwuUJAcHd2Eu_SS_303.jpg",
				  "details": {
					"size": 134133,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "This 420 Grade is martensitic stainless steel that provides good corrosion resistance, strength and hardness. Like any other stainless steel, grade 420 can also be hardened through heat treatment. It is magnetic in the annealed and hardened version. Excellent corrosion resistance properties are achieved when the metal is polished, surface grounded or hardened. ",
			  "yieldStrength": "340 - 495",
			  "elongationAtBreak": "10 - 25",
			  "hardness": "188 - 260 HV",
			  "corrosionResistance": "Moderate"
			},
			{
			  "name": "Stainless steel 2205 Duplex",
			  "shortDescription": "Stainless steel 2205 Duplex (CNC) is the alloy with the highest strength and hardness. Suitable for applications in severe environments up to 300°C.",
			  "image": {
				"title": "uVOn3R3vT72W1TRLRBpp_SS 2205.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/81802f2ab0dcf7e0115a2a1c81a342de221c5ef5f2526175fa13264a93efd614/f52ba840811317ddf289f2f44937ef7d/uVOn3R3vT72W1TRLRBpp_SS_2205.jpg",
				  "details": {
					"size": 113410,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "uVOn3R3vT72W1TRLRBpp_SS 2205.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "This austenitic-ferritic - Duplex provides excellent corrosion resistance, particularly stress corrosion cracking, corrosion fatigue and erosion and ensures high strength. This properties are due to its microstructure of roughly equal amounts of ferrite and austenite and the high chromium and molybdenum content of the chemical composition.",
			  "yieldStrength": "450 - 510",
			  "elongationAtBreak": "20 - 25",
			  "hardness": "22-31 HRC",
			  "corrosionResistance": "Excellent"
			},
			{
			  "name": "Stainless steel 17-4",
			  "shortDescription": "Stainless steel 17-4 (CNC) - SAE grade 630 - is a precipitation hardening alloy with good corrosion resistance. Can be hardened up to 44 HRC.",
			  "image": {
				"title": "b47pF6gRHm6FryHxIt2Q_SS 17-4.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/4f353ddce289dac033e05c2e6ad932c1dc317383f6a3d107bbd8124302e06c54/ee9331be8ff1523e0e2624e22d40fe82/b47pF6gRHm6FryHxIt2Q_SS_17-4.jpg",
				  "details": {
					"size": 120773,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "b47pF6gRHm6FryHxIt2Q_SS 17-4.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "The grade 17-4 stainless steel bar is an age-hardening martensitic alloy meaning that  is capable of attaining a wide range of strength and toughness properties depending on the precipitation or aging temperature used in hardening. It is the preferable steel of choice for the engineers and designer because of the amazing combination of high strength, good corrosion resistance and toughness in both base metals and welds. It is also known as 17-4 PH, UNS S17400, and Grade 630.",
			  "yieldStrength": "827 - 914",
			  "elongationAtBreak": "6 - 6.97",
			  "hardness": "250 - 260 HV",
			  "corrosionResistance": "Excellent"
			},
			{
			  "name": "Stainless steel 303",
			  "shortDescription": "Stainless steel 303 (CNC) has excellent toughness, but lower corrosion resistance than 304. Ideal for high volumes, due to its excellent machinability.",
			  "image": {
				"title": "IrtuZnqUR7SnvHIud61k_Alloy steel 4340.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/20bcf0393276395b9a929294afae2db3835de8d54ee6ca4eff238786029125ac/39fa8ef4e20fbca3035e12b3e617d944/IrtuZnqUR7SnvHIud61k_Alloy_steel_4340.jpg",
				  "details": {
					"size": 77673,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "IrtuZnqUR7SnvHIud61k_Alloy steel 4340.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Grade 303 is the most readily machineable of all the austenitic grades of stainless steel. It is basically the machining modification os stainless steel 304. This property is due to the higher sulphur presence into the chemical composition. The sulphur presence improves the machinability but slightly lower the corrosion resistance and the toughness compared to the one of stainless steel 304. ",
			  "yieldStrength": "204 - 280",
			  "elongationAtBreak": "35 - 55",
			  "hardness": "81 - 96 HRB",
			  "corrosionResistance": "Moderate"
			},
			{
			  "name": "Stainless steel 430",
			  "shortDescription": "Stainless steel 430 is magnetic and corrosion resistant.",
			  "image": {
				"title": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/13cbd4def05a8ca17117f11828a260aa318b5ef44823c32de0d49516e4e14110/7af8d3f5db5c4a61ee71110e9d534b61/NJuIlMyqSwuUJAcHd2Eu_SS_303.jpg",
				  "details": {
					"size": 134133,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "NJuIlMyqSwuUJAcHd2Eu_SS 303.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Stainless steel 430 is one of the most widely used \"non-hardenable\" stainless steels. It has good corrosion resistance, formability, ductility and is magnetic in all conditions. It is well suited in chemical applications due to its resistance to nitric attack and is a very popular choice for domestic appliances and decorative trim. ",
			  "yieldStrength": "260 - 483",
			  "elongationAtBreak": "20 - 25",
			  "hardness": "85 - 90 HRB",
			  "corrosionResistance": "Good"
			},
			{
			  "name": "Stainless steel 15-5",
			  "shortDescription": "Stainless steel 15-5 has a higher toughness than 17-4, better corrosion resistance and transverse properties compared to other similar martensitic grades.",
			  "image": {
				"title": "b47pF6gRHm6FryHxIt2Q_SS 17-4.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/4f353ddce289dac033e05c2e6ad932c1dc317383f6a3d107bbd8124302e06c54/ee9331be8ff1523e0e2624e22d40fe82/b47pF6gRHm6FryHxIt2Q_SS_17-4.jpg",
				  "details": {
					"size": 120773,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "b47pF6gRHm6FryHxIt2Q_SS 17-4.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "15-5 stainless steel provides good toughness and even better corrosion resistance compared to 17-4 stainless steel. It is able to meet the stringent mechanical properties required in aerospace and nuclear applications which often make it the first choice for fasteners and structural components in these industries. ",
			  "yieldStrength": "590 - 1393",
			  "elongationAtBreak": "10 - 16",
			  "hardness": "40 - 46 HRC",
			  "corrosionResistance": "Good"
			},
			{
			  "name": "Stainless steel 304L",
			  "shortDescription": "Stainless steel 304L (CNC) has excellent mechanical properties and good machinability. Resistant to most environments and corrosive media.",
			  "image": {
				"title": "f7Jb5HK2QWmqAXWizoLm_SS 304.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/302064a1334536f55bdc6bf77379f6a23bd23484d99d9176d1766ee5bd8db126/6bb231517043f08aba8f76fd48afa3f9/f7Jb5HK2QWmqAXWizoLm_SS_304.jpg",
				  "details": {
					"size": 2597289,
					"image": {
					  "width": 3353,
					  "height": 2318
					}
				  },
				  "fileName": "f7Jb5HK2QWmqAXWizoLm_SS 304.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "Stainless steel 304 is the most common stainless steel. It is essentially non-magnetic steel and it is less electrically and thermally conductive than carbon steel. It is wildly used because it easily formed in various shapes. It is machinable and weldable. Other names for this steel are: A2 stainless steel, 18/8 stainless steel, UNS S30400, 1.4301. 304L stainless steel is the low carbon version of stainless steel 304.",
			  "yieldStrength": "190 - 310",
			  "elongationAtBreak": "45 - 60",
			  "hardness": "75-83 HRB",
			  "corrosionResistance": "Good"
			},
			{
			  "name": "Stainless steel 316L",
			  "shortDescription": "Stainless steel 316L (CNC) has similar mechanical properties to 304, with higher corrosion and chemical resistance. Ideal for marine applications.",
			  "image": {
				"title": "jGTdgzYkTiqPToAqQV1h_SS 316.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/7ac6cd67abbdf2990e762e86f42cfd91f82391cf630e41a6548f9d363d7858a4/f7d246927e5c33185af4bfefe27207b4/jGTdgzYkTiqPToAqQV1h_SS_316.jpg",
				  "details": {
					"size": 52671,
					"image": {
					  "width": 1536,
					  "height": 960
					}
				  },
				  "fileName": "jGTdgzYkTiqPToAqQV1h_SS 316.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "The second most used stainless steel after 304, the general purpose austenitic stainless steel 316 has superior corrosion resistance particularly in chloride containing environments and good elevated temperature strength. The low carbon version 316L has even better corrosion resistance in welded structures.",
			  "yieldStrength": "170 - 310",
			  "elongationAtBreak": "30 - 50",
			  "hardness": "75 - 83 HRB",
			  "corrosionResistance": "Excellent"
			}
		  ]
		},
		{
		  "technology": {
			"name": "CNC machining",
			"url": "/cnc-machining",
			"slug": "cnc-machining"
		  },
		  "name": "Mild steel",
		  "shortDescription": "High machinability and weldability, high stiffness.",
		  "longDescription": "Mild steels are low-carbon metal alloys offering good mechanical properties, machinability and weldability at low cost. Can be carburized to increased hardness.",
		  "orderWithinTechnology": 3,
		  "url": "/cnc-machining/metal/mild-steel",
		  "headerImage": {
			"title": "Mild steel",
			"file": {
			  "url": "//images.ctfassets.net/q2hzfkp3j57e/6O6L4rsN6naCqgTw7gBKQf/971e816fe11e07c81a06ff9696bce25d/DSC00372.jpg",
			  "details": {
				"size": 450267,
				"image": {
				  "width": 2448,
				  "height": 1633
				}
			  },
			  "fileName": "DSC00372.jpg",
			  "contentType": "image/jpeg"
			}
		  },
		  "materialType": {
			"name": "Metal",
			"headerImage": {
			  "title": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/c90a5ec0b340b98ccdfe1e2f20b147f948c381b5060c6789dd541e0b0cfb951e/626f0df0e2f65daebe22c521521a7df1/1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "1e84022b-29ad-4670-96be-8541d5096d26_render-metal-cnc.png",
				"contentType": "image/png"
			  }
			},
			"longDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"shortDescription": "A wide range of metals for CNC machining, with applications in multiple industries. Ideal for both one-off prototypes and end-use custom parts.",
			"slug": "metal",
			"url": "/cnc-machining/metal",
			"renderImage": {
			  "title": "Render of CNC-machined part in Metal",
			  "description": "Render of CNC-machined part in Metal",
			  "file": {
				"url": "//images.ctfassets.net/q2hzfkp3j57e/2DpQCh0doM8SQaW68UMCiA/e6a6eb26ffdcd492775f812ffa859d87/render-metal-cnc.png",
				"details": {
				  "size": 1887025,
				  "image": {
					"width": 1920,
					"height": 1449
				  }
				},
				"fileName": "render-metal-cnc.png",
				"contentType": "image/png"
			  }
			}
		  },
		  "showInMaterialPages": true,
		  "subsets": [
			{
			  "name": "Mild steel 1045",
			  "shortDescription": "Mild steel 1045 (CNC) is a medium carbon steel with good weldability and machinability, high strength and good impact resistance. Susceptible to corrosion.",
			  "image": {
				"title": "SVa4pgu9R7m6DbS5sgXB_Mild steel 1045.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/a4e11ce66ce48b0a01572e5dc4f8e59c095e81a12ca0b498d0eb8948e91f37ea/4a27b29d1d72bc2e38ee6ad193a41012/SVa4pgu9R7m6DbS5sgXB_Mild_steel_1045.jpg",
				  "details": {
					"size": 1148969,
					"image": {
					  "width": 3298,
					  "height": 2318
					}
				  },
				  "fileName": "SVa4pgu9R7m6DbS5sgXB_Mild steel 1045.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "1045 is a medium tensile carbon steel with good strength and impact properties. It has reasonably good weldability in the hot rolled or normalised condition.As a disadvantage, this material has low hardening capabilities. ",
			  "yieldStrength": "330 - 580",
			  "elongationAtBreak": "13 - 18",
			  "hardness": "84 HRB",
			  "corrosionResistance": "Poor"
			},
			{
			  "name": "Mild steel A36",
			  "shortDescription": "Mild steel A36 (CNC) is a common structural steel with good weldability. Suitable for a variety of industrial applications. Susceptible to corrosion.",
			  "image": {
				"title": "ltB1JG7S9uPATr0hF7m0_Mild steel A36.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/5a0107cf2de34f63e0356f9fa3028097eab280f5dd83093abe27d60888f89259/6c1b729ce3c623a8bd51fba1672c6311/ltB1JG7S9uPATr0hF7m0_Mild_steel_A36.jpg",
				  "details": {
					"size": 957752,
					"image": {
					  "width": 3077,
					  "height": 2019
					}
				  },
				  "fileName": "ltB1JG7S9uPATr0hF7m0_Mild steel A36.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "A36 is ASTM established grade and it is most common structural steel. It  is the most commonly used mild and hot-rolled steel. A36 is strong, tough, ductile, formable and weldable and It has excellent properties suitable for grinding, punching, tapping, drilling and machining processes.",
			  "yieldStrength": "250 - 290",
			  "elongationAtBreak": "22",
			  "hardness": "92 HRB",
			  "corrosionResistance": "Poor"
			},
			{
			  "name": "Mild steel 1018",
			  "shortDescription": "Mild steel 1018 (CNC) is a general-use alloy with good machinability, weldability, toughness, strength. Susceptible to corrosion.",
			  "image": {
				"title": "ucTin0ruShyIp6faLwDu_It2tLneoSAKVi7OvSgdf_full_Mild steel 1018.jpg",
				"file": {
				  "url": "//images.ctfassets.net/q2hzfkp3j57e/d108dfbe18b67cc8a958c3e7a386af1494b36c66bfb94ab93570817246fdd20f/82e18a77b7f69114891809c25c7cf7ec/ucTin0ruShyIp6faLwDu_It2tLneoSAKVi7OvSgdf_full_Mild_steel_1018.jpg",
				  "details": {
					"size": 525996,
					"image": {
					  "width": 3000,
					  "height": 1952
					}
				  },
				  "fileName": "ucTin0ruShyIp6faLwDu_It2tLneoSAKVi7OvSgdf_full_Mild steel 1018.jpg",
				  "contentType": "image/jpeg"
				}
			  },
			  "engineeringComment": "AISI 1018 mild/low carbon steel has good balance of ductility, strength and toughness. It has excellent weldability  and it is considered the best steel for carburizing parts. ",
			  "yieldStrength": "240 - 400",
			  "elongationAtBreak": "17 - 27",
			  "hardness": "76 HRB",
			  "corrosionResistance": "Poor"
			}
		  ]
		}
	];

    return $data;
}
