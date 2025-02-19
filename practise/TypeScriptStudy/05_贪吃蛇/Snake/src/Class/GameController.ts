import { Snake } from "./Snake";
import { ScorePanel } from "./ScorePanel";
import { Food } from "./Food";
export class GameController {
    // 游戏失败的条件 十秒内没有吃到食物就输了
    isAlive: boolean = true;
    direction: string = "ArrowRight";
    moveTimer: any;
    countdownIntervalTimer: any;

    timeout = 16;
    showCountdown: HTMLElement;

    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;

    btnUp: HTMLElement;
    btnLeft: HTMLElement;
    btnDown: HTMLElement;
    btnRight: HTMLElement;
    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.snake = new Snake();
        this.btnUp = document.querySelector(".btnUp")!;
        this.btnLeft = document.querySelector(".btnLeft")!;
        this.btnDown = document.querySelector(".btnDown")!;
        this.btnRight = document.querySelector(".btnRight")!;
        this.showCountdown = document.querySelector(
            ".score-panel .timer>span",
        )!;
        this.init();
    }
    // 绑定键盘控制的事件
    init(): void {
        document.addEventListener("keydown", this.kbdHandler.bind(this));
        this.snakeMove();
        this.btnCtrl();
        this.countdown();
    }
    kbdHandler(e: KeyboardEvent, direction?: string): void {
        let key: string;
        if (e !== null) {
            key = e.key;
        } else {
            key = direction!;
        }
        //第一层判断, 判断是否按了方向键
        if (
            [
                "w",
                "a",
                "s",
                "d",
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight",
            ].includes(key)
        ) {
            // 第二层判断, 判断是否反方向移动, 左的时候不能右, 右的时候不能左, 上的时候不能下, 下的时候不能上
            if (
                ["w", "ArrowUp"].includes(this.direction) &&
                ["s", "ArrowDown"].includes(key)
            ) {
                return;
            }
            if (
                ["a", "ArrowLeft"].includes(this.direction) &&
                ["d", "ArrowRight"].includes(key)
            ) {
                return;
            }
            if (
                ["s", "ArrowDown"].includes(this.direction) &&
                ["w", "ArrowUp"].includes(key)
            ) {
                return;
            }
            if (
                ["d", "ArrowRight"].includes(this.direction) &&
                ["a", "ArrowLeft"].includes(key)
            ) {
                return;
            }

            this.direction = key;
        }
        this.snakeMove();
    }
    snakeMove() {
        clearTimeout(this.moveTimer);
        let pos = this.snake.getPos();

        // console.log(pos);

        switch (this.direction) {
            case "w":
            case "ArrowUp":
                pos.y -= 10;
                break;
            case "a":
            case "ArrowLeft":
                pos.x -= 10;
                break;
            case "s":
            case "ArrowDown":
                pos.y += 10;
                break;
            case "d":
            case "ArrowRight":
                pos.x += 10;
                break;
        }
        // 出界检测
        if (pos.x < 0) {
            pos.x = 290;
        }
        if (pos.y < 0) {
            pos.y = 290;
        }
        if (pos.x > 290) {
            pos.x = 0;
        }
        if (pos.y > 290) {
            pos.y = 0;
        }

        // 得分机制
        if (
            pos.x === this.food.getPosition().x &&
            pos.y === this.food.getPosition().y
        ) {
            this.timeout += 2 * (this.scorePanel.level / 2 + 3);
            this.scorePanel.addScore();
            this.food.randomBorn();
            this.snake.addBody();
        }

        this.snake.setPos(pos);
        if (this.isAlive) {
            this.moveTimer = setTimeout(() => {
                this.snakeMove();
            }, 200 - this.scorePanel.level * 10);
        }
    }
    btnCtrl(): void {
        console.log(this.btnUp);

        this.btnUp.addEventListener("click", () => {
            console.log("btnUp");
            this.kbdHandler(null!, "ArrowUp");
        });
        this.btnLeft.addEventListener("click", () => {
            console.log("btnLeft");
            this.kbdHandler(null!, "ArrowLeft");
        });
        this.btnDown.addEventListener("click", () => {
            console.log("btnDown");
            this.kbdHandler(null!, "ArrowDown");
        });
        this.btnRight.addEventListener("click", () => {
            console.log("btnRight");
            this.kbdHandler(null!, "ArrowRight");
        });
    }

    // 倒计时相关方法
    countdown() {
        // console.log("====countdown执行了");

        //倒计时
        this.countdownIntervalTimer = setInterval(() => {
            //显示倒计时
            this.showCountdown.innerText = (--this.timeout).toString();
            if (this.timeout < 1) {
                alert("你饿死了");
                this.snake.gameOver();
                clearInterval(this.countdownIntervalTimer);
            }
        }, 1000);
    }
}
