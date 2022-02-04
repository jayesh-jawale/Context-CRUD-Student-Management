import React from 'react';
import { useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { studentContext } from '../App';

export function AddStudents () {
    // Subscribe to a context
    const studentData = React.useContext(studentContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [batch, setBatch] = useState("");

    const nav = useNavigate();
    
    const handleSubmit = () => {
        const addStudents = {
            name,
            email,
            mobile,
            batch
        }
        studentData.setStudent([...studentData.student, addStudents])
        nav('/all-students')
    }

    return (
    <div>
        <h1 style={{textAlign: 'center', fontSize: '1.5rem', fontWeight: '600'}}>Add Student Record</h1>

        <form className='add-students' onSubmit={handleSubmit}>
        <TextField label="Enter Name" variant="outlined" id='name' name='name' onChange={(e) => setName(e.target.value)}
        />

        <TextField label="Enter Email" variant="outlined" id='email' name='email' onChange={(e) => setEmail(e.target.value)}
        />
    
        <TextField label="Enter Mobile" variant="outlined" id='mobile' name='mobile' onChange={(e) => setMobile(e.target.value)}
        />
    
        <TextField label="Enter Batch" variant="outlined" id='batch' name='batch' onChange={(e) => setBatch(e.target.value)}
        />
    
        <Button type="submit" variant="contained">Add Movie</Button>
      </form>
    </div>
    )
}