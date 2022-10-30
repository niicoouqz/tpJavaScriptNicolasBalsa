alert("Bienvenido a tu simulador de notas, aca vas a saber si tu esfuerzo y trabajo durante el año tiene recompensa, o si tenes que seguir trabajando en ello, muchos exitos.")

let bandera = true
do {

    let nombre = prompt("Ingrese su nombre completo")
    let nota1 = parseFloat(prompt("Ingrese su primer nota"))
    let nota2 = parseFloat(prompt("Ingrese su segunda nota"))
    let nota3 = parseFloat(prompt("Ingrese su tercer nota"))
    let nota4 = parseFloat(prompt("Ingrese su cuarta nota"))
    let nota5 = parseFloat(prompt("Ingrese su quinta nota"))

    let total = nota1 + nota2 + nota3 + nota4 + nota5
    let promedio = total / 5
    if (promedio == 10) {
        console.log(`${nombre}: Felicitaciones sos un alumno/a EXTRAORDINARIO !! Su promedio es ${promedio.toFixed(2)} `)
    } else if (promedio > 7) {
        console.log(`${nombre}: Felicitaciones su materia fue aprobada con un puntaje alto !! Su promedio es ${promedio.toFixed(2)} `)
    } else if (promedio >= 4) {
        console.log(`${nombre}: Felicitaciones aprobo su materia, usted puede seguir mejorando!! Su promedio es ${promedio.toFixed(2)} `)
    } else {
        console.log(`${nombre} : Desaprobo la materia. Su promedio es ${promedio.toFixed(2)} `)
    }
    let pregunta = prompt(`¿Quiere ingresar otro/a alumno/a? "ESC" para no `)
    if(pregunta.toUpperCase() == "ESC"){
        bandera = false
        alert("Gracias por usar nuestra plataforma!!")
    }
} while (bandera)

