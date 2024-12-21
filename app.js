// // document.getElementById("uploadButton").addEventListener("click", async () => {
// //   const input = document.getElementById("imageInput");
// //   if (!input.files[0]) {
// //     alert("Please select an image!");
// //     return;
// //   }

// //   const formData = new FormData();
// //   formData.append("image", input.files[0]);

// //   try {
// //     const response = await fetch("http://127.0.0.1:5000/upload", {
// //       method: "POST",
// //       body: formData,
// //     });

// //     if (response.ok) {
// //       const data = await response.json();
// //       document.getElementById("output").innerHTML =
// //         "<h4>Objects Detected:</h4>" + data.description || "No description found";
// //     } else {
// //       const data = await response.json();
// //       document.getElementById("output").innerText =
// //         data.error || "Error uploading image!";
// //     }
// //   } catch (error) {
// //     document.getElementById("output").innerText = "Error uploading image!";
// //     console.error(error);
// //   }
// // });

// // document.getElementById("uploadButton").addEventListener("click", async () => {
// //   const input = document.getElementById("imageInput");
// //   if (!input.files[0]) {
// //     alert("Please select an image!");
// //     return;
// //   }

// //   const formData = new FormData();
// //   formData.append("image", input.files[0]);

// //   const imagePreview = document.getElementById("imagePreview");
// //   const imageFile = input.files[0];
// //   const imageUrl = URL.createObjectURL(imageFile);
// //   imagePreview.src = imageUrl;
// //   document.getElementById("imagePreviewContainer").style.display = "block";

// //   try {
// //     const response = await fetch("http://127.0.0.1:5000/upload", {
// //       method: "POST",
// //       body: formData,
// //     });

// //     if (response.ok) {
// //       const data = await response.json();
// //       document.getElementById("output").innerText =
// //         "Objects Detected:\n" + (data.description || "No description found");
// //     } else {
// //       const data = await response.json();
// //       document.getElementById("output").innerText =
// //         data.error || "Error uploading image!";
// //     }
// //   } catch (error) {
// //     document.getElementById("output").innerText = "Error uploading image!";
// //     console.error(error);
// //   }
// // });

// document.getElementById("uploadButton").addEventListener("click", async () => {
//   const input = document.getElementById("imageInput");
//   if (!input.files[0]) {
//     alert("Please select an image!");
//     return;
//   }

//   const formData = new FormData();
//   formData.append("image", input.files[0]);

//   // Display the image preview
//   const imagePreview = document.getElementById("imagePreview");
//   const imageFile = input.files[0];
//   const imageUrl = URL.createObjectURL(imageFile);
//   imagePreview.src = imageUrl;
//   document.getElementById("imagePreviewContainer").style.display = "block";

//   try {
//     const response = await fetch("http://127.0.0.1:5000/upload", {
//       method: "POST",
//       body: formData,
//     });

//     if (response.ok) {
//       const data = await response.json();
//   document.getElementById("output").style.visibility = "visible";
//       document.getElementById("output").innerText =
//         "Objects Detected:\n" + (data.description || "No description found");
//     } else {
//       const data = await response.json();
//       document.getElementById("output").innerText =
//         data.error || "Error uploading image!";
//     }
//   } catch (error) {
//     document.getElementById("output").innerText = "Error uploading image!";
//     console.error(error);
//   }
// });

document.getElementById("uploadButton").addEventListener("click", async () => {
  const input = document.getElementById("imageInput");
  if (!input.files[0]) {
    alert("Please select an image!");
    return;
  }

  const formData = new FormData();
  formData.append("image", input.files[0]);

  // Show loading text
  document.getElementById("loading").style.display = "block";
  document.getElementById("output").style.visibility = "hidden"; // Hide output section while loading

  try {
    const response = await fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await response.json();

      // Display the image preview
      const imagePreviewContainer = document.getElementById(
        "imagePreviewContainer"
      );
      const imagePreview = document.getElementById("imagePreview");
      imagePreview.src = URL.createObjectURL(input.files[0]);
      imagePreviewContainer.style.display = "block"; // Show the image preview container

      // Hide loading text and show result
      document.getElementById("loading").style.display = "none";
      document.getElementById("output").style.visibility = "visible";
      document.getElementById("output").innerText =
        data.description || "No description found";
    } else {
      const data = await response.json();
      document.getElementById("loading").style.display = "none";
      document.getElementById("output").style.visibility = "visible";
      document.getElementById("output").innerText =
        data.error || "Error uploading image!";
    }
  } catch (error) {
    document.getElementById("loading").style.display = "none";
    document.getElementById("output").style.visibility = "visible";
    document.getElementById("output").innerText = "Error uploading image!";
    console.error(error);
  }
});
