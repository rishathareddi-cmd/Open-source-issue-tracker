import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreateIssue({ onAddIssue }) {
  const [form, setForm] = useState({ title: "", description: "", type: "Bug", priority: "High" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!form.title || !form.description) return alert("Fill all fields");
    onAddIssue(form);
    navigate("/issues");
  };

  return (
    <div>
      <h1>Create New Issue</h1>
      <form onSubmit={handleSubmit} className="form">
        <input placeholder="Issue Title" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} />
        <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})}></textarea>
        <select value={form.type} onChange={(e) => setForm({...form, type: e.target.value})}>
          <option>Bug</option>
          <option>Feature</option>
          <option>Documentation</option>
          <option>Improvement</option>
        </select>
        <select value={form.priority} onChange={(e) => setForm({...form, priority: e.target.value})}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button type="submit">Submit Issue</button>
      </form>
    </div>
  );
}
