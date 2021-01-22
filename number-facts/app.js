let favNumber = 5;
const baseURL = "http://numbersapi.com";

// 1. 
async function part1() {
    let res = await axios.get(`${baseURL}/${favNumber}?json`)
    console.log(res);

}
part1();
// 2. 
async function part2() {
    let favNumbers = [24, 7, 365];
    let res = await axios.get(`${baseURL}/${favNumbers}?json`)
    console.log(res);
}
part2();
// 3. 
async function part3() {
    let facts = await Promise.all(
        Array.from({ length: 4 }, () => {
            return axios.get(`${baseURL}/${favNumber}?json`);
        })
    )
    console.dir(facts);

    facts.forEach(data => {
        $("body").append(`<p>${data.data.text}</p>`)
    });

}

part3();