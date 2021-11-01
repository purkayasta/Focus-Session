<script lang="ts">
	export let timeProp: number;
	export let sessionNameProp: string;

	let minSecondValue = 0,
		minHourValue = 0,
		maxSecondValue = 9;

	let timerCallback;
	let finished = false;

	$: hourClockValue = timeProp ?? 0;
	let secondClockValue = minSecondValue;

	function time(): void {
		console.log(hourClockValue + '|' + secondClockValue);
		if (hourClockValue === minHourValue && secondClockValue === minSecondValue) {
			finished = true;
		} else if (secondClockValue === minSecondValue) {
			hourClockValue--;
			secondClockValue = maxSecondValue;
		} else secondClockValue--;
	}
	function startTimer(): void {
		if (!finished) {
			stopTimer();
		} else timerCallback = setInterval(time, 1000);
	}
	function stopTimer(): void {
		clearInterval(timerCallback);
	}
	function resetTimer(): void {
		stopTimer();
		hourClockValue = timeProp;
		secondClockValue = 0;
	}
</script>

<div class="flex place-content-center">
	<div class="max-w-sm rounded overflow-hidden shadow-lg">
		<div class="px-6 py-4 text-center">
			<div class="font-bold text-xl mb-4">{sessionNameProp}</div>
			<p>
				<span class="p-2 border-2">{hourClockValue}</span>
				<span class="p-2 border-2">{secondClockValue}</span>
			</p>
		</div>
		<div class="px-6 pt-4 pb-2">
			<button
				class="bg-green-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				on:click={startTimer}>Start</button
			>
			<button
				class="bg-red-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				on:click={stopTimer}>Stop</button
			>
			<button
				class="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				on:click={resetTimer}>Reset</button
			>
		</div>
	</div>
</div>
