import React, { useState } from 'react';
import Card from './Card';

function Cards(props){
    let courses = props.courses;
    let category = props.category;

    console.log(courses);
    let allCourses = [];

    const [likedCourses,setLikedCourses] = useState([]);

    const getCourses = () =>{
        if(category === 'All'){
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((course)=>{
                    allCourses.push(course);
                });
            });
            return allCourses;
        }
        else{
            return courses[category];
        }   
    }

    return(
        <div  className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card course={course} likedCourse={likedCourses} setLikedCourse={setLikedCourses}/>;
                })
            }
        </div>
    );
}

export default Cards;