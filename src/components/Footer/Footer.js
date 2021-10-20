import React from 'react';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-20'>
            <hr className='border-2' />
            <footer className="p-6 dark:bg-coolGray-800 dark:text-coolGray-100">
                <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-indigo-400">Guidelines <i className="fas fa-book-open"></i> </h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="/home">Contact Us </NavLink>
                            <NavLink to="/home">First Aid </NavLink>
                            <NavLink to="/home">Environmental Policy </NavLink>
                            <NavLink to="/home">International Patient </NavLink>
                            <NavLink to="/home">Test and Labs </NavLink>
                            <NavLink to="/home">Therapies </NavLink>
                            <NavLink to="/home">Medication </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-indigo-400">About US <i className="fas fa-globe"></i> </h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="/about">About Hospital </NavLink>
                            <NavLink to="/about">History </NavLink>
                            <NavLink to="/about">Background </NavLink>
                            <NavLink to="/about">Board of Directors </NavLink>
                            <NavLink to="/about">Faculty </NavLink>
                            <NavLink to="/about">External Doctors </NavLink>
                            <NavLink to="/about">Mission and Vision </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-indigo-400">Career <i className="fas fa-graduation-cap"></i> </h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="/home">Jobs </NavLink>
                            <NavLink to="/home">Training </NavLink>
                            <NavLink to="/home">Workshops </NavLink>
                            <NavLink to="/home">First Aid </NavLink>
                            <NavLink to="/home">Paramedic </NavLink>
                            <NavLink to="/home">Nurse & Brother </NavLink>
                            <NavLink to="/home">Placement </NavLink>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2 className="font-medium text-indigo-400">Social <i className="fas fa-users"></i> </h2>
                        <div className="flex flex-col space-y-2 text-sm dark:text-coolGray-400">
                            <NavLink to="#">Youtube </NavLink>
                            <NavLink to="#">Facebook </NavLink>
                            <NavLink to="#">Twitter </NavLink>
                            <NavLink to="#">Instagram </NavLink>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-6 pt-12 text-sm">
                    <span className="text-indigo-400">© City Psychiatric Hospital Copyright 2021. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;