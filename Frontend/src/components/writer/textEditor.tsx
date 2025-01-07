
import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch } from 'react-redux';
import { updateContent } from '../../reduxStore/slices/blogwriter/body';

interface prop{
	id : number
}
interface Element{
	id : number;
	type : 'text' | 'image' | 'code';
	content : string;
};


export default function Texteditor({id} : prop){
	const [value, setValue] = useState("");
	const dispatch = useDispatch();

	useEffect(()=>{
		const newValue : Element = {
			id : id,
			type : 'text',
			content : value
		}
		dispatch(updateContent(newValue))
	}, [value]);

  return(
		<div>
			{/* <button onClick={changeHandler}> Save </button> */}
		 	<ReactQuill 
				theme="snow" 
				value={value} 
				onChange={setValue}
				className='h-48 mb-16'
			/>
		</div>
	)
};