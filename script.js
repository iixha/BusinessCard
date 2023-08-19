


const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".Email"),
  qrcode = wrapper.querySelector(".qr-code"),
  generateBtn = wrapper.querySelector(".preview"),
  qrImg = wrapper.querySelector(".imgs img"),
  qrImg1 = wrapper.querySelector(".imgs1 img");

generateBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let inputValueNameA = document.getElementById('nameA').value;
  let inputValueNameE = document.getElementById('nameE').value;
  let inputValuepositionA = document.getElementById('positionA').value;
  let inputValuepositionE = document.getElementById('positionE').value;
  let inputValueNumber = document.getElementById('number').value;
  let inputValueEmail = document.getElementById('Email').value;

  // Check if all required fields are not empty
  if (inputValueNameA && inputValueNameE && inputValuepositionA && inputValuepositionE && inputValueNumber && inputValueEmail) {
    removeRedBorders();
    let qrValue = inputValueEmail;

    if (!qrValue) {
      alert("الرجاء إدخال بريد إلكتروني.");
      return;
    }

    let link = `https://api.qrserver.com/v1/create-qr-code/?size=70x70&data=${qrValue}`;
    qrImg.src = link;
    qrImg1.src = link;
    wrapper.classList.add("active");

    previewImage(event);
  } else {
    alert("الرجاء ملء جميع الحقول المطلوبة.");
    highlightEmptyFields();

  }
});


let previewClicked = false;



function previewImage(event) {
  event.preventDefault();

  let inputValueNameA = document.getElementById('nameA').value;
  let inputValueNameE = document.getElementById('nameE').value;
  let inputValuepositionA = document.getElementById('positionA').value;
  let inputValuepositionE = document.getElementById('positionE').value;
  let inputValueNumber = document.getElementById('number').value;
  let inputValueEmail = document.getElementById('Email').value;
  let inputValueLink = document.getElementById('link').value;

  let textElementNameA = document.getElementById('preview-text-NA');
  let textElementpositionA = document.getElementById('preview-text-PA');
  let textElementNumber = document.getElementById('preview-text-NO');
  let textElementEmail = document.getElementById('preview-text-EM');
  let textElementLink = document.getElementById('preview-text-L');
  let textElementNameE = document.getElementById('preview-text-NEE');
  let textElementpositionE = document.getElementById('preview-text-PEE');
  let textElementNumberE = document.getElementById('preview-text-NOE');
  let textElementEmailE = document.getElementById('preview-text-EME');
  let textElementLinkE = document.getElementById('preview-text-LE');

  // Update the text ...

  
  textElementNameA.textContent = inputValueNameA;

  textElementpositionA.textContent = inputValuepositionA;

  textElementNumber.textContent = inputValueNumber;

  textElementEmail.textContent = inputValueEmail;

  textElementLink.textContent = inputValueLink; 




  textElementNameE.textContent = inputValueNameE;

  textElementpositionE.textContent = inputValuepositionE;

  textElementNumberE.textContent = inputValueNumber;

  textElementEmailE.textContent = inputValueEmail;

  textElementLinkE.textContent = inputValueLink;

  previewClicked = true;


}

function areFieldsNotEmpty() {
  let requiredFields = ['nameA', 'nameE', 'positionA', 'positionE', 'number', 'Email'];
  return requiredFields.every(function(fieldId) {
    return document.getElementById(fieldId).value.trim() !== "";
  });
}


function highlightEmptyFields() {
  let requiredFields = ['nameA', 'nameE', 'positionA', 'positionE', 'number', 'Email'];
  requiredFields.forEach(function(fieldId) {
    let field = document.getElementById(fieldId);
    if (field.value.trim() === "") {
      field.style.borderColor = "red";
    } else {
      field.style.borderColor = "";
    }
  });
}

function removeRedBorders() {
  let requiredFields = ['nameA', 'nameE', 'positionA', 'positionE', 'number', 'Email'];
  requiredFields.forEach(function(fieldId) {
    let field = document.getElementById(fieldId);
    field.style.borderColor = "";
  });
}



// Get all the elements with the class "upgrade-element"
var upgradeElements = document.querySelectorAll(".wrapper");

// Function to show the elements with an upgrade feature
function showElementsWithUpgrade() {
  upgradeElements.forEach(function (element) {
    element.classList.add("upgraded");
  });
}

// Call the function to show the elements with an upgrade feature
showElementsWithUpgrade();







function isQRCodeVisible() {
  var qrCodeOpacity = parseFloat(window.getComputedStyle(document.querySelector(".qr-code")).getPropertyValue("opacity"));
  return qrCodeOpacity === 1;
}

function areFieldsNotEmpty() {
  var requiredFields = ['nameA', 'nameE', 'positionA', 'positionE', 'number', 'Email'];
  return requiredFields.every(function(fieldId) {
    return document.getElementById(fieldId).value.trim() !== "";
  });
}

function showErrorMessage(message) {
  alert(message);
}

function saveAsPDFAa(event) {
  var qrCodeVisible = isQRCodeVisible();
  var fieldsNotEmpty = areFieldsNotEmpty();

  if (!qrCodeVisible && !fieldsNotEmpty) {
    showErrorMessage("الرجاء ملء جميع الحقول وعرض رمز الاستجابة السريعة.");
    event.preventDefault();
  } else if (!qrCodeVisible) {
    showErrorMessage("الرجاء عرض رمز الاستجابة السريعة.");
    event.preventDefault();
  } else if (!fieldsNotEmpty) {
    showErrorMessage("الرجاء ملء جميع الحقول.");
    event.preventDefault();
  } else {
    // قم بتنفيذ الأكواد الخاصة بك هنا
    // ...
  }
}







function isQRCodeVisible() {
  var qrCodeOpacity = parseFloat(window.getComputedStyle(document.querySelector(".qr-code")).getPropertyValue("opacity"));
  return qrCodeOpacity === 1;
}

function areFieldsNotEmpty() {
  var requiredFields = ['nameA', 'nameE', 'positionA', 'positionE', 'number', 'Email'];
  return requiredFields.every(function(fieldId) {
    return document.getElementById(fieldId).value.trim() !== "";
  });
}

function showErrorMessage(message) {
  alert(message);
}


/// معتمد  //A certified


function saveAsPDFAa(event) {
  var qrCodeVisible = isQRCodeVisible();
  var fieldsNotEmpty = areFieldsNotEmpty();

  if (!qrCodeVisible && !fieldsNotEmpty) {
    showErrorMessage("الرجاء ملء جميع الحقول  و معاينة البطاقة ");
    event.preventDefault();
  } else if (!qrCodeVisible) {
    showErrorMessage("الرجاء عرض رمز الاستجابة السريعة.");
    event.preventDefault();
  } else if (!fieldsNotEmpty) {
    showErrorMessage("الرجاء ملء جميع الحقول.");
    event.preventDefault();
  } else {
    // قم بتنفيذ الأكواد الخاصة بك هنا
    // ...

      // Create a new jsPDF instance
      var doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'A4'
      });

    // Preload the QR code image
    var qrImage = new Image();
    var qrImage1 = new Image();

    var qrValue = qrInput.value; // Get the value for the QR code
    var qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${qrValue}`;
    qrImage.src = qrLink;
    qrImage1.src = qrLink;



    // Wait for the QR code image to load
    qrImage.onload = function() {
      // Capture the modified content as an image using html2canvas
      html2canvas(document.querySelector(".qr-code"), {
        scale: 5, // Adjust the scale as needed
      }).then(function(canvas) {
        // Convert the canvas image to a data URL
        var imageData = canvas.toDataURL("image/jpeg", 1.0); // Use maximum quality

        // Add the image to the PDF
        doc.addImage(imageData, "JPEG", 10, 10, 190, 70); // Adjust positioning and size as needed
        
        // Add the QR code image to the PDF
        doc.addImage(qrImage, "JPEG", 19, 44.1, 21.4, 21.4); // Adjust positioning and size
        doc.addImage(qrImage1, "JPEG", 169, 44.1, 21.4, 21.4); // Adjust positioning and size


        // Save the PDF
        doc.save("modified_content.pdf");
      });
    }; 
            event.preventDefault();

  }
}




// عند النقر على زر الحفظ كبي دي أف

window.jsPDF = window.jspdf.jsPDF 

 












  window.addEventListener("scroll", function() {
    var footer = document.querySelector(".footer");
    
    if (window.scrollY >= 100) { // تعديل القيمة حسب ما تريد لعرض الفوتر
      footer.style.bottom = "0";
    } else {
      footer.style.bottom = "-50px";
    }
  });
  
  

  
  window.onload = function() {
    var video = document.getElementById('intro-video');
    var otherContent = document.querySelector('.other-content');
  
    // انتظر لمدة 5 ثواني ثم أظهر العناصر الأخرى
    setTimeout(function() {
      video.style.display = 'none';
      otherContent.style.display = 'block';
    }, 5000);
  };

  




  window.onload = function() {
    var video = document.getElementById('intro-video');
    var otherContent = document.querySelector('.other-content');
  
    video.onended = function() {
      video.classList.add('fade-out');
      otherContent.style.display = 'block';
      otherContent.classList.add('fade-in');
    };
  };
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const introVideo = document.getElementById('intro-video');
    const backgroundVideo = document.getElementById('background-video');
    
    // انتظر حتى ينتهي الفيديو الثاني وبعد ذلك قم بتشغيل الفيديو الأول
    introVideo.addEventListener('ended', function () {
      setTimeout(function () {
        backgroundVideo.play();
      }, 500); // تأخير لمدة ثانية واحدة (1000 مللي ثانية)
    });
  });
  

      setTimeout(function() {
        document.querySelector(".Title").classList.add("active");
      }, 10000); 