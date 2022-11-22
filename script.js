//button GENERATE ->
let btnGenerate = document.getElementById('btn');
// Password 
let passwordID = document.getElementById('password');
// Array strength label
let labelArray= ['TOO WEAK !', 'TOO WEAK !', 'WEAK','MEDIUM','STRONG'];
// Label html label
let labelStrength = document.getElementById('strength_label');
// numbers character
let charactereLength = document.getElementById('length');
// checkbox
let inputOption = document.querySelectorAll('input[type="checkbox"]');
// length text 
let length_text = document.getElementById('length_text');
// strength icon
let strengthIcons = document.querySelectorAll('#strengthIcon');
// number input checked
let inputOptionCheck = 0;
// color strength
let colorStrength = ['#F64A4A','#FB7C58','#F8CD65', '#A4FFAF'];
// number input checked
let count = 0;
// length
let lengthDifficulty = 
[
    [uppercase = {bol:false, average:0, caracter:"abcdefghijklmnopqrstuvwxyz"}],
    [lowercase = {bol:false, average:0, caracter:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}],
    [number = {bol:false, average:0, caracter: '0123456789'}],
    [symbol = {bol:false, average:0, caracter: '!@#$%^&*()_+~`|}{[]\:;?><,./-='}]
]
// update character length
charactereLength.onchange = function() 
{
    length_text.innerText = charactereLength.value;
}

// generate new password
btnGenerate.addEventListener('click',function()
{
    PassWord(length_text.innerText,count);
})

// update input checked number
    inputOption[0].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
            {inputOptionCheck++;lengthDifficulty[0][0].bol=true;count++;labelStrength.innerText = labelArray[count]}
        else
            {inputOptionCheck--;lengthDifficulty[0][0].bol=false;count--;labelStrength.innerText = labelArray[count]}
        strengthIconUpdate();
    })

    inputOption[1].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
            {inputOptionCheck++;lengthDifficulty[1][0].bol=true;count++;labelStrength.innerText = labelArray[count]}
        else
            {inputOptionCheck--;lengthDifficulty[1][0].bol=false;count--;labelStrength.innerText = labelArray[count]}
        strengthIconUpdate();
    })

    inputOption[2].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
            {inputOptionCheck++;lengthDifficulty[2][0].bol=true;count++;labelStrength.innerText = labelArray[count]}
        else
            {inputOptionCheck--;lengthDifficulty[2][0].bol=false;count--;labelStrength.innerText = labelArray[count]}
        strengthIconUpdate();
    })

    inputOption[3].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
            {inputOptionCheck++;lengthDifficulty[3][0].bol=true;count++;labelStrength.innerText = labelArray[count]}
        else
            {inputOptionCheck--;lengthDifficulty[3][0].bol=false;count--;labelStrength.innerText = labelArray[count]}
        strengthIconUpdate();
    })


const strengthIconUpdate = () => 
{
    for(i=0;i<inputOption.length;i++)
    {
        if(i<inputOptionCheck)
        {
            strengthIcons[i].style.setProperty('background-color',colorStrength[inputOptionCheck-1]);
            strengthIcons[i].style.setProperty('border-color',colorStrength[inputOptionCheck-1]);
        } else 
        {
            strengthIcons[i].style.setProperty('background-color','#18171F');
            strengthIcons[i].style.setProperty('border-color','white');
        }
    }
}

const PassWord = (int_length,int_count) =>
{   
    // average function
    const Average = () => 
    {
        let count = int_count;
        let average = Math.floor(int_length/count);
        let rest = (int_length-(average*count));
        return [average, count, rest];
    }
    // count => (upper/lower/number/symbol)
    let count = Average()[1];
    console.log('count'+count)
    // average per category 
    let average = Average()[0];
    // rest of average
    let rest = Average()[2];
    // password length
    let length = int_length;
    // password
    let password = '';

    // average distribution
    for(i=0;i<lengthDifficulty.length;i++)
    {
        if(lengthDifficulty[i][0].bol)
        {
            for(j=0;j<average;j++)
            {
                // distribute caracter per category
                let caracter = lengthDifficulty[i][0].caracter.charAt(Math.floor(Math.random()*lengthDifficulty[i][0].caracter.length))
                password += caracter
            }
        }
    }
    for(i=0;i<count;i++)
    {
        if(lengthDifficulty[i][0])
        {
            if(rest>0)
            {
                // distribute rest 
                let caracter = lengthDifficulty[i][0].caracter.charAt(Math.floor(Math.random()*lengthDifficulty[i][0].caracter.length))
                password += caracter
                rest--;
            }
        } 
    }

password = password.split('').sort(function(){return 0.5-Math.random();}).join('');
passwordID.innerText = password;
return password;
}