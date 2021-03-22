function starSign(date) {

    date.setYear(2000);

    const currentDateTime = date.getTime();

    const aquariusStartTime = new Date(2000, 1, 21).getTime();
    const piscesStartTime = new Date(2000, 2, 20).getTime();
    const ariesStartTime = new Date(2000, 3, 21).getTime();
    const taurusStartTime = new Date(2000, 4, 21).getTime();
    const geminiStartTime = new Date(2000, 5, 22).getTime();
    const cancerStartTime = new Date(2000, 6, 22).getTime();
    const leoStartTime = new Date(2000, 7, 23).getTime();
    const virgoStartTime = new Date(2000, 8, 24).getTime();
    const lbraStartTime = new Date(2000, 9, 24).getTime();
    const scorpioStartTime = new Date(2000, 10, 24).getTime();
    const sagittariusStartTime = new Date(2000, 11, 23).getTime();
    const capricornStartTime = new Date(2000, 12, 22).getTime();
 

    if(currentDateTime >=  aquariusStartTime  && aquariusStartTime <  piscesStartTime){
        return "Aquarius";

    }else if(currentDateTime >=  piscesStartTime && piscesStartTime < ariesStartTime ){
        return "Pisces";
    }
    else if(currentDateTime >=  ariesStartTime && ariesStartTime < taurusStartTime ){
        return "Aries";
    }
    else if(currentDateTime >=  taurusStartTime && taurusStartTime < gemeiniStartTime ){
        return "Taurus";
    }
    else if(currentDateTime >=  geminiStartTime && geminiStartTime < cancerStartTime ){
        return "Gemini";
    }
    else if(currentDateTime >=  cancerStartTime && cancerStartTime < leoStartTime ){
        return "Cancer";
    }
    else if(currentDateTime >=  leoStartTime && leoStartTime < virgoStartTime ){
        return "Leo";
    }
    else if(currentDateTime >=  virgoStartTime && virgoStartTime  < lbraStartTime ){
        return "Virgo";
    }
    else if(currentDateTime >=  lbraStartTime && lbraStartTime  < scorpioStartTime ){
        return "Libra";
    }
    else if(currentDateTime >=  scorpioStartTime && scorpioStartTime  < sagittariusStartTime ){
        return "Scorpio";
    }
    else if(currentDateTime >=  sagittariusStartTime && sagittariusStartTime  < capricornStartTime ){
        return "Sagittarius";
    }
    else{
        return "Capricorn";
    }
}

console.log(starSign(new Date(1970, 5, 5)));