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
// color strength
let colorStrength = ['#F64A4A','#FB7C58','#F8CD65', '#A4FFAF'];
// number input checked
let count = 0;
// length array
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


for(i=0;i<inputOption.length;i++)
{
    // Update input check
    inputOption[i].addEventListener('change', (event) => 
    {
        
        if(event.currentTarget.checked)
             {

                // input boleen true/false
                lengthDifficulty[event.currentTarget.id][0].bol=true;
                // Number input checked
                count++;
                labelStrength.innerText = labelArray[count];
            }
        else
             {lengthDifficulty[event.currentTarget.id][0].bol=false;count--;labelStrength.innerText = labelArray[count]}
        strengthIconUpdate();
    })
}

// Update strength icon 
const strengthIconUpdate = () => 
{
    for(i=0;i<inputOption.length;i++)
    {
        if(i<count)
        {
            // CSS update strength grid
            strengthIcons[i].style.setProperty('background-color',colorStrength[count-1]);
            strengthIcons[i].style.setProperty('border-color',colorStrength[count-1]);
        } else 
        {
             // CSS update strength grid
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
    // average per category 
    let average = Average()[0];
    // rest of average
    let rest = Average()[2];
    // password length
    let length = int_length;
    // password
    let password = '';

    // average distribution
    lengthDifficulty.forEach(element => {
        if(element[0].bol)
        {
            for(j=0;j<average;j++)
            {
                // distribute caracter per category
                let caracter =  element[0].caracter.charAt(Math.floor(Math.random()* element[0].caracter.length))
                password += caracter
            }
        }
    });

    lengthDifficulty.forEach(element => {
        if(element[0].bol && rest>0)
        {
            // distribute rest 
            let caracter = element[0].caracter.charAt(Math.floor(Math.random()*element[0].caracter.length))
            password += caracter
            rest--;
        }
    });

password = password.split('').sort(function(){return 0.5-Math.random();}).join('');
passwordID.innerText = password;
return password;
}