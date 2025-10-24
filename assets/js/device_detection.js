// device_detection.js

window.onload = function() {
  var deviceType = detectDeviceType(); // You need to implement this function
  document.getElementById('device_type').value = deviceType;
}
 
function detectDeviceType() {
  // Implement your device detection logic here
  // You can use libraries like Device.js or write custom code
  // Example:
  if (window.innerWidth < 768) {
      return 'mobile';
  } else if (window.innerWidth < 992) {
      return 'tablet';
  } else {
      return 'desktop';
  }
}



 
