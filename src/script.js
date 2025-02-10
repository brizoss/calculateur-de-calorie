document.getElementById('calorie-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const frequency = parseInt(document.getElementById('frequency').value);
    const goal = document.getElementById('goal').value;

    let bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Formule de Harris-Benedict pour les hommes
    let tdee;

    switch (goal) {
        case 'stabilisation':
            tdee = bmr * 1.2;
            break;
        case 'perte-de-gras':
            tdee = bmr * 1.4;
            break;
        case 'prise-de-masse':
            tdee = bmr * 1.7;
            break;
        default:
            tdee = bmr * 1.2;
    }

    const result = document.getElementById('result');
    result.innerHTML = `Votre besoin caloriques quotidien est d'environ ${tdee.toFixed(2)} calories.`;
});