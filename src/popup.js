import html2canvas from 'html2canvas';



document.getElementById('close').addEventListener('click', function() {
    window.close();
});

// const capture = async () => {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");
//     const video = document.createElement("video");

//     try {
//       const captureStream = await navigator.mediaDevices.getDisplayMedia();
//       video.srcObject = captureStream;
//       context.drawImage(video, 0, 0, window.width, window.height);
//       const frame = canvas.toDataURL("image/png");
//       captureStream.getTracks().forEach(track => track.stop());
//       window.location.href = frame;
//     } catch (err) {
//       console.error("Error: " + err);
//     }
//   };

// adding a listener to the button id capture and open a print box
document.getElementById('capture').addEventListener('click', function(event) {
    // capture();
    // html2canvas(event.target).then(function(canvas) {
    //     document.body.appendChild(canvas);
    // });


});


