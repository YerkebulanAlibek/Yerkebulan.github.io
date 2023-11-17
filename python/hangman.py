import random

words = ['points', 'bebrik', 'batman', 'laptop', 'sigma', 'andrey',  'kahoot', 'albeni', 'ozera', 'nurdos', 'tea', 'bottle', 'grilfriend'] 
word = random.choice(words)
guessed_letters = []
attempts = 6
while attempts > 0:
    guessed_word = ''
    for letter in word:
        if letter in guessed_letters:
            guessed_word += letter
        else:
            guessed_word += '_ '

    if guessed_word == word:
        print('MOLODES!!! You guessed the word:', word)
        break

    print('Guess my word:', guessed_word)
    guess = input('Input letter: ').lower()

    if len(guess) != 1:
        print('Write only one letter')
        continue

    if guess in guessed_letters:
        print('Are you kidding?')
        continue

    if guess not in word:
        attempts -= 1
        print('You wrong! You have', attempts, 'tries left.')

    guessed_letters.append(guess)

else:
    print('You lose! The word was', word)

