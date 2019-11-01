/*
[IMPORTANT]
You are free to create any number of helper function you want.
We know the problem could be searched online, and we are aware of those solutions. 
So please sight sources if you took help from any online resource.
*/



//IDs for all the table elements. You get the cell element just by using document.getElementById("A1")
var table_ids = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]

/*
An integer array of length 9. 
Usaged: This is to store the state to the tictactoe board.
When a move is made 
(Example player 1 (who is X) move at Cell 'A1' --- The board_state[0] will be made 1 )
Similarly, A move by player 2(who is O) at Cell 'A3' --- The board_state[2] will be made 0 )
We store the move of player 1 as '1' and player 2 as '0'. So after the above two moves the state should look like
[1, -1, 0, -1, -1, -1, -1, -1, -1]
*/
var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]


// A flag to keep track of the status of the game, false means the game is not started. The default value is set to false
var started = false

/* 
A variable to keep track of each players turn. Since the game always starts with player 1 - The default value is set to '1'
1 means player_1
0 means player_0
*/
var turn = 1 

/*
 @Return boolean
 @Param _str - A string variable - Note the type is not checked in the implementation
 The methods @Returns true if the _str is null or it has a length of 0, otherwise, the methods returns false
*/
function isEmpty(_str) 
{
	// console.log(_str)
	return (!_str || 0 === _str.length)
}

/*
@Return int This return the turn variable. Please note that 
turn = 1 is for player_1 and 
turn = 0 is for player_2
@Param - No param
*/
function whose_move()
{
	var stringX = "X"
	var stringO = "O"
	var boldX = stringX.bold()
	var boldO = stringO.bold()
	// var who = document.getElementById("turn_info").innerHTML
	// console.log(turn)
	//player 1
	if(turn==1)
	{
		return(document.getElementById("turn_info").innerHTML = "Turn for: " + boldX)
	}
	//player 2
	if(turn==0)
	{
		return(document.getElementById("turn_info").innerHTML = "Turn for: " + boldO)
	}
	return this.turn
}

/*
@Return void
@Param 
This methods toggles the 'turn' variable.
if the turn is set to 1 it will make it 0
if the turn is set to 0 it will make it 1
*/
function toggle_move() 
{
	// console.log('TOGGLE called')
	if(turn==1)
	{
		turn = 0
		return
	}
	if(turn==0)
	{
		turn = 1
		return 
	}	
	this.turn = !this.turn
}

/*
@Return boolean
@Param 
The method returns the value of the 'started' flag.
true means the game has started
false means the game has not started
When the game has not started the flag is set to false. As soon as the game starts the flag must be set to true.
Once the game has finished or user has clicked on reset_play the flag must be set to false.
*/
function game_started()
{
	return this.started
}




function checkWinner()
{
	// console.log("test")
	//ACROSS
	if(document.getElementById("A1").innerHTML == document.getElementById("A2").innerHTML && document.getElementById("A1").innerHTML == document.getElementById("A3").innerHTML)
	{
		alert("We have a winner")
	}
	if(document.getElementById("B1").innerHTML == document.getElementById("B2").innerHTML && document.getElementById("B1").innerHTML == document.getElementById("B3").innerHTML)
	{
		alert("We have a winner")
	}
	if(document.getElementById("C1").innerHTML == document.getElementById("C2").innerHTML && document.getElementById("C1").innerHTML == document.getElementById("C3").innerHTML)
	{
		alert("We have a winner")
	}
	//DOWN
	if(document.getElementById("A1").innerHTML == document.getElementById("B1").innerHTML && document.getElementById("A1").innerHTML == document.getElementById("C1").innerHTML)
	{
		alert("We have a winner")
	}
	if(document.getElementById("A2").innerHTML == document.getElementById("B2").innerHTML && document.getElementById("A2").innerHTML == document.getElementById("C2").innerHTML)
	{
		alert("We have a winner")
	}
	if(document.getElementById("A3").innerHTML == document.getElementById("B3").innerHTML && document.getElementById("A3").innerHTML == document.getElementById("C3").innerHTML)
	{
		alert("We have a winner")
	}
	//DIAGONAL
	if(document.getElementById("A1").innerHTML == document.getElementById("B2").innerHTML && document.getElementById("A1").innerHTML == document.getElementById("C3").innerHTML)
	{
		alert("We have a winner")
	}
	if(document.getElementById("A3").innerHTML == document.getElementById("B2").innerHTML && document.getElementById("A3").innerHTML == document.getElementById("C1").innerHTML)
	{
		alert("We have a winner")
	}
}


/*
TODO - Rule 1
This is the first method you'll implement. This method is called when the Begin Play button is clicked.
The method should do all the validations as stated in rule 1.
1. Verify if the player names are empty or not. Raise an alert if they are empty.
2. If the fields are empty don't start the game. This just means the function will return and do nothing. The 'started' flag will not be modified.
3. If all verification is successful, disable the name fields and update the player moves as shown in the image.
4. If all verification is successful, update the turn information on the page. (See the source code and image). And set the started flag to true.(this will help you track at any instant if the game is in start state or not.)
5. Once game has started, Handle multiple clicks on begin play.
*/

function begin_play()
{
	var player1_name = document.getElementById("player1_id").value
	var player2_name = document.getElementById("player2_id").value
	// console.log(turn, "begin")
		if(started == false)
	{
		if(isEmpty(player1_name) || isEmpty(player2_name))
		{
			alert("Two player game, both fields are mandatory!")
			return
		}
		else
		{
			started = true
			document.getElementById("player1_id").disabled = true
			document.getElementById("player2_id").disabled = true
			
			document.getElementById("player1_id").value = document.getElementById("player1_id").value + " (X)"
			document.getElementById("player2_id").value = document.getElementById("player2_id").value + " (O)"
			whose_move()
			return	
		}

	}
	else
	{
		alert("Already started, click reset play to start again")
	}
}

/*
TODO - Rule 2
This is the second method you'll implement. This method is called when the Reset Play button is clicked.
The method should do all the things as stated in rule 2.
1. The reset play button should reset the whole game.(At any time when reset is clicked - All the three text boxes should be cleared and Turn should be set to the default message.)
2. The text boxes for entering name should be enablled back.
3. The Tic Tac Toe Grid should be set to its default entries.
4. Clicking reset play again and again shall have the same effect.(or no effect when clicked multiple times)
Remember to set the strated flag as false

*/
function reset_play()
{
	started = false
	turn = 1
	var board_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1]
	document.getElementById("player1_id").disabled = false
	document.getElementById("player2_id").disabled = false
	
	document.getElementById("player1_id").value = null
	document.getElementById("player2_id").value = null
	
	document.getElementById("turn_info").innerHTML = "Game has not started."
	
	document.getElementById("A1").innerHTML = "A1"
	document.getElementById("A2").innerHTML = "A2"
	document.getElementById("A3").innerHTML = "A3"
	document.getElementById("B1").innerHTML = "B1"
	document.getElementById("B2").innerHTML = "B2"
	document.getElementById("B3").innerHTML = "B3"
	document.getElementById("C1").innerHTML = "C1"
	document.getElementById("C2").innerHTML = "C2"
	document.getElementById("C3").innerHTML = "C3"
}
/*
TODO - Rule 3
This is the last method you'll implement. This method is called everytime a move has been played (Play button was clicked).
The method should do all the things as stated in rule 2.
1. The moves should be validated and can only be these ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"]
2. Invalid moves should be reported by an alert message.(You are encorraged to use Modal which you learned in HW1 - Usage is not mandatory.)
3. If the move is a valid move, the grid should be updated with the correct move (Player 1 is always - 'X', and Player 2 is always 'O' (This is not zero!)) - The turn information should also be updated
	Hint: Use the turn variable to figure out who is currently playing. Use to toggle method to change moves.
4. A move should always be a valid move. (Example: If say a move was made in already filled cell, it should be invalidated with an alert.)
5. If the game has not started, clicking on <b>Play</b> should give an alert "The game has not started."<br/>
6. After any move, the state of the table should be validated.(see the document attached in the homework) 
   If the there is winner - Show it in an alert message - (Ex - Winner is X or O) - Displaying name is not important. <br/>
7. The game should reset itself once a winner is determined.<br/>
8. After all the moves have exhausted, you're not required to display any message. (It should be obvious to Reset play.)<br/>
*/
function play() 
{
	var move = document.getElementById("move_text_id").value
	// console.log(whose_move())
	// console.log(toggle_move())
	// toggle_move()
	if(started == false)
	{
		alert("The game hasn't started yet.")
	}
	else
	{
		if(move == "a1" || move == "A1" || move == "a2" || move == "A2" || move == "a3" || move == "A3"
			|| move == "b1" || move == "B1" || move == "b2" || move == "B2" || move == "b3" || move == "B3"
			|| move == "c1" || move == "C1" || move == "c2" || move == "C2" || move == "c3" || move == "C3")
		{
			switch(move)
			{
				case "a1":
				case "A1":
					//can only select a spot that hasn't already been selected already
					if(document.getElementById("A1").innerHTML == "A1")
					{
						if(turn == 1)
						{
							document.getElementById("A1").innerHTML = "X"
							toggle_move()
						}
						else
						{
							document.getElementById("A1").innerHTML = "O"
							toggle_move()
						}
					}
					else
					{
						alert("Invalid move chump, try one that hasn't already been picked!")
					}
					// toggle_move()
					document.getElementById("move_text_id").value = ""
					break;	
				
				case "a2":	
				case "A2":
					if(document.getElementById("A2").innerHTML == "A2")
					{
						if(turn == 1)
						{
							document.getElementById("A2").innerHTML = "X"
							toggle_move()
						}
						else
						{
							document.getElementById("A2").innerHTML = "O"
							toggle_move()
						}
					}
					else
					{
						alert("Invalid move chump, try one that hasn't already been picked!")
					}
					document.getElementById("move_text_id").value = ""
					break;
				
				case "a3":
				case "A3":
					if(document.getElementById("A3").innerHTML == "A3")
					{
						if(turn == 1)
						{
							document.getElementById("A3").innerHTML = "X"
							toggle_move()
							
						}
						else
						{
							document.getElementById("A3").innerHTML = "O"
							toggle_move()
						}
					}
					else
					{
						alert("Invalid move chump, try one that hasn't already been picked!")
					}
					document.getElementById("move_text_id").value = ""
					break;	
				case "b1":	
				case "B1":
					if(document.getElementById("B1").innerHTML == "B1")
					{
						if(turn == 1)
						{
							document.getElementById("B1").innerHTML = "X"
							toggle_move()
						}
						else
						{
							document.getElementById("B1").innerHTML = "O"
							toggle_move()
						}
					}
					else
					{
						alert("Invalid move chump, try one that hasn't already been picked!")
					}
					document.getElementById("move_text_id").value = ""
					break;	
				case "b2":	
				case "B2":
					if(document.getElementById("B2").innerHTML == "B2")
					{
						if(turn == 1)
						{
							document.getElementById("B2").innerHTML = "X"
							toggle_move()
							
						}
						else
						{
							document.getElementById("B2").innerHTML = "O"
							toggle_move()
						}
					}
					else
					{
						alert("Invalid move chump, try one that hasn't already been picked!")
					}
					document.getElementById("move_text_id").value = ""
					break;	
				case "b3":	
				case "B3":
					if(document.getElementById("B3").innerHTML == "B3")
					{
						if(turn == 1)
						{
							document.getElementById("B3").innerHTML = "X"
							toggle_move()
							
						}
						else
						{
							document.getElementById("B3").innerHTML = "O"
							toggle_move()
						}
					}
					else
					{
						alert("Invalid move chump, try one that hasn't already been picked!")
					}
					document.getElementById("move_text_id").value = ""
					break;	
				case "c1":	
				case "C1":
					if(document.getElementById("C1").innerHTML == "C1")
					{
						if(turn == 1)
						{
							document.getElementById("C1").innerHTML = "X"
							toggle_move()
							
						}
						else
						{
							document.getElementById("C1").innerHTML = "O"
							toggle_move()
						}
					}
					else
					{
						alert("Invalid move chump, try one that hasn't already been picked!")
					}
					document.getElementById("move_text_id").value = ""
					break;	
				case "c2":	
				case "C2":
					if(document.getElementById("C2").innerHTML == "C2")
					{
						if(turn == 1)
						{
							document.getElementById("C2").innerHTML = "X"
							toggle_move()
							
						}
						else
						{
							document.getElementById("C2").innerHTML = "O"
							toggle_move()
						}
					}
					else
					{
						alert("Invalid move chump, try one that hasn't already been picked!")
					}
					document.getElementById("move_text_id").value = ""
					break;	
				case "c3":	
				case "C3":
					if(document.getElementById("C3").innerHTML == "C3")
					{
						if(turn == 1)
						{
							document.getElementById("C3").innerHTML = "X"
							toggle_move()
							
						}
						else
						{
							document.getElementById("C3").innerHTML = "O"
							toggle_move()
						}
					}
					else
					{
						alert("Invalid move chump, try one that hasn't already been picked!")
					}
					document.getElementById("move_text_id").value = ""
					break;
			}
			whose_move()
		}
		else
		{
			alert("Invalid move chump, try again!")
		}		
	checkWinner()
	}
}

/*
Do not change this method.
*/
function moveEnter(event) {		
	if(event.keyCode == 13) {
		event.preventDefault()
		play()
	}

}
