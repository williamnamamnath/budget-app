import React from 'react';

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
        "Add benefits of the app"
        </div>
        <div class="col">
        "Add benefits of the app"
        </div>
        <div class="col">
        "Add benefits of the app"
        </div>
    </div>
</div>

<div class="mt-5 py-3 container text-center">
    <div class="row">
        <div class="col">
        "Add benefits of the app"
        </div>
        <div class="col">
        "Add benefits of the app"
        </div>
        <div class="col">
        "Add benefits of the app"
        </div>
    </div>
</div>
    </>
  );
};

export default LandingPage;