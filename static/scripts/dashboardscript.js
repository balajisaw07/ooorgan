function getDonorDetails() {
    return [
        { name: 'Donor 1', email: 'donor1@example.com', bloodType: 'A+', status: 'Pending' },
        { name: 'Donor 2', email: 'donor2@example.com', bloodType: 'B-', status: 'Pending' },
        // Add more donors as needed
    ];
}


function acceptDonor(email) {
    var statusElement = document.getElementById(`status-${email}`);
    var donors = getDonorDetails();
    var donorIndex = donors.findIndex(donor => donor.email === email);

    donors[donorIndex].status = 'Accepted';
    statusElement.textContent = 'Accepted';
}

function denyDonor(email) {
    var statusElement = document.getElementById(`status-${email}`);
    var donors = getDonorDetails();
    var donorIndex = donors.findIndex(donor => donor.email === email);

    donors[donorIndex].status = 'Denied';
    statusElement.textContent = 'Denied';
}

function getRecipientDetails() {
    return [
        { name: 'Recipient 1', email: 'recipient1@example.com', organNeeded: 'Kidney' },
        { name: 'Recipient 2', email: 'recipient2@example.com', organNeeded: 'Liver' },
        // Add more recipients as needed
    ];
}

// function renderRecipientTable() {
//     var recipientTableBody = document.getElementById('recipientTableBody');
//     var recipients = getRecipientDetails();

//     recipientTableBody.innerHTML = '';

//     recipients.forEach(function(recipient) {
//         var row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${recipient.name}</td>
//             <td>${recipient.email}</td>
//             <td>${recipient.organNeeded}</td>
//             <td>
//                 <button onclick="acceptRecipient('${recipient.email}')">Accept</button>
//                 <span class="mx-1">/</span>
//                 <button class="deny" onclick="denyRecipient('${recipient.email}')">Deny</button>
//             </td>
//         `;
//         recipientTableBody.appendChild(row);
//     });
// }

function acceptRecipient(email) {
    alert(`Accepted recipient with email: ${email}`);
    // renderRecipientTable();
}

function denyRecipient(email) {
    alert(`Denied recipient with email: ${email}`);
    //renderRecipientTable();
}

// dashboardscript.js


// dashboardscript.js
function toggleDonorRecipientView() {
    var donorSection = document.getElementById('donorSection');
    var recipientSection = document.getElementById('recipientSection');
    var matchedSection = document.getElementById('matchedSection');

    donorSection.style.display = 'block';
    recipientSection.style.display = 'none';
    matchedSection.style.display = 'none';
}

function toggleMatchedRecordsView() {
    var donorSection = document.getElementById('donorSection');
    var recipientSection = document.getElementById('recipientSection');
    var matchedSection = document.getElementById('matchedSection');

    donorSection.style.display = 'none';
    recipientSection.style.display = 'none';
    matchedSection.style.display = 'block';
}

function toggleRecipientView() {
    var donorSection = document.getElementById('donorSection');
    var recipientSection = document.getElementById('recipientSection');
    var matchedSection = document.getElementById('matchedSection');

    donorSection.style.display = 'none';
    recipientSection.style.display = 'block';
    matchedSection.style.display = 'none';
}


//renderDonorTable();
