export default function Dashboard({ issues }) {
  const total = issues.length;
  const open = issues.filter(i => i.status === 'Open').length;
  const inProgress = issues.filter(i => i.status === 'In Progress').length;
  const closed = issues.filter(i => i.status === 'Closed').length;

  return (
    <div>
      <h1>Project Dashboard</h1>
      <div className="stats">
        <div className="card">Total Issues: {total}</div>
        <div className="card open">Open: {open}</div>
        <div className="card progress">In Progress: {inProgress}</div>
        <div className="card closed">Closed: {closed}</div>
      </div>
      <p>Welcome to Open Source Issue Tracker. Track bugs, features, and docs.</p>
    </div>
  );
}
