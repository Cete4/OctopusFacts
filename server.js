import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

const app = express();

const facts = [
    'Octopus are very cool',
    'Octopuses are ocean creatures that are most famous for having eight arms and bulbous heads.',
    'All octopuses are thought to have some venom that comes from bacteria living inside the animals.',
    'Octopus have been observed using tools',
    'An octopuses can change the color of its entire body in just three-tenths of a second.'
]
// Additional logging information
app.use(morgan('dev'));

// Basic routing to start with
app.get('/', function (req, res) {
    res.json({
        success: true,
        fact: {
            message: 'success',
            facts: facts
        }
    })
});

app.post('/', function (req,res){
    console.log(res)
    facts.push()
    res.json({
        success: true,
        fact: {
            message: 'success',
            facts: facts
        }
    })
})
dotenv.config();

// App listening on port 3000
app.listen(3000);