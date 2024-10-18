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



function getTimeFromMinutes(minutes) {
    if (minutes < 0 || !Number.isInteger(minutes) ||  isNaN(minutes)){
        console.log("Ошибка, проверьте данные");
    }
    else{
        let hours;
        let answer;
        let RemainingMinutes;
        hours = parseInt(minutes / 60);
        RemainingMinutes = minutes - hours*60;
        if (hours === 1){
            console.log(`Это 1 час и ${RemainingMinutes} минут`);
        }
        else if(hours > 1 && hours < 5){
            console.log(`Это ${hours} часа и ${RemainingMinutes} минут`)
        }
        else{
            console.log(`Это ${hours} часов и ${RemainingMinutes} минут`)
        }
    }
    }
    getTimeFromMinutes(412)


    function findMaxNumber(num1, num2, num3, num4) {
if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)){
    console.log(0)
}
else{
    if (num1 > num2 && num1 > num3 && num1 > num4){
        console.log(num1);
    }
    else {
        if (num2 > num3 && num2 > num4){
            console.log(num2);
        }
        else{
            if (num3 > num4){
                console.log(num3);
            }
            else{
                console.log(num4);
            }
        }
    }
   }
}
    
function fib(num) {
    if (typeof num !== 'number' || num <= 0 || !Number.isInteger(num)) return '';
    if (num === 1) return '0'
    let first = 0,
      second = 1,
      a;
   
    let res = `${first} ${second}`;
   
    for (let i = 0; i < num - 2; i++) {
      a = first + second;
      res += ` ${a}`;
      first = second;
      second = a;
    }
    console.log(res);
  }
 fib(8)  