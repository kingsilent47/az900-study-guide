import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page not-found-page">
      <div className="not-found-content">
        <span className="eyebrow">Error 404</span>
        <h1>Page not found</h1>
        <p className="lede">
          The resource you are looking for does not exist. It may have been moved, deleted, or the address may have been typed incorrectly.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">Return to Study Dashboard</Link>
          <Link to="/bank" className="btn btn-outline">Browse Question Bank</Link>
        </div>
      </div>
    </div>
  );
}
