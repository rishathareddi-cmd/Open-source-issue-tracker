import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import IssueList from './components/IssueList';
import CreateIssue from './components/CreateIssue';
import { initialIssues } from './data/initialIssues';
import './App.css';

function App() {
  const [issues, setIssues] = useState(initialIssues);

  // Create Issue
  const addIssue = (newIssue) => {
    const issue = {
      id: Date.now(),
      ...newIssue,
      status: "Open"
    };
    setIssues([issue, ...issues]);
  };

  // Change status
  const updateStatus = (id, newStatus) => {
    setIssues(issues.map(issue => 
      issue.id === id ? { ...issue, status: newStatus } : issue
    ));
  };

  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard issues={issues} />} />
          <Route path="/issues" element={<IssueList issues={issues} onUpdateStatus={updateStatus} />} />
          <Route path="/create" element={<CreateIssue onAddIssue={addIssue} />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
