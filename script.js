<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <title>Mentor Allocation System</title>
    <style>
        body {
            background-color: #f8f9fa;
        }
        footer {
            background-color: #e9ecef;
            padding: 10px 0;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Mentor Allocation System</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="admin-panel.html">Admin Panel</a>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container mt-5">
        <h2 class="text-center">Register Your Group</h2>
        <form id="groupRegisterForm" class="mt-4">
            <div class="form-group">
                <label for="groupLeader">Group Leader Name:</label>
                <input type="text" class="form-control" id="groupLeader" name="groupLeader" required>
            </div>
            <div class="form-group">
                <label for="groupLeaderSAP">Group Leader SAP ID:</label>
                <input type="text" class="form-control" id="groupLeaderSAP" name="groupLeaderSAP" required>
            </div>
            <div class="form-group">
                <label for="membersCount">Number of Members:</label>
                <input type="number" class="form-control" id="membersCount" min="1" required>
            </div>
            <button type="button" class="btn btn-primary" id="addMemberButton">
                <i class="fas fa-plus"></i> Add Member
            </button>
            <div id="membersContainer" class="mt-3"></div>
            <button type="submit" class="btn btn-success mt-4">Register Group</button>
        </form>
    </div>

    <footer class="text-center mt-5">
        <div class="text-center p-3">
            © 2023 Mentor Allocation System
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            console.log("Mentor Allocation System Loaded");

            const addMemberButton = document.getElementById('addMemberButton');
            const membersContainer = document.getElementById('membersContainer');
            const membersCountInput = document.getElementById('membersCount');
            let memberCount = 0;

            // Add Member Fields
            addMemberButton.addEventListener('click', function () {
                const membersCount = parseInt(membersCountInput.value);

                if (memberCount < membersCount) {
                    memberCount++;
                    const memberDiv = document.createElement('div');
                    memberDiv.classList.add('card', 'mt-3');
                    memberDiv.innerHTML = `
                        <div class="card-body">
                            <h5 class="card-title">Member ${memberCount}</h5>
                            <div class="form-group">
                                <label for="memberName${memberCount}">Name:</label>
                                <input type="text" class="form-control" id="memberName${memberCount}" name="memberName${memberCount}" required>
                            </div>
                            <div class="form-group">
                                <label for="memberSAP${memberCount}">SAP ID:</label>
                                <input type="text" class="form-control" id="memberSAP${memberCount}" name="memberSAP${memberCount}" required>
                            </div>
                        </div>
                    `;
                    membersContainer.appendChild(memberDiv);
                } else {
                    alert('You have already added the specified number of members.');
                }
            });

            // Handle Group Registration Form Submission
            document.getElementById('groupRegisterForm').addEventListener('submit', function (event) {
                event.preventDefault(); // Prevent form submission

                const groupLeader = document.getElementById('groupLeader').value;
                const groupLeaderSAP = document.getElementById('groupLeaderSAP').value;
                const members = [];

                for (let i = 1; i <= memberCount; i++) {
                    const memberName = document.getElementById(`memberName${i}`).value;
                    const memberSAP = document.getElementById(`memberSAP${i}`).value;
                    members.push({ name: memberName, sap: memberSAP });
                }

                console.log({
                    leader: groupLeader,
                    leaderSAP: groupLeaderSAP,
                    members: members
                });

                alert('Group Registered Successfully!');
                document.getElementById('groupRegisterForm').reset();
                membersContainer.innerHTML = '';
                memberCount = 0;
            });
        });
    </script>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
