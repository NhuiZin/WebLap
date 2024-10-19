const id = 1235;
const name = "hunliatlong";
const gender = "Male";
const subject = "Web";
const payment = 1000;

const studentInfo = `
    <p>1. My personal id : ${id}</p>
    <p>2. My personal name : ${name}</p>
    <p>3. My personal gender : ${gender}</p>
    <p>4. My personal studentSubject : ${subject}</p>
    <p>5. My personal payment : ${payment}</p>
`;

document.getElementById("studentInfo").innerHTML = studentInfo;

console.log(`1. My personal id : ${id}`);
console.log(`2. My personal name : ${name}`);
console.log(`3. My personal gender : ${gender}`);
console.log(`4. My personal studentSubject : ${subject}`);
console.log(`5. My personal payment : ${payment}`);

alert(
    `1. My personal id : ${id}\n2. My personal name : ${name}\n3. My personal gender : ${gender}\n4. My personal studentSubject : ${subject}\n5. My personal payment : ${payment}`
);