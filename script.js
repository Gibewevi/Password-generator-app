// numbers character
let charactereLength = document.getElementById('length');
// checkbox
let inputOption = document.querySelectorAll('input[type="checkbox"]');
console.log(inputOption)
// length text 
let length_text = document.getElementById('length_text');
// strength icon
let strengthIcons = document.querySelectorAll('#strengthIcon');
// number input checked
let inputOptionCheck = 0;
// color strength
let colorStrength = ['#F64A4A','#FB7C58','#F8CD65', '#A4FFAF'];
// length
let lengthDifficulty = [{uppercase:false},{lowercase:false},{number:false},{symbol:false}];
// update character length
charactereLength.onchange = function() 
{
    length_text.innerText = charactereLength.value;
}

// update input checked number
console.log(inputOption.length)

    inputOption[0].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
            {inputOptionCheck++;lengthDifficulty[0]=true;}
        else
            {inputOptionCheck--;lengthDifficulty[0]=false;}
        strengthIconUpdate();
    })

    inputOption[1].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
            {inputOptionCheck++;lengthDifficulty[1]=true;}
        else
            {inputOptionCheck--;lengthDifficulty[1]=false;}
        strengthIconUpdate();
    })

    inputOption[2].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
            {inputOptionCheck++;lengthDifficulty[2]=true;}
        else
            {inputOptionCheck--;lengthDifficulty[2]=false;}
        strengthIconUpdate();
    })

    inputOption[3].addEventListener('change', (event) => 
    {
        if(event.currentTarget.checked)
            {inputOptionCheck++;lengthDifficulty[3]=true;}
        else
            {inputOptionCheck--;lengthDifficulty[3]=false;}
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

const passWord = (int_length, bol_uppercase, bol_lowercase, bol_number, bol_symbol) =>
{   
    // length caracters
    let length = int_length;
    // bol strength
    let uppercase = bol_uppercase;
    let lowercase = bol_lowercase;
    let number = bol_number;
    let symbol = bol_symbol;

    const string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    const numeric = '0123456789';
    const punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    console.log(string.charAt());

    // boucle => longueur de la chaine minimum 
        // Générer un tableau avec les bol (upper,lower,numeric,symbol)
    // Parcourir le tableau avec un random et selectionner un element
        // Recreer une chaine et supprimer l'element du tableau jusqu'au dernier
}

passWord(0,false,false,false,false);