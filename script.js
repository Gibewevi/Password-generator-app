
let btnGenerate = document.getElementById('btn');
let passwordID = document.getElementById('password');
let labelArray= ['TOO WEAK !', 'TOO WEAK !', 'WEAK','MEDIUM','STRONG'];
let labelStrength = document.getElementById('strength_label');
let charactereLength = document.getElementById('length');
// checkbox
let inputOption = document.querySelectorAll('input[type="checkbox"]');
let length_text = document.getElementById('length_text');
let strengthIcons = document.querySelectorAll('#strengthIcon');
let colorStrength = ['#F64A4A','#FB7C58','#F8CD65', '#A4FFAF'];
let numberInputChecked = 0;

let lengthDifficulty = 
[
    [uppercase = {bol:false, average:0, caracter:"abcdefghijklmnopqrstuvwxyz"}],
    [lowercase = {bol:false, average:0, caracter:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"}],
    [number = {bol:false, average:0, caracter: '0123456789'}],
    [symbol = {bol:false, average:0, caracter: '!@#$%^&*()_+~`|}{[]\:;?><,./-='}]
]

let clipboardIcon = document.getElementById('clipboardIcon');
clipboardIcon.addEventListener('click', function()
{
    navigator.clipboardIcon.writeText(passwordID.innerText);
    alert('Password copied !');
})

document.getElementById("length").oninput = function() {
    let value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #fff ' + value + '%, white 100%)'
    document.getElementById('length_text').innerHTML = this.value;
};

// generate new password
btnGenerate.addEventListener('click',function()
{
    PassWord(length_text.innerText,numberInputChecked);
})

for(i=0;i<inputOption.length;i++)
{
    // Update input check
    inputOption[0].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
             {
                // input boleen true/false
                lengthDifficulty[event.currentTarget.id][0].bol=true;
                // Number input checked
                numberInputChecked++;
                labelStrength.innerText = labelArray[numberInputChecked];
            }
        else
             {lengthDifficulty[event.currentTarget.id][0].bol=false;numberInputChecked--;labelStrength.innerText = labelArray[numberInputChecked]}
        strengthIconUpdate();
    })
}

const strengthIconUpdate = () => 
{
    for(i=0;i<inputOption.length;i++)
    {
        if(i<numberInputChecked)
        {
            // CSS update strength grid
            strengthIcons[i].style.setProperty('background-color',colorStrength[numberInputChecked-1]);
            strengthIcons[i].style.setProperty('border-color',colorStrength[numberInputChecked-1]);
        } else 
        {
             // CSS update strength grid
            strengthIcons[i].style.setProperty('background-color','#18171F');
            strengthIcons[i].style.setProperty('border-color','white');
        }
    }
}

const PassWord = (int_length,int_numberInputChecked) =>
{   
    const Average = () => 
    {
        let numberInputChecked = int_numberInputChecked;
        let average = Math.floor(int_length/numberInputChecked);
        let rest = (int_length-(average*numberInputChecked));
        return [average, numberInputChecked, rest];
    }

    let numberInputChecked = Average()[1];
    let average = Average()[0];
    let rest = Average()[2];
    let length = int_length;
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