function volumeOfCube(length){
    if (isNaN(length) || length < 0 || !Number.isInteger(length)){
        console.log('При вычислении произошла ошибка')
}
    else{
    let VolumeAnswer = length * length * length;
    let AreaAnswer = length * length * 6;
    let Answer = (`Объём куба: ${VolumeAnswer}, Площадь всей поверхности: ${AreaAnswer}`);
    console.log(Answer);
}
    }
volumeOfCube(6.74754);


function getCoupeNumber(ticket) {
    let answer;
if(ticket < 0 || isNaN(ticket) || !Number.isInteger(ticket)){
    return("Ошибка. Проверьте правильность введенного номера места")
}
else if(ticket === 0 || ticket > 36){
    return("Таких мест в вагоне не существует");
}
else{
  answer = ((ticket - 1) / 4) + 1;
  console.log(`Ваш номер ${parseInt(answer)}`);
    }
}
getCoupeNumber(9);
