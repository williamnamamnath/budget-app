import React from 'react';

const Signup = () => {
  return (
    <>
    <div className='mx-5 mt-3'>
    <div className='fw-bold fs-1'>Signup</div>
    <form>
      <div className="mt-5">
        <label htmlFor="name" className="form-label">First Name</label>
        <input type="text" className="form-control w-25" id="fname" />
      </div>
      <div className="my-3">
        <label htmlFor="name" className="form-label">Last Name</label>
        <input type="text" className="form-control w-25" id="lname" />
      </div>
      <div className="my-3">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className="form-control w-25" id="email" aria-describedby="emailHelp" />
      </div>
      <div className="my-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control w-25" id="password" />
      </div>
      <div className="my-3">
        <label htmlFor="password" className="form-label">Confirm Password</label>
        <input type="password" className="form-control w-25" id="password" />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
    </form>
    </div>
    </>
  );
};

export default Signup;