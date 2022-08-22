<script lang="ts">
	/* eslint-disable @typescript-eslint/no-non-null-assertion */
	import ChevronUpKey from '$icons/chevron-up-key.svg?raw';
	import Icon from '$lib/SvgIcon.svelte';
	import { onDestroy, onMount } from 'svelte';

	import type { ColorInterface } from '$models/color';
	import type { PositionInterface } from '$models/snake/position.interface';
	import type { RadiusInterface } from '$models/snake/radius.interface';

	const width = 238;
	const height = 405;
	export let boardBorderColor: ColorInterface = { r: 0, g: 0, b: 0, a: 0 };
	export let boardBackgroundColor: ColorInterface = { r: 0, g: 0, b: 0, a: 0 };
	export let snakeColor: ColorInterface = { r: 67, g: 217, b: 173, a: 1 };
	export let snakeBorderColor: ColorInterface = { r: 0, g: 0, b: 0, a: 0 };

	let board: HTMLCanvasElement;
	let context: CanvasRenderingContext2D | null;
	let gameStarted = false;
	let pause = false;
	let game: number;

	const LEFT_KEY = 'ArrowLeft';
	const RIGHT_KEY = 'ArrowRight';
	const UP_KEY = 'ArrowUp';
	const DOWN_KEY = 'ArrowDown';
	const SPACE_KEY = 'Space';
	const P_KEY = 'KeyP';
	const R_KEY = 'KeyR';

	const snakeSquareSize = 10;
	const speed = snakeSquareSize;
	let dx = speed;
	let dy = 0;
	let changingDirection = false;

	let foodX: number;
	let foodY: number;

	const foodSvg = `
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" width="20" height="20">
		<circle cx="10.83" cy="10.96" r="10.35" fill="#43D9AD" opacity=".1"/>
		<circle cx="10.83" cy="10.96" r="7.35" fill="#43D9AD" opacity=".2"/>
		<circle cx="10.83" cy="10.96" r="4" fill="#43D9AD"/>
	</svg>
	`;

	const startSnake: PositionInterface[] = [
		{ x: 100, y: 200 },
		{ x: 90, y: 200 },
		{ x: 80, y: 200 },
		{ x: 70, y: 200 },
		{ x: 60, y: 200 }
	];
	let snake: PositionInterface[] = [...startSnake];

	const clearBoard = (): void => {
		if (!context) {
			return;
		}

		if (boardBackgroundColor.a !== undefined) {
			context.fillStyle = `rgb(${boardBackgroundColor.r} ${boardBackgroundColor.g} ${boardBackgroundColor.b} / ${boardBackgroundColor.a}%)`;
		} else {
			context.fillStyle = `rgb(${boardBackgroundColor.r} ${boardBackgroundColor.g} ${boardBackgroundColor.b})`;
		}
		if (boardBorderColor.a !== undefined) {
			context.strokeStyle = `rgb(${boardBorderColor.r} ${boardBorderColor.g} ${boardBorderColor.b} / ${boardBorderColor.a}%)`;
		} else {
			context.strokeStyle = `rgb(${boardBorderColor.r} ${boardBorderColor.g} ${boardBorderColor.b})`;
		}

		context.clearRect(0, 0, board.width, board.height);
		context.fillRect(0, 0, board.width, board.height);
		roundRect(0, 0, board.width, board.height, 8);
	};

	const drawSnakePart = (snakePart: PositionInterface, index: number): void => {
		if (!context) {
			return;
		}

		const alphaMax = 70;
		const alphaBefore =
			Math.round((alphaMax / snake.length) * (snake.length - index) * 100) / 100 + (100 - alphaMax);
		const alphaAfter =
			Math.round((alphaMax / snake.length) * (snake.length - (index - 1)) * 100) / 100 +
			(100 - alphaMax);

		const gradient = context.createLinearGradient(
			snakePart.x - snakeSquareSize / 2,
			snakePart.y - snakeSquareSize / 2,
			snakeSquareSize + (snakePart.x - snakeSquareSize / 2),
			snakeSquareSize + (snakePart.y - snakeSquareSize / 2)
		);
		gradient.addColorStop(
			0,
			`rgb(${snakeColor.r} ${snakeColor.g} ${snakeColor.b} / ${alphaBefore}%)`
		);
		gradient.addColorStop(
			1,
			`rgb(${snakeColor.r} ${snakeColor.g} ${snakeColor.b} / ${alphaAfter}%)`
		);

		context.fillStyle = gradient;
		if (snakeBorderColor.a) {
			context.strokeStyle = `rgb(${snakeBorderColor.r} ${snakeBorderColor.g} ${snakeBorderColor.b} / ${snakeBorderColor.a}%)`;
		} else {
			context.strokeStyle = `rgb(${snakeBorderColor.r} ${snakeBorderColor.g} ${snakeBorderColor.b})`;
		}

		context.fillRect(
			snakePart.x - snakeSquareSize / 2,
			snakePart.y - snakeSquareSize / 2,
			snakeSquareSize,
			snakeSquareSize
		);
		context.strokeRect(
			snakePart.x - snakeSquareSize / 2,
			snakePart.y - snakeSquareSize / 2,
			snakeSquareSize,
			snakeSquareSize
		);
	};

	const drawSnake = (): void => {
		snake.forEach(drawSnakePart);
	};

	const moveSnake = (): void => {
		const head = { x: snake[0].x + dx, y: snake[0].y + dy };
		snake.unshift(head);
		const hasEatenFood = snake[0].x === foodX && snake[0].y === foodY;

		if (hasEatenFood) {
			generateFood();
		} else {
			const snakePart = snake.pop()!;
			clearSnakePart(snakePart);
		}
	};

	const clearSnakePart = (snakePart: PositionInterface): void => {
		if (!context || !snakePart) {
			return;
		}
		context.clearRect(snakePart.x, snakePart.y, snakeSquareSize, snakeSquareSize);
	};

	const handleKey = (event: KeyboardEvent): void => {
		if (event.code === SPACE_KEY && !gameStarted) {
			startGame();
		} else if ((event.code === SPACE_KEY && gameStarted) || (event.code === P_KEY && gameStarted)) {
			pause = !pause;
		} else if (event.code === R_KEY && gameStarted) {
			resetGame();
		}

		if (changingDirection) {
			return;
		}

		changingDirection = true;
		choseDirection(event.code);
	};

	const choseDirection = (keyPressed: string): void => {
		const goingUp = dy === -speed;
		const goingDown = dy === speed;
		const goingRight = dx === speed;
		const goingLeft = dx === -speed;

		if (keyPressed === LEFT_KEY && !goingRight) {
			dx = -speed;
			dy = 0;
		}

		if (keyPressed === UP_KEY && !goingDown) {
			dx = 0;
			dy = -speed;
		}

		if (keyPressed === RIGHT_KEY && !goingLeft) {
			dx = speed;
			dy = 0;
		}

		if (keyPressed === DOWN_KEY && !goingUp) {
			dx = 0;
			dy = speed;
		}
	};

	const hasGameEnded = (): boolean => {
		for (let i = 4; i < snake.length; i++) {
			if (
				snake[i].x - snakeSquareSize / 2 === snake[0].x - snakeSquareSize / 2 &&
				snake[i].y - snakeSquareSize / 2 === snake[0].y - snakeSquareSize / 2
			) {
				return true;
			}
		}
		const hitLeftWall = snake[0].x - snakeSquareSize / 2 < 0;
		const hitRightWall = snake[0].x - snakeSquareSize / 2 > board.width - snakeSquareSize;
		const hitToptWall = snake[0].y - snakeSquareSize / 2 < 0;
		const hitBottomWall = snake[0].y - snakeSquareSize / 2 > board.height - snakeSquareSize;

		return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall;
	};

	const randomFood = (min: number, max: number): number =>
		Math.round((Math.random() * (max - min) + min) / snakeSquareSize) * snakeSquareSize;

	const generateFood = (): void => {
		foodX = randomFood(snakeSquareSize * 2, board.width - snakeSquareSize * 2);
		foodY = randomFood(snakeSquareSize * 2, board.height - snakeSquareSize * 2);
		snake.forEach((part) => {
			if (part.x == foodX && part.y == foodY) {
				generateFood();
			}
		});
	};

	const drawFood = (): void => {
		if (!context) {
			return;
		}

		const DOMURL = window.URL || window.webkitURL || window;

		const img1 = new Image();
		const svg = new Blob([foodSvg], { type: 'image/svg+xml' });
		const url = DOMURL.createObjectURL(svg);
		img1.onload = () => {
			if (!context) {
				return;
			}
			context.drawImage(img1, foodX - 10, foodY - 10);
			DOMURL.revokeObjectURL(url);
		};
		img1.src = url;
	};

	const main = (): void => {
		game = window.setInterval(() => {
			if (pause) {
				return;
			}

			if (hasGameEnded()) {
				gameStarted = false;
				dx = speed;
				dy = 0;

				if (game) {
					window.clearInterval(game);
				}

				return;
			}

			gameStarted = true;
			changingDirection = false;

			clearBoard();
			drawFood();
			moveSnake();
			drawSnake();
		}, 100);
	};

	const startGame = (): void => {
		gameStarted = true;
		changingDirection = false;
		pause = false;
		snake = [...startSnake];

		main();
		generateFood();
	};

	const resetGame = (): void => {
		if (game) {
			clearInterval(game);
		}

		gameStarted = false;
		changingDirection = false;
		pause = false;
		snake = [...startSnake];
		clearBoard();
		drawSnake();
	};

	const roundRect = (
		x: number,
		y: number,
		width: number,
		height: number,
		radius: RadiusInterface | number,
		stroke = true,
		fill = false
	): void => {
		if (!context) {
			return;
		}
		const baseCornerRadius: RadiusInterface = {
			upperLeft: 0,
			upperRight: 0,
			lowerLeft: 0,
			lowerRight: 0
		};

		const cornerRadius: RadiusInterface = Object.keys(baseCornerRadius).reduce((acc, key) => {
			return {
				...acc,
				[key]: typeof radius === 'object' ? radius[key as keyof RadiusInterface] : radius
			};
		}, baseCornerRadius);

		if (
			cornerRadius.lowerLeft !== undefined &&
			cornerRadius.lowerRight !== undefined &&
			cornerRadius.upperLeft !== undefined &&
			cornerRadius.upperRight !== undefined
		) {
			context.beginPath();
			context.moveTo(x + cornerRadius.upperLeft, y);
			context.lineTo(x + width - cornerRadius.upperRight, y);
			context.quadraticCurveTo(x + width, y, x + width, y + cornerRadius.upperRight);
			context.lineTo(x + width, y + height - cornerRadius.lowerRight);
			context.quadraticCurveTo(
				x + width,
				y + height,
				x + width - cornerRadius.lowerRight,
				y + height
			);
			context.lineTo(x + cornerRadius.lowerLeft, y + height);
			context.quadraticCurveTo(x, y + height, x, y + height - cornerRadius.lowerLeft);
			context.lineTo(x, y + cornerRadius.upperLeft);
			context.quadraticCurveTo(x, y, x + cornerRadius.upperLeft, y);
			context.closePath();
		}

		context.lineJoin = 'round';

		if (stroke) {
			context.stroke();
		}
		if (fill) {
			context.fill();
		}
	};

	onMount((): void => {
		context = board?.getContext('2d');
		clearBoard();
		drawSnake();
	});

	onDestroy((): void => {
		if (game) {
			clearInterval(game);
		}
	});
</script>

<svelte:window on:keydown={handleKey} />

<section class="snake" style:grid-template-columns={`${width}px minmax(0,1fr)`}>
	<div class="snake__canvas-container" style:width={`${width}px`} style:height={`${height}px`}>
		<canvas bind:this={board} {width} {height} />
	</div>

	<div class="snake__board">
		<div class="snake__board__keys">
			<div class="snake__board__keys__text">//&nbsp;use keyboard</div>
			<div class="snake__board__keys__text">//&nbsp;P to pause</div>
			<div class="snake__board__keys__text">//&nbsp;Space to start</div>
			<div class="snake__board__keys__text">//&nbsp;R to restart</div>
			<div class="snake__board__keys__text">//&nbsp;arrows to play</div>
			<div class="snake__board__keys__list">
				<span class="snake__board__keys__list__item snake__board__keys__list__item--up">
					<span class="snake__board__keys__list__item__icon">
						<Icon data={ChevronUpKey} />
					</span>
				</span>
				<span class="snake__board__keys__list__item snake__board__keys__list__item--left">
					<span class="snake__board__keys__list__item__icon">
						<Icon data={ChevronUpKey} />
					</span>
				</span>
				<span class="snake__board__keys__list__item snake__board__keys__list__item--right">
					<span class="snake__board__keys__list__item__icon">
						<Icon data={ChevronUpKey} />
					</span>
				</span>
				<span class="snake__board__keys__list__item snake__board__keys__list__item--down">
					<span class="snake__board__keys__list__item__icon">
						<Icon data={ChevronUpKey} />
					</span>
				</span>
			</div>
		</div>
	</div>

	<span class="snake__bolt snake__bolt--top-left">
		<img src="/svg/bolt-top-left.svg" width="22px" alt="" />
	</span>
	<span class="snake__bolt snake__bolt--top-right">
		<img src="/svg/bolt-top-right.svg" width="22px" alt="" />
	</span>
	<span class="snake__bolt snake__bolt--bottom-right">
		<img src="/svg/bolt-bottom-right.svg" width="22px" alt="" />
	</span>
	<span class="snake__bolt snake__bolt--bottom-left">
		<img src="/svg/bolt-bottom-left.svg" width="22px" alt="" />
	</span>
</section>

<style lang="scss">
	@use 'lib/breakpoints' as br;
	@use 'lib/font' as font;

	.snake {
		display: grid;
		gap: 24px;
		position: relative;
		background: linear-gradient(
			150.26deg,
			rgb(23 85 83 / 0.7) 1.7%,
			rgb(67 217 173 / 0.091) 81.82%
		);
		border: 1px solid #0c1616;
		box-shadow: inset 0px 2px 0px rgb(255 255 255 / 0.3);
		backdrop-filter: blur(64px);
		border-radius: var(--border-radius);
		max-width: 31.875rem;
		padding: 2.1875rem 2.1875rem 2.1875rem 1.875rem;

		&__canvas-container {
			border-radius: var(--border-radius);
			background-color: rgb(1 22 39 / 0.84);
			box-shadow: inset 1px 5px 11px rgb(2 18 27 / 0.71);
		}

		&__board {
			&__keys {
				@include font.fontWeight(450);

				font-size: 0.875rem;
				line-height: 1.2857;
				padding: 0.8125rem;
				background-color: rgb(1 20 35 / 0.19);
				border-radius: var(--border-radius);

				&__list {
					display: grid;
					grid-template-columns: repeat(3, 3.0675rem);
					grid-template-rows: repeat(2, 1.7931rem);
					gap: 0.2737rem;
					margin-top: 1rem;

					&__item {
						display: inline-flex;
						align-items: center;
						justify-content: center;
						background-color: var(--background);
						border: 1px solid var(--lines);
						border-radius: var(--border-radius);

						&--up {
							grid-column: 2;
							grid-row: 1;
						}

						&--left {
							grid-column: 1;
							grid-row: 2;

							.snake__board__keys__list__item__icon {
								transform: rotate(-90deg);
							}
						}

						&--down {
							grid-column: 2;
							grid-row: 2;

							.snake__board__keys__list__item__icon {
								transform: rotate(-180deg);
							}
						}

						&--right {
							grid-column: 3;
							grid-row: 2;

							.snake__board__keys__list__item__icon {
								transform: rotate(90deg);
							}
						}

						&__icon {
							display: inline-flex;
							align-items: center;
							justify-content: center;
							width: 0.5313rem;
						}
					}
				}
			}

			@media (max-width: 1299px) {
				display: none;
			}
		}

		&__bolt {
			--size: 1.375rem;
			--top: 11.08px;
			--left: 11.73px;
			--right: 11.77px;
			--bottom: 11.76px;

			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: var(--size);
			height: var(--size);

			&--top-left,
			&--top-right,
			&--bottom-right,
			&--bottom-left {
				position: absolute;
			}

			&--top-left,
			&--top-right {
				top: var(--top);
			}

			&--bottom-right,
			&--bottom-left {
				bottom: var(--bottom);
			}

			&--top-left,
			&--bottom-left {
				left: var(--left);
			}

			&--top-right,
			&--bottom-right {
				right: var(--right);
			}
		}

		@media (max-width: 1299px) {
			gap: 0;
		}

		@include br.mobile {
			display: none;
		}
	}
</style>
