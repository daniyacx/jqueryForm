$(document).ready(function() {
  $('#registrationForm input').on('input', function() {
    validateForm();
  });

  $('#registerButton').click(function() {
    if ($('#username').val() && $('#password').val() && $('#confirmPassword').val()) {
      if ($('#password').val() === $('#confirmPassword').val()) {
        $('#registrationMessage').text('Registration Successful!');
        $('#registrationForm')[0].reset();
      } else {
        $('#registrationMessage').text('Passwords do not match.');
      }
    } else {
      $('#registrationMessage').text('Please fill in all the fields.');
    }
  });

  function validateForm() {
    if ($('#username').val() && $('#password').val() && $('#confirmPassword').val()) {
      $('#registerButton').prop('disabled', false);
    } else {
      $('#registerButton').prop('disabled', true);
    }

    $('#usernameError').text($('#username').prop('validationMessage'));
    $('#passwordError').text($('#password').prop('validationMessage'));
    $('#confirmPasswordError').text($('#confirmPassword').prop('validationMessage'));
  }
});
