# Back to the Future – An exercise project

## States

- The Back to the Future production team would like to bring its saga up to date with an unstoppable marketing technique:

- Go back to the past, to 2000! And make a super smart deal with a DVD sales store (you still remember what it is, we hope…) with a killer promo:

- The DVD of one part of the saga is worth €15
For the purchase of 2 DIFFERENT parts of the saga, we apply a 10% reduction on all “Back to the Future” DVDs purchased
For the purchase of 3 DIFFERENT parts of the saga, we apply a 20% reduction on all “Back to the Future” DVDs purchased
The DVD store also sells other films which cost €20 each.

- As input, a basket in text form, separated by newlines which contains the name of the films purchased
At the output, the number representing the price
You are free to show the result in any way you like and it can be very minimalist, as long as it is clear that the program knows how to read the input format and follows the specified rules. However, as indicated at the beginning of this statement, this code should be treated as if you were initiating it for your future team.


Examples of inputs and outputs

```js
Exemple n°1

input :

Back to the Future 1

Back to the Future 2

Back to the Future 3

Output :

36

Exemple n°2

input :

Back to the Future 1

Back to the Future 3

Output :

27

Exemple n°3 :

Input :

Back to the Future 1

Output :

15

Exemple n°4 :

Input :

Back to the Future 1

Back to the Future 2

Back to the Future 3

Back to the Future 2

Output :

48

Explication :

((15*4)*0.8) = 48

Exemple n°5

Input :

Back to the Future 1

Back to the Future 2

Back to the Future 3

La chèvre

Output :

56

Explication :

((15*3)*0.8)+20 = 56

```

## Requirements

- Node.js (version 14 or later)
- npm (version 6 or later)

- ## Installation
  
 ```sh
1. Clone the repository:

git clone https://github.com/Av-code80/Forward-to-the-Past

2. Navigate to the project directory:
   cd forward-to-the-past
3. npm install

4. npm run dev

- To build the application for production:

1. npm run build

- To preview the production build:

1. npm run preview

- To lint the code

1. npm run lint

- To format the code with prettier

1. npm run format
``

## License

- Distributed under the MIT License. See LICENSE for more information.

## Acknowledgements

- React
- TypeScript
- Vite
