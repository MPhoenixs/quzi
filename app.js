const question = [
    {'ques':'Which protocol is used for transferring files over the internet?',
       'a': 'SMTP',
       'b' : 'FTP',
       'c' : 'SNMP',
        'd' : 'DHCP',
        'cor' : 'b'
    },{'ques':'What is the main purpose of an Operating System?',
       'a': ' Coding',
       'b' : 'Compiling',
       'c' : 'Managing',
        'd' : 'Debugging',
        'cor' : 'c'
    },{'ques':'Which device connects multiple networks together?',
        'a': 'Switch',
        'b' : 'Router',
        'c' : 'Hub',
         'd' : 'Bridge',
         'cor' : 'b'
     },
     {'ques':'Which scheduling algorithm gives the shortest job first?',
        'a': 'RoundRobin',
        'b' : 'FIFO',
        'c' : 'Priority',
         'd' : 'SJF',
         'cor' : 'd'
     },
     {'ques':'Which layer of the OSI model handles encryption and compression?',
        'a': 'Network',
        'b' : 'Transport',
        'c' : 'Presentation',
         'd' : 'Session',
         'cor' : 'c'
     }
]
let index = 0;
let right = 0;
const questbox = document.getElementById("quest");
const optionInputs = document.querySelectorAll('.options');
const loadquestion = ()=>{
    if(index == 5){
        return end();
    }
    const data = question[index];
    questbox.innerText = `${index+1}) ${data.ques} `;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
loadquestion();
const submitquiz = ()=>{
    const ans = getanswer();
    const data = question[index];
    if(ans == data.cor){
        right++;
    }
    reset();
    index++;
    loadquestion();
}
const getanswer = ()=>{
    let answer = "";
    optionInputs.forEach(
        (inputs) =>{
            if(inputs.checked){
                    answer = inputs.value;        
            }
        }
    )
    return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input)=>{
            input.checked = false;
        }
    )
}
const end = () => {
    const box = document.getElementById("box");
    box.style.display = "flex";
    box.style.flexDirection = "column";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.padding = "50px";
    box.style.fontSize = "2rem";
    box.innerHTML = `
        <h1 style="font-size: 2.5rem; margin-bottom: 20px; text-align: center;">🎉 Thank you for playing the quiz!</h1>
        <h2 style="font-size: 2rem; text-align: center;">You got ${right}/5 correct ✅</h2>
    `;
}


