import React, { Component } from "react";
import { getCourses } from "../../services/courseDetails";
import {Link} from 'react-router-dom';

class MyCourses extends Component {

	state={
		courses : getCourses(),
	};

	handleEnroll = (course) =>{
		console.log(course._id);
	};

	render(){
		return (
		<>
		<table className="table">
			<thead>
				<tr>
					<th>Course Name</th>
					<th>Course Id</th>
					<th>Teacher</th>
					<th>Time</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{this.state.courses.map(course=>(
					<tr key={course._id}>
						<td>{course.name}</td>
						<td>{course.id}</td>
						<td>{course.teacher}</td>
						<td>{course.time}</td>
						<td><button onClick={()=>this.handleEnroll(course)} className="btn btn-sm">Enroll/Unenroll</button></td>
					</tr>
				))}
			</tbody>
		</table>
	  </>);

	}
}

export default MyCourses;