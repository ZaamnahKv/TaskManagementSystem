document.addEventListener("DOMContentLoaded", function () {
    const logs = [
    {
        date: "10 Jun 2026",
        employee: "Sriman",
        task: "UI Design",
        description: "Designed dashboard charts and UI components",
        hours: "6.0",
        status: "Completed",
        time: "09:15 AM"
    },
    {
        date: "10 Jun 2026",
        employee: "Shrikanth",
        task: "API Integration",
        description: "Integrated APIs and fixed response errors",
        hours: "7.5",
        status: "Pending",
        time: "10:30 AM"
    },
    {
        date: "10 Jun 2026",
        employee: "Jayasri",
        task: "Testing Module",
        description: "Performed test cases for task modules",
        hours: "6.0",
        status: "Open",
        time: "11:20 AM"
    },
    {
        date: "05 Jun 2026",
        employee: "Karthick",
        task: "Documentation",
        description: "Updated API and user documentation",
        hours: "5.5",
        status: "Completed",
        time: "04:45 PM"
    },
    {
        date: "03 Jun 2026",
        employee: "Sriman",
        task: "Database Update",
        description: "Optimized queries and indexes",
        hours: "6.0",
        status: "Overdue",
        time: "03:10 PM"
    }
];
const table = document.getElementById("workLogTable");
logs.forEach(log => {
    const statusClass = log.status.toLowerCase();
    table.innerHTML += `
        <tr>
            <td>${log.date}</td>
            <td>${log.employee}</td>
            <td>${log.task}</td>
            <td>${log.description}</td>
            <td>${log.hours}</td>
            <td>
                <span class="status ${statusClass}">
                    ${log.status}
                </span>
            </td>
            <td>${log.time}</td>
        </tr>
    `;
});
});