class Application {
    start = () => {
        this.timeShowBlock = document.querySelector(".time-shower");
    };

    update = () => {
        const now  = new Date();
        const year = now.getFullYear();

        const thisNY = new Date(year, 0, 1);
        const celebrationEnd = new Date(year, 0, 4);
        const workEnd = new Date(year, 0, 11);

        if (now >= thisNY && now < celebrationEnd) {
            this.timeShowBlock.textContent = "С новым годом!";
            return;
        }

        if (now >= celebrationEnd && now < workEnd) {
            this.timeShowBlock.textContent = "Новый год прошёл, газуй работать!";
            return;
        }

        const target  = new Date(year + 1, 0, 1);
        const diffSec = Math.floor((target - now) / 1000);

        this.timeShowBlock.textContent = diffSec.toLocaleString("ru-RU");
    };
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const app = new Application();
app.start();

(async () => {
    while (true) {
        app.update();

        const delay = 1000 - (Date.now() % 1000);
        await sleep(delay);
    }
})();