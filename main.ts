let dado = 0
// Inicializa la variable cat_lluvia en cero
let cant_lluvia = 0
for (let index = 0; index < 1825; index++) {
    dado = randint(0, 10)
    // Suma la cantidad del dado a la cantidad existente en cant_lluvia
    cant_lluvia = cant_lluvia + dado
}
let resultado = cant_lluvia / 1825
basic.showNumber(resultado)
