import captureWebsite from 'capture-website';

const list = [
    ["pomona", "https://tableau.campus.pomona.edu/views/DailyHealthCheckDashboard/PomonaCollegeCOVID-19FullWeeklyTestingData?%3AshowAppBanner=false&%3Adisplay_count=n&%3AshowVizHome=n&%3Aorigin=viz_share_link&%3Aembed=y", ".tab-vizHeader"],
    ["scripps", "https://www.scrippscollege.edu/scripps-strong/covid-19-dashboard/", "canvas.tab-widget"],
    ["cmc", "https://cmc-returns21.cmc.edu/covid-19-dashboard/", 5],
    ["hmc", "https://www.hmc.edu/covid-19/dashboard/"],
    ["pitzer", "https://www.pitzer.edu/pathway-forward/covid-19-dashboard/"],
];

const datePrefix = new Date().toLocaleDateString("sv");

for (let item of list) {
    console.time(`screenshotting ${item[0]}`);

    let options = {
        fullPage: true,
    };

    if (item[2]) {
        if (isNaN(item[2])) {
            options["waitForElement"] = item[2];
        } else {
            options["delay"] = item[2];
        }
    }

    await captureWebsite.file(
        item[1],
        `scs/${datePrefix}-${item[0]}.png`,
        {
            fullPage: true,
        },
    );

    console.timeEnd(`screenshotting ${item[0]}`);
}