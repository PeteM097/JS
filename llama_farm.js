const out = document.querySelector(".out");

let num_llamas = 1000;
let years = 0;

while(num_llamas < 1500)
{
    num_llamas += num_llamas * 0.07;
    num_llamas -= num_llamas * 0.03;
    years += 1;
    out.innerHTML += "Current llama population: " + num_llamas + "\n";
}

out.innerHTML += "Current llama population: " + num_llamas;
out.innerHTML += " It took " + years + " years to reach your target.";
 