
const log = (msg, place) => {
    const date = new Date();
    console.log(date.toISOString() + ` ${place}: ${msg}`);
}

module.exports = log;