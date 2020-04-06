var msTensNum = document.getElementById('msTens');
var msHundredsNum = document.getElementById('msHundreds');
var secondOnesNum = document.getElementById('secondOnes');
var secondTensNum = document.getElementById('secondTens');
var colon = document.getElementById('colon');

msTensNum.textContent = '0';
msHundredsNum.textContent = '0';
secondOnesNum.textContent = '0';
secondTensNum.textContent = '0';

var msTensCount = 0;
var msHundredsCount = 0;
var secondOnesCount = 0;
var secondTensCount = 0;



function updateMSTens(){


    if (msTensCount < 10)
    {
        msTensCount++;

        if(msTensCount === 10)
        {

            msTensCount = 0;
            msTensNum.textContent = '0';

            if(updateMSHundreds())
            {

                window.clearInterval(runTimer);
                msTensNum.classList.add('redDigit');
                msHundredsNum.classList.add('redDigit');
                secondOnesNum.classList.add('redDigit');
                secondTensNum.classList.add('redDigit');
                colon.classList.add('redDigit');



            };
           

        }

        msTensNum.textContent = msTensCount; 
    
    }



}


        

function updateMSHundreds(){
    

    if (msHundredsCount < 10){

        msHundredsCount++;

        if(msHundredsCount === 10){

            msHundredsCount = 0;
            msHundredsNum.textContent = '0';

            if(updateSecOnes()){

                return true;

            };
            

        }
        msHundredsNum.textContent = msHundredsCount;

    }
    

}

function updateSecOnes(){

    

    if (secondOnesCount < 10){

        secondOnesCount++;

        if(secondOnesCount === 10){

            secondOnesCount = 0;
            secondOnesNum.textContent = '0';

            if(updateSecTens()){

                return true;

            };
          

        }
        secondOnesNum.textContent = secondOnesCount;

    }
    

}

function updateSecTens(){


    secondTensCount++
    secondTensNum.textContent = secondTensCount;
    return true;
    

}



    var runTimer = setInterval(updateMSTens, 10);


