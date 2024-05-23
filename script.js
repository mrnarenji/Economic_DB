Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQeLneeRd3x3cHvNl8WRzl9wZOPg9PJwrqpNCAPaIzqAfN2Ri9SMDTclqlE1lccJlte60SuBOJqKWeW/pub?gid=714893787&single=true&output=csv", {
    download: true,
    complete: function(results) {
        let data = results.data;
        drawChart(data);
    }
});
