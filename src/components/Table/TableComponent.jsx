import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './TableComponent.css';
import college_logo from '../../assets/college_logo.png';
import { IoMdDownload } from "react-icons/io";
const TableComponent = (props) => {
    const { data } = props;

    const [searchInput, setSearchInput] = useState('');
    const [userDetailsList, setUserDetailsList] = useState(data);

    const onChangeSearchInput = (event) => {
        setSearchInput(event.target.value);
    };

    const deleteUser = (uniqueNo) => {
        setUserDetailsList(userDetailsList.filter(
            eachUser => eachUser.uniqueNo !== uniqueNo
        ));
    };

    // Search results based on roll number
    const searchResults = userDetailsList.filter(eachUser =>
        eachUser.roll_no.toString().includes(searchInput)
    );

    return (
        <>
            <div className="college-logo-div">
                <img src={college_logo} alt="College Logo" className='college-logo'/>
            </div>
            <div className='bg-container'>
                <div className='search-box'>
                    <TextField
                        id="filled-basic"
                        variant="filled"
                        label="Search Roll Number"
                        type="  text"
                        value={searchInput}
                        onChange={onChangeSearchInput}
                        sx={{
                            color: "black",
                            backgroundColor: "white",
                            width: "20ch",
                            height: "45px",
                            borderRadius: "5px",
                            '& .MuiFilledInput-root': {
                            backgroundColor: 'white',
                            '&::after': {
                                borderBottom: '1px solid white', // Focused underline
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: 'black',
                        },
                        }}
                    />
                </div>
                <div className='top-container'>
                    <div className='sub-container'>
                        <div className="table-title">
                            <span style={{ textAlign: "center", fontSize: "2rem", margin:"0px"}}> REGISTERED STUDENTS LIST</span>
                        </div>
                        <table className='table' border={1}>
                            <thead>
                                <tr>
                                    <th>ROLL NO</th>
                                    <th>NAME</th>
                                    <th>BRANCH</th>
                                    <th>PASS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchResults.map((student, index) => (
                                    <tr key={index}>
                                        <td>{student.roll_no}</td>
                                        <td>{student.name}</td>
                                        <td>{student.college_mail}</td>
                                        <td>
                                            <div className='download-pass'>
                                            <a href={student.link} target="_blank" rel="noopener noreferrer" className="link-style">
                                                Download
                                            </a>
                                            <IoMdDownload />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TableComponent;
