import { useState } from "react";
import OpenIconSpeedDial from "./addButton";
import Texteditor from "./textEditor";
import Imageeditor from "./imageEditor";
import Codeeditor from "./codeEditor";
import { addContent } from "../../reduxStore/slices/blogwriter/body";
import { useDispatch } from "react-redux";

interface Element{
	id : number;
	type : 'text' | 'image' | 'code';
	content : string;
};

export default function Bodywriter(){

	const [elements, setElements] = useState<Element[]>([]);
	const dispatch = useDispatch();
	const handleAdd = (type : any)=>{
		const el : Element = {
			id : elements.length,
			type : type,
			content : " "
		};
		const els = [...elements, el];
		setElements(els);
		dispatch(addContent(el));
	}

  return(
		<div className="flex-row w-full justify-center gap-8">
			{/* <Editor value={value} setValue={setValue}/> */}
			{
				elements.map((element, id) => {
					if(element.type == 'text'){
						return <Texteditor id={id}/>
					} else if(element.type == 'image'){
						return <Imageeditor id={id}/>
					} else{
						return <Codeeditor id={id}/>
					}
				})
			}
			<OpenIconSpeedDial handleAdd={handleAdd}/>
		</div>
	)
}