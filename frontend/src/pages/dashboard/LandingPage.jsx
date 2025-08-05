import React from 'react';

//REMINDER: Add screenshots for each benefit when finalizing the project

const LandingPage = () => {
  return (
    <>
    <div className='mt-5 fw-bold fs-1 text-center'>Welcome To "Budget App"</div>
    <div class="mt-5 py-3 container text-center">
    <div class="row">
        <div class="col">
        Already have an account? 
        <br/>
        <a href="/login">Login</a>
        </div>
        <div class="col">
        Create an account to get started!
        <br/>
        <a href="/signup">Sign Up</a>
        </div>
    </div>
</div>

<br/>

<div class="mt-5 py-3 container text-center">
    <div class="row">
        <div class="col">
        Track your income and expenses, all in one location.
        </div>
        <div class="col">
        Enter your finances effortlessly and personalize them by classifying them into categories.
        </div>
        <div class="col">
        Budget and plan efficiently with the help of visual aids. 
        </div>
    </div>
</div>

<div class="mt-5 py-3 container text-center">
    <div class="row">
        <div class="col">
        Obtain summaries of revenue(s) and expenditure(s) over a specific time period.
        </div>
        <div class="col">
        Manipulate data by exporting in a PDF or Excel file. 
        </div>
        <div class="col">
        All data and information is stored securely with the help of a verified database and a robust authentication system.
        </div>
    </div>
</div>
    </>
  );
};

export default LandingPage;