$(document).ready(function() {

    const square=['0','1','2','3','4','5','6','7','8','9'];

    var i = -1;

    $('#1').click(function(e) {  
        if(square[1] != 'X' && square[1] != 'O')
        {
            $('#1').html('X');
            square[1] = 'X'; 
            checkwin();
        }
    });

    $('#2').click(function(e) {  
        if(square[2] != 'X' && square[2] != 'O')
        {
            $('#2').html('X');
            square[2] = 'X'; 
            checkwin();
        }
    });

    $('#3').click(function(e) {  
        if(square[3] != 'X' && square[3] != 'O')
        {
            $('#3').html('X');
            square[3] = 'X'; 
            checkwin();
        }
    });

    $('#4').click(function(e) {  
        if(square[4] != 'X' && square[4] != 'O')
        {
            $('#4').html('X');
            square[4] = 'X'; 
            checkwin();
        }
    });

    $('#5').click(function(e) {  
        if(square[5] != 'X' && square[5] != 'O')
        {
            $('#5').html('X');
            square[5] = 'X'; 
            checkwin();
        }
    });

    $('#6').click(function(e) {  
        if(square[6] != 'X' && square[6] != 'O')
        {
            $('#6').html('X');
            square[6] = 'X'; 
            checkwin();
        }
    });

    $('#7').click(function(e) {  
        if(square[7] != 'X' && square[7] != 'O')
        {
            $('#7').html('X');
            square[7] = 'X'; 
            checkwin();
        }
    });

    $('#8').click(function(e) {  
        if(square[8] != 'X' && square[8] != 'O')
        {
            $('#8').html('X');
            square[8] = 'X'; 
            checkwin();
        }
    });

    $('#9').click(function(e) {  
        if(square[9] != 'X' && square[9] != 'O')
        {
            $('#9').html('X');
            square[9] = 'X'; 
            checkwin();
        }
    });



    function compmark()
    {
        if(square[1] == '1' || square[2] == '2' || square[3] == '3' || square[4] == '4' || square[5] == '5' || square[6] == '6' || square[7]== '7' || square[8] == '8' || square[9] == '9')
        {
            if(square[1] == 'O' && square[2] == 'O')
            {
                if(square[3] == '3')
                {
                    square[3] = 'O';
                    $('#3').html('O');
                    $('#1,#2,#3').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[4] == 'O' && square[5] == 'O')
            {
                if(square[6] == '6')
                {
                    square[6] = 'O';
                    $('#6').html('O');
                    $('#4,#5,#6').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[7] == 'O' && square[8] == 'O')
            {
                if(square[9] == '9')
                {
                    square[9] = 'O';
                    $('#9').html('O');
                    $('#7,#8,#9').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[1] == 'O' && square[4] == 'O')
            {
                if(square[7] == '7')
                {
                    square[7] = 'O';
                    $('#7').html('O');
                    $('#4,#1,#7').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[2] == 'O' && square[5] == 'O')
            {
                if(square[8] == '8')
                {
                    square[8] = 'O';
                    $('#8').html('O');
                    $('#2,#5,#8').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[3] == 'O' && square[6] == 'O')
            {
                if(square[9] == '9')
                {
                    square[9] = 'O';
                    $('#9').html('O');
                    $('#3,#9,#6').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[1] == 'O' && square[5] == 'O')
            {
                if(square[9] == '9')
                {
                    square[9] = 'O';
                    $('#9').html('O');
                    $('#1,#5,#9').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[3] == 'O' && square[5] == 'O')
            {
                if(square[7] == '7')
                {
                    square[7] = 'O';
                    $('#7').html('O');
                    $('#3,#5,#7').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[3] == 'O' && square[2] == 'O')
            {
                if(square[1] == '1')
                {
                    square[1] = 'O';
                    $('#1').html('O');
                    $('#3,#1,#2').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[6] == 'O' && square[5] == 'O')
            {
                if(square[4] == '4')
                {
                    square[4] = 'O';
                    $('#4').html('O');
                    $('#4,#5,#6').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[9] == 'O' && square[8] == 'O')
            {
                if(square[7] == '7')
                {
                    square[7] = 'O';
                    $('#7').html('O');
                    $('#9,#8,#7').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[7] == 'O' && square[4] == 'O')
            {
                if(square[1] == '1')
                {
                    square[1] = 'O';
                    $('#1').html('O');
                    $('#4,#7,#1').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[8] == 'O' && square[5] == 'O')
            {
                if(square[2] == '2')
                {
                    square[2] = 'O';
                    $('#2').html('O');
                    $('#8,#5,#2').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[9] == 'O' && square[6] == 'O')
            {
                if(square[3] == '3')
                {
                    square[3] = 'O';
                    $('#3').html('O');
                    $('#9,#3,#6').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[9] == 'O' && square[5] == 'O')
            {
                if(square[1] == '1')
                {
                    square[1] = 'O';
                    $('#1').html('O');
                    $('#9,#5,#1').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[7] == 'O' && square[5] == 'O')
            {
                if(square[3] == '3')
                {
                    square[3] = 'O';
                    $('#3').html('O');
                    $('#7,#5,#3').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[1] == 'O' && square[3] == 'O')
            {
                if(square[2] == '2')
                {
                    square[2] = 'O';
                    $('#2').html('O');
                    $('#2,#3,#1').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[4] == 'O' && square[6] == 'O')
            {
                if(square[5] == '5')
                {
                    square[5] = 'O';
                    $('#5').html('O');
                    $('#4,#5,#6').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[7] == 'O' && square[9] == 'O')
            {
                if(square[8] == '8')
                {
                    square[8] = 'O';
                    $('#8').html('O');
                    $('#7,#8,#9').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[1] == 'O' && square[7] == 'O')
            {
                if(square[4] == '4')
                {
                    square[4] = 'O';
                    $('#4').html('O');
                    $('#4,#1,#7').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[2] == 'O' && square[8] == 'O')
            {
                if(square[5] == '5')
                {
                    square[5] = 'O';
                    $('#5').html('O');
                    $('#2,#5,#8').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[3] == 'O' && square[9] == 'O')
            {
                if(square[6] == '6')
                {
                    square[6] = 'O';
                    $('#6').html('O');
                    $('#3,#9,#6').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[1] == 'O' && square[9] == 'O')
            {
                if(square[5] == '5')
                {
                    square[5] = 'O';
                    $('#5').html('O');
                    $('#1,#5,#9').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else if(square[3] == 'O' && square[7] == 'O')
            {
                if(square[5] == '5')
                {
                    square[5] = 'O';
                    $('#5').html('O');
                    $('#3,#5,#7').css('color', 'green');
                    i = 0;
                    win();
                }
            }
            else 
            {
                var choice = Math.floor((Math.random() * 9) + 1);
                if(choice == 1 && square[1] == '1')
                {
                    square[1] = 'O';
                    $('#1').html('O');
                }
                else if(choice == 2 && square[2] == '2')
                {
                    square[2] = 'O';
                    $('#2').html('O');
                }
                else if(choice == 3 && square[3] == '3')
                {
                    square[3] = 'O';
                    $('#3').html('O');
                }
                else if(choice == 4 && square[4] == '4')
                {
                    square[4] = 'O';
                    $('#4').html('O');
                }
                else if(choice == 5 && square[5] == '5')
                {
                    square[5] = 'O';
                    $('#5').html('O');
                }
                else if(choice == 6 && square[6] == '6')
                {	
                    square[6] = 'O';
                    $('#6').html('O');
                }
                else if(choice == 7 && square[7] == '7')
                {
                    square[7] = 'O';
                    $('#7').html('O');
                }
                else if(choice == 8 && square[8] == '8')
                {
                    square[8] = 'O';
                    $('#8').html('O');
                }
                else if(choice == 9 && square[9] == '9')
                {	
                    square[9] = 'O';
                    $('#9').html('O');
                }
                else
                {
                    compmark();
                }
            }
        }
    }

    function checkwin()
    {
        if(square[1] == square[2] && square[2] == square[3])
        {
            if(square[1] == 'X')
            { 
                i = 1; 
            }
		    else
            {
			    i = 0;
            }
            $('#1,#2,#3').css('color', 'green');
        }
        else if(square[4] == square[5] && square[5] == square[6])
        {
            if(square[4] == 'X')
            { 
                i = 1; 
            }
		    else
            {
			    i = 0;
            }
            $('#4,#5,#6').css('color', 'green');
        }
        else if(square[7] == square[8] && square[8] == square[9])
        {
            if(square[7] == 'X')
            { 
                i = 1; 
            }
		    else
            {
			    i = 0;
            }
            $('#7,#8,#9').css('color', 'green');
        }
        else if(square[1] == square[4] && square[4] == square[7])
        {
            if(square[1] == 'X')
            { 
                i = 1; 
            }
		    else
            {
			    i = 0;
            }
            $('#1,#4,#7').css('color', 'green');
        }
        else if(square[2] == square[5] && square[5] == square[8])
        {
            if(square[2] == 'X')
            { 
                i = 1; 
            }
		    else
            {
			    i = 0;
            }
            $('#2,#5,#8').css('color', 'green');
        }
        else if(square[3] == square[6] && square[6] == square[9])
        {
            if(square[3] == 'X')
            { 
                i = 1; 
            }
		    else
            {
			    i = 0;
            }
            $('#3,#6,#9').css('color', 'green');
        }
        else if(square[1] == square[5] && square[5] == square[9])
        {
            if(square[1] == 'X')
            { 
                i = 1; 
            }
		    else
            {
			    i = 0;
            }
            $('#1,#5,#9').css('color', 'green');
        }
        else if(square[3] == square[5] && square[5] == square[7])
        {
            if(square[3] == 'X')
            { 
                i = 1; 
            }
		    else
            {
			    i = 0;
            }
            $('#5,#7,#3').css('color', 'green');
        }
        else if(square[1] != '1' && square[2] != '2' && square[3] != '3' && square[4] != '4' && square[5] != '5' && square[6] != '6' && square[7]!= '7' && square[8] != '8' && square[9] != '9')
        {
            i = 2;
        }
        else 
        {
            i = -1;
        }
        win();
    }

    function win()
    {
        if(i == 1)
        {
            setTimeout(function(){ alert("You Win !");
            reset(); }, 100);
            
        }
        else if(i == 0) 
        {
            setTimeout(function(){ alert("Computer Win !");
            reset(); }, 100);
        }
        else if(i == 2)
        {
            setTimeout(function(){ alert("Draw !");
            reset(); }, 100);
        }     
        else
        {
            compmark();
        }
    }

    function reset()
    {
        i = -1;
        square[1] = 1;
        square[2] = 2;
        square[3] = 3;
        square[4] = 4;
        square[5] = 5;
        square[6] = 6;
        square[7] = 7;
        square[8] = 8;
        square[9] = 9;
        $('#1,#2,#3,#4,#5,#6,#7,#8,#9').html(' ');
        $('#1,#2,#3,#4,#5,#6,#7,#8,#9').css('color', 'black');
    }
});