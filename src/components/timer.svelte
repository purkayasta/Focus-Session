<script lang="ts">
	export let timeProp: number;
	export let sessionNameProp: string;

	let isTimerStarted: boolean = false;
	let actBtnName: string = 'Start';

	let minSecondValue: number = 0,
		minHourValue: number = 0,
		maxSecondValue: number = 9;

	let timerCallback: any;

	$: hourClockValue = timeProp ?? 0;
	let secondClockValue: number = minSecondValue;

	function time(): void {
		console.log(hourClockValue + '|' + secondClockValue);
		if (hourClockValue === minHourValue && secondClockValue === minSecondValue) {
			console.log('Finished');
			clearInterval(timerCallback);
		} else if (secondClockValue === minSecondValue) {
			hourClockValue--;
			secondClockValue = maxSecondValue;
		} else secondClockValue--;
	}
	function actBtnFunc(): void {
		if (isTimerStarted) {
			actBtnName = 'Start';
			clearInterval(timerCallback);
		} else {
			actBtnName = 'Stop';
			timerCallback = setInterval(time, 1000);
		}
		isTimerStarted = !isTimerStarted;
	}

	function resetTimer(): void {
		clearInterval(timerCallback);
		hourClockValue = timeProp;
		secondClockValue = 0;
	}
</script>

<div class="rounded overflow-hidden shadow-lg">
	<div class="">
		<div class="px-6 py-4 text-center">
			<div class="font-bold text-xl mb-4">{sessionNameProp}</div>
			<p>
				<span class="p-2 border-2">{hourClockValue}</span>
				<span class="p-2 border-2">{secondClockValue}</span>
			</p>
		</div>
		<div class="px-6 pt-4 pb-2 text-center">
			<button
				class="bg-green-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				on:click={actBtnFunc}>{actBtnName}</button
			>
			<button
				class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
				on:click={resetTimer}>Reset</button
			>
		</div>
	</div>
</div>
