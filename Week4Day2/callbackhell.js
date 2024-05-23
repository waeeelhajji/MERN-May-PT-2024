function getData(id, callback) {
    setTimeout(function () {
        console.log("finished 1st function, getting second");
        const data = { id: id, name: "John" };
        callback(null, data);
    }, 1000);
}

function getMoreData(data, callback) {
    setTimeout(function () {
        console.log("finished 2nd function, getting third");
        const moreData = { ...data, age: 25 };
        callback(null, moreData);
    }, 1000);
}

function getEvenMoreData(data, callback) {
    setTimeout(function () {
        console.log("finished 3rd function, returning");
        const evenMoreData = { ...data, country: "USA" };
        callback(null, evenMoreData);
    }, 1000);
}

getData(1, function (err, data) {
    if (err) {
        console.error("Error fetching data:", err);
    } else {
        getMoreData(data, function (err, moreData) {
            if (err) {
                console.error("Error fetching more data:", err);
            } else {
                getEvenMoreData(moreData, function (err, evenMoreData) {
                    if (err) {
                        console.error("Error fetching even more data:", err);
                    } else {
                        console.log("end", evenMoreData);
                    }
                });
            }
        });
    }
});
