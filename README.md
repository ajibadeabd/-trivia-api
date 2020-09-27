# Trivia-api - Backend

### Installation


1. Clone therepository to your local environment.

2. Navigate into the cloned folder 


### Running the server locally

1. Install all dependencies - <code>npm install</code>

2. Create a .env file, Copy the contents of <code>env.test</code> to <code>.env</code>

3. Start up the server - <code>npm start</code> | <code>npm run dev</code>

4. Server should be running on port 24434

###   four End points

1. ####  register End point

URL - https://trivia-quiz-api.herokuapp.com/api/v1/user/register

METHOD - POST

Sample Request

{
    "email":"emial@gmail.com",
    "password":"password",
    "con_password":"con_password",
    "name":"yourName",
}
Sample Response
{
    "success": true,
    "message": "successfully logged in",
    "data": null
}

2. ####  register End point 

URL - https://trivia-quiz-api.herokuapp.com/api/v1/user/login

METHOD - POST

Sample Request

{
    "email":"emial@gmail.com",
    "password":"password"
}
Sample Response
{ "success": true,
    "message": "successfully logged in",
    "data": {
        "success": true,
        "status": 200,
        "data": {
            "user": {
                "_id": "5f704be7d2c5ab00175fae50",
                "email": "email@gmail.com",
                "name": "email"
            },
            "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWJkIiwiX2lkIjoiNWY3MDRiZTdkMmM1YWIwMDE3NWZhZTUwIiwiaWF0IjoxNjAxMTk1MDczLCJleHAiOjE2MDExOTUxMzZ9.j61c_2mvNIPnPZcgR-yppk74CwrZOEepNvTydgVawuc",
            "refreshToken": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWJkIiwiX2lkIjoiNWY3MDRiZTdkMmM1YWIwMDE3NWZhZTUwIiwiaWF0IjoxNjAxMTk1MDczLCJleHAiOjE2MDI0MDQ2NzN9.Q7Z-moSwfxL65pmdmSDpjnDclo8dPmxhiXLDbdI4YVE"
        }
    }

}



3. ####  get ten randon question End point
 
URL -  https://trivia-quiz-api.herokuapp.com/api/v1/quiz/get_quiz

METHOD - GET

Sample Response
{
    "success": true,
    "message": "Ten random question has ben fetch succefully",
    "data": [
        {
            "id": 13,
            "question": "In which book is there an inn called Admiral Benbow?",
            "A": "Treasure Island",
            "B": "Peter Pan",
            "C": "Lord of the Rings",
            "D": "Gullivers Travels",
            "answer": "A"
        },
        {
            "id": 36,
            "question": "Duchess is a cat in which film ?",
            "A": "Aristocats",
            "B": "Lethal Weapon",
            "C": "101 Dalmatians",
            "D": "Men In Black",
            "answer": "A"
        },
        {
            "id": 15,
            "question": "In which Italian city do Romeo and Juliet live?",
            "A": "Verona",
            "B": "Naples",
            "C": "Milano",
            "D": "Pisa",
            "answer": "A"
        },
        {
            "id": 36,
            "question": "Duchess is a cat in which film ?",
            "A": "Aristocats",
            "B": "Lethal Weapon",
            "C": "101 Dalmatians",
            "D": "Men In Black",
            "answer": "A"
        },
        {
            "id": 6,
            "question": "Who is the author of the book 'Nineteen Eighty Four",
            "A": "Thomas Hardy",
            "B": "Emile Zola",
            "C": "George Orwell",
            "D": "Walter Scott",
            "answer": "C"
        },
        {
            "id": 16,
            "question": "Who managed the punk group The Sex Pistols?",
            "A": "Malcolm McClaren",
            "B": "John Lydon",
            "C": "Sid Vicious",
            "D": "They were unmanagable",
            "answer": "A"
        },
        {
            "id": 27,
            "question": "A Blue Whale has a heart roughly the size of a what?",
            "A": "VW Beetle",
            "B": "Basketball",
            "C": "Grapefruit",
            "D": "Peanut",
            "answer": "A"
        },
        {
            "id": 24,
            "question": "What lives in a Formicarium?",
            "A": "Ants",
            "B": "Turtles",
            "C": "Apes",
            "D": "Butterflies",
            "answer": "A"
        },
        {
            "id": 16,
            "question": "Who managed the punk group The Sex Pistols?",
            "A": "Malcolm McClaren",
            "B": "John Lydon",
            "C": "Sid Vicious",
            "D": "They were unmanagable",
            "answer": "A"
        },
        {
            "id": 7,
            "question": "The Mau Mau were terrorists in which country late 50s early 60s?",
            "A": "Kenya",
            "B": "Sudan",
            "C": "Malaysia",
            "D": "Ghana",
            "answer": "A"
        }
    ]
}

4. ####  post_answer End point 


URL - https://trivia-quiz-api.herokuapp.com/api/v1/quiz/post_answer

METHOD - POST

Sample Request

{
    "question1": {"id": "1","answer": "B"},
    "question2": {"id": "4","answer": "B"},
    "question3": {"id": "8","answer": "B"},
    "question4": {"id": "9","answer": "B"},
    "question5": {"id": "24","answer": "B"},
    "question6": {"id": 29","answer": "B"},
    "question7": {"id": "8","answer": "B"},
    "question8": {"id": "18","answer": "B"},
    "question9": {"id": "34","answer": "B"},
    "question10": {"id": "23","answer": "B"},
}
Sample Response
{
    "success": true,
    "message": "successfully logged in",
    "data": {
        "no_of_correct_answers": 5,
        "no_of_wrong_answers": 5,
        "scores_in_percentage": "50%"
    }
}