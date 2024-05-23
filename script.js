Papa.parse("PUBLISHED_CSV_LINK_HERE", {
    download: true,
    complete: function(results) {
        let data = results.data;
        drawChart(data);
    }
});
