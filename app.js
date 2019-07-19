(function (R, C, L, H, Map) {
init();
function init(){s
    console.log(new Date().getUTCMilliseconds());
    var pizza=create2DArray(Map);
    console.log(pizza.length);
    
    // for (let index_i = 0; index_i < pizza.length; index_i++) {
    //     const element = pizza[index_i];
    //     console.log(element);
        
        
    // }
    console.log(new Date().getUTCMilliseconds());

}
function firstSlice(pizz){
    var slice =[];

}

    function create2DArray(Mapstring) {
        var arrayMap =[];
        Mapstring.split('\n').forEach(element => {
           element!=""?arrayMap.push(element.split('')):null;
        });
        return arrayMap;
    }

    function isSliceAcceptable(slice) {
        var m_count, t_count = countIngredients(slice);
        return isNoOfCellsPerSliceExceed(m_count) && isNoOfCellsPerSliceExceed(t_count);
    }

    function countIngredients(slice) {
        var m_count = 0;
        var t_count = 0;
        slice.split('').forEach(function (element) {
            element == "M" ? m_count++ : t_count++;
        });
        return m_count, t_count;
    }

    function isNoOfCellsPerSliceExceed(noOfCellsPerSclice) {
        return H <= noOfCellsPerSclice ? true : false;
    }

    function checkMinimumIngridientMet(ingridientTotal) {
        return L >= ingridientTotal ? true : false;
    }
})(3, 5, 1, 6, "TTTTT\nTMMMT\nTTTTT");