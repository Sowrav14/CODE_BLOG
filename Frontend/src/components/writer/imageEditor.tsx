
import { useRef, useState } from 'react';
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

export default function Imageeditor({id} : prop) {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [image, setImage] = useState(
    "https://www.americanexecutivecenters.com/wp-content/uploads/2016/06/Blog.jpg"
  );

  const handleImageclick = () => {
    //@ts-ignore
    inputRef.current?.click();
  }

  return (
    <div className=" w-full gap-8 ">
      <div className='w-full flex justify-center'>
        <div 
        className="lg:w-1/2"
        onClick={handleImageclick}
        >
          <img width={"100%"} height={"auto"} src={image} />
          <input
            className=' invisible'
            type="file"
            ref={inputRef}
            onChange={(e) => {
              const file = e.target.files;
              if (file) {
                // console.log(file[0]);
                // console.log(URL.createObjectURL(file[0]));
                setImage(URL.createObjectURL(file[0]));
                const newValue : Element = {
                  id : id,
                  type : 'image',
                  content : URL.createObjectURL(file[0])
                }
                dispatch(updateContent(newValue))
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
