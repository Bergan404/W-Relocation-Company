// Tabout function
$(document).ready(function () {
    $(".tab-btn").on("click", function () {
        const target = $(this).data("tab");

        $(".tab-btn").removeClass("active");
        $(this).addClass("active");

        $(".tab-pane").removeClass("active");
        $("#" + target).addClass("active");
    });
});

// Calc
$(document).ready(function () {
    const rebatePercent = 30;

    $("#calculateRebate").on("click", function () {
        const salePrice = parseFloat($("#salePrice").val());
        const commissionRate = parseFloat($("#commission").val());
        const movingCosts = parseFloat($("#movingCosts").val()) || 0;
        const closingCosts = parseFloat($("#closingCosts").val()) || 0;
        const additional = parseFloat($("#additional").val()) || 0;

        const commissionAmount = salePrice * (commissionRate / 100);
        const rebateAmount = commissionAmount * (rebatePercent / 100);
        
        

        $("#rebateResults").toggleClass("visible");
        $("#rebateResults").html(`
            <h4>Estimated Rebate</h4>
            <p><strong>Rebate Amount:</strong> $${rebateAmount.toFixed(2)}</p>
        `);
    });

    $("#toggleRebateTable").on("click", function () {
        $("#rebateTable").toggleClass("visible");

        if ($("#rebateTable").hasClass("visible")) {
            $(this).text("Hide Rebate Table");
            renderRebateTable();
        } else {
            $(this).text("View Rebate Table");
        }
    });

    function renderRebateTable() {
        const rows = [
            { min: 500000, max: 549000, rate: 2.5 },
            { min: 550000, max: 599000, rate: 2.5 },
            { min: 600000, max: 649000, rate: 2.5 },
            { min: 650000, max: 699000, rate: 2.5 }
            // Add more rows as needed
        ];

        let html = `
            <table>
                <thead>
                    <tr>
                        <th>Sale Price Range</th>
                        <th>Commission Rate</th>
                        <th>Estimated Rebate</th>
                    </tr>
                </thead>
                <tbody>
        `;

        rows.forEach(function (row) {
            const avgPrice = (row.min + row.max) / 2;
            const commission = avgPrice * (row.rate / 100);
            const rebate = commission * (rebatePercent / 100);

            html += `
                <tr>
                    <td>$${row.min.toLocaleString()} - $${row.max.toLocaleString()}</td>
                    <td>${row.rate}%</td>
                    <td>$${rebate.toFixed(2)}</td>
                </tr>
            `;
        });

        html += `</tbody></table>`;
        $("#rebateTable").html(html);
    }
});


// rebate table func
$(document).ready(function () {
    const rebatePercent = 30;

    function updateEstimate() {
        const price = parseInt($("#priceSlider").val());
        const commissionRate = parseFloat($("#commissionSlider").val());

        const commission = price * (commissionRate / 100);
        const rebate = commission * (rebatePercent / 100);

        const roundedMin = Math.floor(price / 50000) * 50000;
        const roundedMax = roundedMin + 49999;

        // Update UI
        $("#priceValue").text(price.toLocaleString());
        $("#commissionValue").text(commissionRate.toFixed(1));
        $("#rangeMin").text(roundedMin.toLocaleString());
        $("#rangeMax").text(roundedMax.toLocaleString());
        $("#liveCommissionRate").text(commissionRate.toFixed(1));
        $("#rebateAmount").text(rebate.toFixed(2));
    }

    // Bind events
    $("#priceSlider, #commissionSlider").on("input", updateEstimate);

    // Run once on page load
    updateEstimate();
});