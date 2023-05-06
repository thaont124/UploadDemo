let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let videoUrl = URL.createObjectURL(this.response);
        document.getElementById("videoPlayer").src = videoUrl;
    }
};
xhttp.open("GET", "/image/fileSystem/PEPSI.mp4", true);
xhttp.responseType = "blob";
xhttp.send();
