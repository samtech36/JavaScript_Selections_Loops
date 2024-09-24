console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let i = 1; i <= 100; i++)
{
    if (i % 2 !== 0)
    {
        console.log(i);

    }

}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log('FIZZBUZZ');
    }
    else if (i % 3 == 0)
    {
        console.log('FIZZ');
    }
    else if (i % 5 == 0)
    {
        console.log('BUZZ');
    }
    else
    {
        console.log(`${i} no fizz nor buzz.`)
    }
    
}


//Exercise 3 Section
//while loop
console.log("EXERCISE 3:\n==========\n");

let k = 1;

while (k <= 100) {
    if (k % 3 == 0 && k % 5 == 0)
        {
            console.log('FIZZBUZZ');
        }
        else if (k % 3 == 0)
        {
            console.log('FIZZ');
        }
        else if (k % 5 == 0)
        {
            console.log('BUZZ');
        }
        else
        {
            console.log(`${k} no fizz nor buzz`);
        }
        k++;

}

//do-while loop

let x = 1;

do {
    if (x % 3 == 0 && x % 5 == 0)
        {
            console.log('FIZZBUZZ');
        }
        else if (x % 3 == 0)
        {
            console.log('FIZZ');
        }
        else if (x % 5 == 0)
        {
            console.log('BUZZ');
        }
        else
        {
            console.log(`${x} no fizz nor buzz.`)
        }
        x++;
    
} while (x <= 100);




//Exercise 4: Find value
console.log("EXERCISE 4:\n==========\n");

let numberToFind = Math.round(Math.random() * 500);

let n = Math.round(Math.random() * (500 - 100) + 100);


let foundValue = false;

for (let i = 1; i <= n; i++)
{
    if (i == numberToFind)
    {
       console.log(`Found ${numberToFind}!`);
        break;
    }
    if (i == n) {
        console.log(`Did not find ${numberToFind} within 1-${n}..`);
    }
}






