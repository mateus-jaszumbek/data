// const h1 = document.querySelector('.container h1');
// const data = new Date();

// function getDiadaSemana(diaSemana) {
//     let diaSemanaTexto;

//     switch (diaSemana) {
//         case 0:
//             diaSemanaTexto = 'Domingo';
//         break;
//         case 1:
//             diaSemanaTexto = 'Segunda-feira';
//         break;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//         break;
//         case 3:
//             diaSemanaTexto = 'Quarta-feira';
//         break;
//         case 4:
//             diaSemanaTexto = 'Quinta-feira';
//         break;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//         break;
//         case 6:
//             diaSemanaTexto = 'Sabado';
//         break;
//         default:
//             diaSemanaTexto ="Dia da semana invalido";
//         break
//     }
//     return diaSemanaTexto;
//  }

//  function getNomeMes(numeroMes) {
//     let nomeMes;

//     switch (numeroMes) {
//         case 0:
//             nomeMes = 'janeiro';
//         break;
//         case 1:
//             nomeMes = 'Fevereiro';
//         break;
//         case 2:
//             nomeMes = 'Março';
//         break;
//         case 3:
//             nomeMes = 'Abril';
//         break;
//         case 4:
//             nomeMes = 'maio';
//         break;
//         case 5:
//             nomeMes = 'Junho';
//         break;
//         case 6:
//             nomeMes = 'Julho';
//         break;
//         case 7:
//             nomeMes = 'Agosto';
//         break;
//         case 8:
//             nomeMes = 'Outubro';
//         break;
//         case 9:
//             nomeMes = 'Setembro';
//         break;
//         case 10:
//             nomeMes = 'Novembro';
//         break;
//         case 11:
//             nomeMes = 'Dezembro';
//         break;
//         default:
//             nomeMes ="Mes invalido";
//         break
//     }
//     return nomeMes;
//  }

//  function zeroEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
//  }

//  function criaDate(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiadaSemana(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);

//     return (
//         `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
//         ` de ${data.getFullYear()} ` +
//         ` ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
//     ); 
//  }

//  h1.innerHTML = criaDate(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'});
