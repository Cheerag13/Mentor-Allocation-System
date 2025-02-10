document.addEventListener('DOMContentLoaded', function () {
    // Retrieve stored group members from localStorage
    const members = JSON.parse(localStorage.getItem('groupMembers')) || [];
    const tableBody = document.getElementById('membersTableBody');

    // Populate table with group members
    if (members.length > 0) {
        members.forEach(member => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="py-3 px-6">${member.name}</td>
                <td class="py-3 px-6">${member.sap}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        // Display a message when no members are registered
        tableBody.innerHTML = `
            <tr>
                <td colspan="2" class="text-center py-3 px-6 text-gray-500">
                    No group members registered yet.
                </td>
            </tr>
        `;
    }
});
