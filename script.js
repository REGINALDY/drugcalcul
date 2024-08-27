<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drug Dose Calculator</title>
</head>
<body>
    <h2>Drug Dose Calculator</h2>
    <label for="mgml">Concentration (mg/mL):</label>
    <input type="number" id="mgml" oninput="calculate()" placeholder="Enter mg/mL"><br>

    <label for="ml">Volume (mL):</label>
    <input type="number" id="ml" oninput="calculate()" placeholder="Enter mL"><br>

    <label for="mgkg">Dose (mg/kg):</label>
    <input type="number" id="mgkg" oninput="calculate()" placeholder="Enter mg/kg"><br>

    <label for="kg">Weight (kg):</label>
    <input type="number" id="kg" oninput="calculate()" placeholder="Enter kg"><br>

    <h3>Results</h3>
    <p id="result"></p>

    <script>
        function calculate() {
            let mgml = parseFloat(document.getElementById('mgml').value);
            let ml = parseFloat(document.getElementById('ml').value);
            let mgkg = parseFloat(document.getElementById('mgkg').value);
            let kg = parseFloat(document.getElementById('kg').value);
            let result = '';

            if (!isNaN(mgml) && !isNaN(ml)) {
                if (!isNaN(kg)) {
                    mgkg = (mgml * ml) / kg;
                    result = `Dose: ${mgkg.toFixed(2)} mg/kg`;
                } else if (!isNaN(mgkg)) {
                    kg = (mgml * ml) / mgkg;
                    result = `Weight: ${kg.toFixed(2)} kg`;
                }
            } else if (!isNaN(mgkg) && !isNaN(kg)) {
                if (!isNaN(ml)) {
                    mgml = mgkg * kg / ml;
                    result = `Concentration: ${mgml.toFixed(2)} mg/mL`;
                } else if (!isNaN(mgml)) {
                    ml = mgkg * kg / mgml;
                    result = `Volume: ${ml.toFixed(2)} mL`;
                }
            }
            document.getElementById('result').innerText = result;
        }
    </script>
</body>
</html>
