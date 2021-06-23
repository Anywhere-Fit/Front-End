import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

// import axios from 'axios';

const ClassEditForm = (props) => {


	const [classDetails, setClassDetails] = useState({
		classId:"",
		className:"",
		classType:"",
		startTime:"",
		duration:"",
		Intensity_Level:"",
		Location:"",
 		registered_Attendees:"",
		Max_class_size:"",

	});


	
	const handleChange = (e) => {
        setClassDetails({
            ...classDetails,
            [e.target.name]: e.target.value
        });
    }
	
    const handleSubmit = (e) => {
		e.preventDefault();
		
	}
	
	const { className,
	classType,
	startTime,
	duration,
	Intensity_Level,
	Location,
	 registered_Attendees,
	Max_class_size, } = classDetails;

    return (
	<div className="col">
		<div className="modal-content">
			<form onSubmit={handleSubmit}>
				<div className="modal-header">						
					<h4 className="modal-title">Editing <strong>Class-Details</strong></h4>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Class-Name:</label>
						<input value={className} onChange={handleChange} name="title" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Class-Type:</label>
						<input value={classType} onChange={handleChange} name="director" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Start-Time:</label>
						<input value={startTime} onChange={handleChange} name="genre" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Duration:</label>
						<input value={duration} onChange={handleChange} name="metascore" type="number" className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Intensity-Level:</label>
						<textarea value={Intensity_Level} onChange={handleChange} name="description" className="form-control"></textarea>
					</div>
					<div className="form-group">
						<label>Location:</label>
						<textarea value={Location} onChange={handleChange} name="description" className="form-control"></textarea>
					</div>
						
					<div className="form-group">
						<label>Registered-Attendees:</label>
						<textarea value={registered_Attendees} onChange={handleChange} name="description" className="form-control"></textarea>
					</div>	
					<div className="form-group">
						<label>Class_Size:</label>
						<textarea value={Max_class_size} onChange={handleChange} name="description" className="form-control"></textarea>
					</div>
				</div>
				<div className="modal-footer">			    
					<input type="submit" className="btn btn-info" value="Save"/>
					<input type="button" className="btn btn-default" value="Cancel"/>
					{/* <Link to={`/movies/1`}><input type="button" className="btn btn-default" value="Cancel"/></Link> */}
				</div>
			</form>
		</div>
	</div>);
}

	export default ClassEditForm;