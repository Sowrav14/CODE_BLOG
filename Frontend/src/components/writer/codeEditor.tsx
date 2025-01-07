import Editor from '@monaco-editor/react';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useDispatch } from 'react-redux';
import { updateContent } from '../../reduxStore/slices/blogwriter/body';

interface Language{
	name : string;
	path : string;
	value : string;
}

const Langs : Language[] = [
	{
		name : 'javascript',
		path : 'script.js',
		value : '// script here'
	},
	{
		name : 'typescript',
		path : 'ts-script.ts',
		value : '// ts script here'
	},
	{
		name : 'css',
		path : 'style.css',
		value : '/* style here */'
	},
	{
		name : 'html',
		path : 'index.html',
		value : '<!-- html here -->'
	}
]

const Iter : number[] = [0, 1, 2, 3];

interface prop{
	id : number
}
interface Element{
	id : number;
	type : 'text' | 'image' | 'code';
	content : string;
};

export default function Codeeditor({id} : prop) {
	const [contents, setContents] = useState<string>("");
	const [lang, setLang] = useState<number>(0);
	const dispatch = useDispatch();

  const handleLangChange = (
    event: React.MouseEvent<HTMLElement>,
    newLang: number,
  ) => {
    setLang(newLang);
  };
	const handleChange = (value : any)=>{
		setContents(value);
		const newValue : Element = {
			id : id,
			type : 'code',
			content : value
		}
		dispatch(updateContent(newValue))
	}

  return (
		<div className='mb-6'>
			<ToggleButtonGroup
				color="primary"
				size='small'
				value={lang}
				exclusive
				onChange={handleLangChange}
				aria-label="Platform"
    		>
				{
					Iter.map((it) => {
						return <ToggleButton value={it}> {Langs[it].name} </ToggleButton>
					})
				}
    	</ToggleButtonGroup>
      <Editor
				theme='vs-dark'
        height="50vh"
        defaultLanguage={Langs[lang].name}
        defaultValue={Langs[lang].value}
				onChange={handleChange}
				value={contents}
				path={Langs[lang].path}
      />
		</div>
  )
}
