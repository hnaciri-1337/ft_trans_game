import { Ball, createBall } from './Ball';
import { Player } from './Player';

function    collision(ball: Ball, player: Player, one: boolean): boolean
{
    const   b_top = ball.y - ball.radius;
    const   b_bottom = ball.y + ball.radius;
    const   b_left = ball.x - ball.radius;
    const   b_right = ball.x + ball.radius;

    const   p_top = player.y;
    const   p_bottom = player.y + player.height;
    const   p_right = player.x + player.width;
    const   p_left = player.x;

    if (one) return (b_bottom >= p_top && b_left <= p_right && b_top <= p_bottom);
    return (b_bottom >= p_top && b_right >= p_left && b_top <= p_bottom);
}

function        lerp(a: number, b: number, p: number)
{
    return (a + ((b - a) * (p / 100)));
}

export default function Update(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, ball: Ball, player1: Player, player2: Player) {
    if (ball.stop === false)
    {
        ball.x += ball.velocityX;
        ball.y += ball.velocityY;
    }
    // Enable disable AI
    player2.y = lerp(player2.y, ball.y - (player2.height / 2), player2.ai);
    if (player2.y < 0) player2.y = 2;
    else if (player2.y > canvas.height - player2.height) player2.y = canvas.height - player2.height - 2;
    // player1.y = ball.y - (player1.height / 2);
    if (ball.x >= player2.x || ball.x <= player1.x + player1.width)
    {
        if (ball.x <= player1.x + player1.width)
            player2.score++;
        else
        {
            player1.score++;
            console.log(player2.ai);
            player2.ai *= 1.5;
            if (player2.ai > 10)
                player2.ai = 10;
            console.log(player2.ai);
        }
        const temp: Ball = createBall(canvas, ball.color, ball.reverseColor);
        ball.x = temp.x;
        ball.y = temp.y;
        ball.speedX = temp.speedX;
        ball.speedY = temp.speedY;
        ball.velocityX = temp.velocityX;
        ball.velocityY = temp.velocityY;
        ball.stop = true;
        setTimeout(() => {
            ball.stop = false;
        }, 1000);
    }
    else if (collision(ball, player1, true) || collision(ball, player2, false)) {ball.velocityX *= -(1 + (ball.speedX / 100)); ball.velocityY *= (1 + (ball.speedY / 100));}
    if (ball.y >= canvas.height || ball.y <= 0) ball.velocityY *= -1;
    if (ball.velocityX >= ball.maxX) ball.velocityX = Math.random() * ball.maxX;
    else if (ball.velocityX <= -ball.maxX) ball.velocityX = -1 * Math.random() * ball.maxX;
    if (ball.velocityY >= ball.maxY) ball.velocityY = ball.maxY;
    else if (ball.velocityY <= -ball.maxY) ball.velocityY = -ball.maxY;
}
