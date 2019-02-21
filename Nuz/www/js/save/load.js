function loadSave() {
    postXHR(api + "pages/start.php", "id=" + uuid + "&plat=" + plat, function(data) {
        if (data) {
            var obj = JSON.parse(data);

        }
    });
}