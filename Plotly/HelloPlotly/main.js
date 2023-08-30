let myGraph = document.getElementById('myGraph')

Plotly.newPlot(myGraph, [{
    x:[1, 35, 3, 4, 55],
    y:[1, 2, 45, 8, 16],
}], {
    margin:{
        t:0
    }
});