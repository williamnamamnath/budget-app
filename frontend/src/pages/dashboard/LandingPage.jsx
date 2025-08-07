import React from 'react';

//REMINDER: Add screenshots for each benefit when finalizing the project

const LandingPage = () => {
  return (
    <>
    <div className='mt-5 fw-bold fs-1 text-center'>Welcome To SmartTracker</div>
    <div className="mt-5 py-3 container text-center">
    <div className="row">
        <div className="col">
        Already have an account? 
        <br/>
        <a href="/login">Login</a>
        </div>
        <div className="col">
        Create an account to get started.
        <br/>
        <a href="/signup">Sign Up</a>
        </div>
    </div>
</div>

<br/>

<div className="mt-5 py-3 container text-center">
    <div className="row">
        <div className="col">
        Track your income and expenses, all in one location.
        </div>
        <div className="col">
        Enter your finances effortlessly and personalize them by classifying them into categories.
        </div>
        <div className="col">
        Budget and plan efficiently with the help of visual aids. 
        </div>
    </div>
</div>

<div className="mt-5 py-3 container text-center">
    <div className="row">
        <div className="col">
        Obtain summaries of revenue(s) and expenditure(s) over a specific time period.
        </div>
        <div className="col">
        Manipulate data by exporting in a PDF or Excel file. 
        </div>
        <div className="col">
        All data and information is stored securely with the help of a verified database and a robust authentication system.
        </div>
    </div>
</div>
    </>
  );
};

export default LandingPage;