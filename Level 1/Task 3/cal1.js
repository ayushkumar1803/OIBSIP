const calculateTemp= () =>{
    const numberTemp =document.getElementById('temp').value;
    const tempSelected=document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;

    const celtofah =(cel) =>{
        let fahrenheit =parseFloat((cel * 9 / 5) + 32);
        return fahrenheit;
    }

    const fahtoCel = (fah) =>{
        let celsius =parseFloat((fah-32) * 5 /9);
        return celsius;
    }


    if(valueTemp =='cel')
    { 
        document.getElementById('resultC').innerHTML= celtofah(numberTemp)+ "&#176; Fahrenheit";
    }

    else 
    {   
        document.getElementById('resultC').innerHTML= fahtoCel(numberTemp)+ "&#176; Celsius";
    }
} 