var data = [];
var dataCount = 0;

function getNewData() {
    console.log("getNewData has been executed");
    var newData;
    newData.gameName = document.getElementById(gamename).innerHTML;
    newData.rank = document.getElementById(rank).innerHTML;
    newData.kad = document.getElementById(kad).innerHTML;
    newData.MVPs = document.getElementById(mvps).innerHTML;
    newData.points = document.getElementById(points).innerHTML;
    console.log(newData)
}