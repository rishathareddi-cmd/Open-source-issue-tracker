export default function IssueCard({ issue, onUpdateStatus }) {
  return (
    <div className="issue-card">
      <h3>#{issue.id} {issue.title}</h3>
      <p>{issue.description}</p>
      <p><b>Type:</b> {issue.type} | <b>Priority:</b> {issue.priority}</p>
      <p><b>Status:</b> {issue.status}</p>
      <div className="actions">
        <select value={issue.status} onChange={(e) => onUpdateStatus(issue.id, e.target.value)}>
          <option>Open</option>
          <option>In Progress</option>
          <option>Closed</option>
        </select>
      </div>
    </div>
  );
}
