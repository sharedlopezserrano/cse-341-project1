const sarahRoute = (req, res) => {
    res.send('Sarah Route!');
};

const emilyRoute = (req, res) => {
    res.send('Emily Route!');
};

const hannahRoute = (req, res) => {
    res.send('Hannah Route!');
};


module.exports = {
    emilyRoute,
    hannahRoute,
    sarahRoute
};
