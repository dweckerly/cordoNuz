function loadSave() {
    postXHR(api + "load.php", "id=" + uuid + "&mnf=" + mnf, function(data) {
        if (data) {
            var obj = JSON.parse(data);

        }
    });
}