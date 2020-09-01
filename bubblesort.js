swap = (arr, first , second) => {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

exports.bubblesort = function(list){
    let len = list.length;
    let i;
    let j;
    let stop;

    for (i=0; i<len; i++)
    {
        for(j=0, stop=len-i; j<stop; j++)
        {
            if(list[j] >list[j+1]){
                swap(list,j,j+1);
            }
        }
    }
    return list;
}

//console.log(bubble([5, 4, 8, 1, 9]));
