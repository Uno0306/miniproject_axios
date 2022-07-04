import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

function Domain() {
  return (
    <div>
      <Link to={'/selectform'}>
        <p>select</p>
      </Link>
      <Link to='/insertform'>insert</Link>
      <Link to='/updateform'>update</Link>
      <Link to='/deleteform'>delete</Link>
    </div>
  );
}

export default Domain;
