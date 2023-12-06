const array = [4, 7, 9, 2, 1, 5, 9, 8, 7, 9];
console.log("Mảng cũ: ", array);

for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
        if(array[i] > array[j]) {
            //biến trung gian để đảo vị trí
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        
    }

}

//array.sort;
console.log("Mảng mới: ", array);
let itemMax; //Phần tử lớn nhất
let maxAppear = 0; //số lần suất hiện lớn nhất

let count = 0;
for (let i = 0; i < array.length; i++){
    // biến đếm cho từng phần tử
    let countItem = 0;
    for (let j=0; j<array.length; j++){
        if(array[i]===array[j]){
            countItem++;
            //tăng biến đếm lên 1 đơn vị
        }
    }
    if (countItem>count){
        count = countItem;
        itemMax = array[i];
        maxAppear = count;
    }
}
console.log("Phần tử suất hiện nhiều nhất: ", itemMax);
console.log("Số lần suất hiện: ", maxAppear);

// Khai báo mảng chứa các phần tử không trùng lặp
let uniqueArr = [];
for (let i=0; i<array.length; i++){
    //Gắn một cờ
    let isDuplicate = false;

    //Kiểm tra phần tử đã tồn tại trong mảng chưa
    for(let j=0; j<uniqueArr.length; j++){
        if(array[i] === uniqueArr[j]){
            //phần tử bị trùng lặp
            //gắn lại cờ
            isDuplicate = true;
            break;
        }   
    }
    if(isDuplicate === false){
        uniqueArr.push(array[i]);
    }
}
console.log("Danh sách mảng đã loại bỏ phần tử trùng:", uniqueArr);