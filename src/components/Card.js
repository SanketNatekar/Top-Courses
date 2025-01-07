import React, { useState } from 'react';
import {FcLike} from 'react-icons/fc';
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

function Card(props) {
    let course = props.course;
    let likedCourse = props.likedCourse;
    let setLikedCourse = props.setLikedCourse;

    //const [isLiked,setLike] = useState(false);

    function clickHandler() {   
        if(likedCourse.includes(course.id)){
            // allready liked so remove like
            //let cid = course.id;
            setLikedCourse((prev) => prev.filter((cid)=>(cid !== course.id ) ));
            toast.warning('like removed');
            //setLike(false);
        }
        else{
            // previously not liked
            if(likedCourse.length === 0){
                setLikedCourse([course.id])
            }
            else{
                setLikedCourse((prev) => [...prev,course.id]);
            }
            toast.success('like added');
            //setLike(true);
        }
    }

  return (
    <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
        <div className='relative '>
            <img src={course.image.url} alt="Course-img" className='' />
            <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourse.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                    }    
                </button>
            </div>
        </div>

        <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>{course.description.substr(0,120)}</p>

        </div>

    </div>
  )
}

export default Card;