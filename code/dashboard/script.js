function showAlert(featureName) {
    alert("Anda mengklik fitur: " + featureName + ". Fungsi backend Anda berjalan di sini!");
}

function scrollToCampaign() {
    document.getElementById('campaign-section').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const gridCampaign = document.getElementById('campaign-grid');
    
    const campaignData = {
        title: "Bantu Pengobatan Adik Rafa",
        targetAmount: "Rp 7.500.000",
        progressPercentage: 75,
        daysLeft: 12,
        imageUrl: "contoh-campaign.png"
    };

    for (let i = 0; i < 8; i++) {
        gridCampaign.innerHTML += `
            <div class="campaign-card">
                <img src="${campaignData.imageUrl}" alt="${campaignData.title}" class="campaign-img">
                <div class="campaign-body">
                    <div>
                        <h3>${campaignData.title}</h3>
                        <div class="campaign-funds">
                            <span class="amount">${campaignData.targetAmount}</span>
                            <span class="label">Terkumpul</span>
                        </div>
                    </div>
                    <div class="progress-container">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${campaignData.progressPercentage}%"></div>
                        </div>
                        <div class="progress-stats">
                            <span>${campaignData.progressPercentage}%</span>
                            <span>${campaignData.daysLeft} hari lagi</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
});