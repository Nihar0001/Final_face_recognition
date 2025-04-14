document.addEventListener('DOMContentLoaded', function() {
    // Camera functionality for face capture (upload_face.html)
    const video = document.getElementById('video');
    const captureBtn = document.getElementById('capture');
    const canvas = document.getElementById('canvas');
    const imageDataInput = document.getElementById('imageData');
    const cameraForm = document.getElementById('camera-form');
    const ctx = canvas ? canvas.getContext('2d') : null;

    if (video && captureBtn && canvas && ctx && imageDataInput && cameraForm) {
        // Access camera
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function(stream) {
                    video.srcObject = stream;
                })
                .catch(function(error) {
                    console.error("Camera error: ", error);
                    alert("Could not access the camera. Please ensure you've granted camera permissions.");
                });
        }

        // Capture button handler
        captureBtn.addEventListener('click', function() {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Convert to data URL
            const imageData = canvas.toDataURL('image/jpeg');

            // Set the value of the hidden input field
            imageDataInput.value = imageData;

            // Display the form for submission
            cameraForm.style.display = 'block';

            // Show preview and hide video stream
            video.style.display = 'none';
            canvas.style.display = 'block';
            captureBtn.style.display = 'none';
        });
    }
});