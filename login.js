// // Initialize the Google API client
// const googleClientId = '361126328920-n2e0e6d01cutib4rohnr450j45etv7rp.apps.googleusercontent.com'; 

// let googleAuth2;

// function initGoogleAuth() {
//     gapi.load('auth2', function() {
//         googleAuth2 = gapi.auth2.init({
//             client_id: googleClientId,
//             scope: 'loganrusch89@gmail.com'
//         });
//     });
// }

// initGoogleAuth();

// // When the user clicks the login button
// document.getElementById('googleLoginBtn').addEventListener('click', function () {
//     googleAuth2.signIn().then(function(googleUser) {
//         console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
        
//         // Get the ID token and access token
//         const idToken = googleUser.getAuthResponse().id_token;
//         const accessToken = googleUser.getAuthResponse().access_token;

//         // Send the tokens to your server to validate (optional)
//         // Example: sendIdTokenToServer(idToken);
        
//         // Redirect to another page after successful login
//         window.location.href = '/typing.html'; // Redirect to the game page
//     }).catch(function(error) {
//         console.log('Error logging in with Google:', error);
//     });
// });

