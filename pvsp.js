$(document).ready(function() {

    var turn = 0;

    const square=['0','1','2','3','4','5','6','7','8','9'];

    var i = -1;

    $('.again').click(function(e) {  
        $('.notify').hide();
        $('.frame').show();
    });

    $('#1').click(function(e) {  
        if(square[1] != 'X' && square[1] != 'O')
        {
            if(turn==0)
            {
                $('#1').html('X');
                square[1] = 'X';
                turn = 1; 
            }
            else 
            {
                $('#1').html('O');
                square[1] = 'O';
                turn = 0;  
            }
            checkwin();
        }
    });

    $('#2').click(function(e) {  
        if(square[2] != 'X' && square[2] != 'O')
        {
            if(turn==0)
            {
                $('#2').html('X');
                square[2] = 'X';
                turn = 1; 
            }
            else 
            {
                $('#2').html('O');
                square[2] = 'O';
                turn = 0;  
            }
            checkwin();
        }
    });

    $('#3').click(function(e) {  
        if(square[3] != 'X' && square[3] != 'O')
        {
            if(turn==0)
            {
                $('#3').html('X');
                square[3] = 'X';
                turn = 1; 
            }
            else 
            {
                $('#3').html('O');
                square[3] = 'O';
                turn = 0;  
            }
            checkwin();
        }
    });

    $('#4').click(function(e) {  
        if(square[4] != 'X' && square[4] != 'O')
        {
            if(turn==0)
            {
                $('#4').html('X');
                square[4] = 'X';
                turn = 1; 
            }
            else 
            {
                $('#4').html('O');
                square[4] = 'O';
                turn = 0;  
            }
            checkwin();
        }
    });

    $('#5').click(function(e) {  
        if(square[5] != 'X' && square[5] != 'O')
        {
            if(turn==0)
            {
                $('#5').html('X');
                square[5] = 'X';
                turn = 1; 
            }
            else 
            {
                $('#5').html('O');
                square[5] = 'O';
                turn = 0;  
            }
            checkwin();
        }
    });

    $('#6').click(function(e) {  
        if(square[6] != 'X' && square[6] != 'O')
        {
            if(turn==0)
            {
                $('#6').html('X');
                square[6] = 'X';
                turn = 1; 
            }
            else 
            {
                $('#6').html('O');
                square[6] = 'O';
                turn = 0;  
            }
            checkwin();
        }
    });

    $('#7').click(function(e) {  
        if(square[7] != 'X' && square[7] != 'O')
        {
            if(turn==0)
            {
                $('#7').html('X');
                square[7] = 'X';
                turn = 1; 
            }
            else 
            {
                $('#7').html('O');
                square[7] = 'O';
                turn = 0;  
            }
            checkwin();
        }
    });

    $('#8').click(function(e) {  
        if(square[8] != 'X' && square[8] != 'O')
        {
            if(turn==0)
            {
                $('#8').html('X');
                square[8] = 'X';
                turn = 1; 
            }
            else 
            {
                $('#8').html('O');
                square[8] = 'O';
                turn = 0;  
            }
            checkwin();
        }
    });

    $('#9').click(function(e) {  
        if(square[9] != 'X' && square[9] != 'O')
        {
            if(turn==0)
            {
                $('#9').html('X');
                square[9] = 'X';
                turn = 1; 
            }
            else 
            {
                $('#9').html('O');
                square[9] = 'O';
                turn = 0;  
            }
            checkwin();
        }
    });

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
            setTimeout(function(){ 
                $('.frame').hide();
                $('.notify').show();
                $('.notifytext').html('Player 1 Win !');
            reset(); }, 100);
            
        }
        else if(i == 0) 
        {
            setTimeout(function(){ 
                $('.frame').hide();
                $('.notify').show();
                $('.notifytext').html('Player 2 Win !');
            reset(); }, 100);
        }
        else if(i == 2)
        {
            setTimeout(function(){ 
                $('.frame').hide();
                $('.notify').show();
                $('.notifytext').html('Draw !');
            reset(); }, 100);
        }     
    }

    function reset()
    {
        i = -1;
        turn = 0;
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