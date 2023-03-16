import { useState } from "react";

const PrimeNumbers = () => {
  const [primeNumbers, setPrimeNumbers] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);
  const handleReset = () => setPrimeNumbers([]);

  const handlePrime = (num) => {
    const arrPrimes = [];

    while (num > 1) {
      let prime = true;
      for (let i = 2; i < num; i++) {
        num % i === 0 ? (prime = false) : "";
      }
      if (prime) arrPrimes.push(num);
      num--;
    }

    arrPrimes.push(1);

    return setPrimeNumbers([...primeNumbers, arrPrimes.join(" - ")]);
  };

  return (
    <>
      <h1>Buscardor de numeros primos</h1>
      <div className="container">
        <input onChange={handleInput} type="number" min={1} />
        <button onClick={() => handlePrime(input)}>Calcular</button>
        <button onClick={handleReset}>Resetear</button>
      </div>
      <h2>Buscar numeros primos entre 1 y {input}</h2>
      <ul>
        {primeNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </>
  );
};

export default PrimeNumbers;
