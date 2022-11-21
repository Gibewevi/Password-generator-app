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

// update character length
charactereLength.onchange = function() 
{
    length_text.innerText = charactereLength.value;
}

// update input checked number
for(i=0;i<4;i++)
{
    inputOption[i].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
        {
            inputOptionCheck++;
        } else 
        {
            inputOptionCheck--;
        }
        strengthIconUpdate();
    })
}

let colorStrength = ['#F64A4A','#FB7C58','#F8CD65', '#A4FFAF'];

const strengthIconUpdate = () => 
{
for(i=0;i<inputOption.length;i++)
{
    if(i<inputOptionCheck)
    {
        console.log('i : '+i);
        console.log('inputOptionCheck : '+inputOptionCheck);
        console.log('color : '+colorStrength[inputOptionCheck]);
        strengthIcons[i].style.setProperty('background-color',colorStrength[inputOptionCheck-1]);
        strengthIcons[i].style.setProperty('border-color',colorStrength[inputOptionCheck-1]);
    } else 
    {
        strengthIcons[i].style.setProperty('background-color','#18171F');
        strengthIcons[i].style.setProperty('border-color','white');
    }
}


}